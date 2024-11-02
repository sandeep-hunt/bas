const express = require('express');
const router = express.Router();
const Razorpay = require('razorpay');
const crypto = require('crypto');
const db = require('../middleware/connection');
const sendEmail = require('../middleware/emailconfig');

// Get Blogs
router.get('/events', (req, res) => {
    const sql = 'SELECT * FROM events';  // Modify this query based on your blog table
    db.query(sql, (err, results) => {
        if (err) {
            return res.status(500).json({ error: 'Failed to fetch events' });
        }
        res.json(results);
    });
});

// Razorpay instance
const razorpay = new Razorpay({
    key_id: process.env.RAZORPAY_KEY_ID,
    key_secret: process.env.RAZORPAY_KEY_SECRET
});

//Get event by id
router.get('/events/:slug', (req, res) => {
    const eventSlug = req.params.slug;

    // SQL query to get the event details by ID
    const query = 'SELECT * FROM events WHERE event_slug = ?';

    db.query(query, [eventSlug], (err, results) => {
        if (err) {
            console.error('Error fetching event:', err);
            return res.status(500).send('Internal Server Error');
        }

        if (results.length > 0) {
            res.json(results[0]); // Send the first result as the event
        } else {
            res.status(404).send('Event not found');
        }
    });
});

router.post('/book-event', async (req, res) => {
    const { name, date, gender, email, mobile, state, city, address, pincode, eventId, eventPrice } = req.body;

    // Fetch the second-to-last row in the event_booking table
    const fetchLastQuery = `
        SELECT * FROM event_booking 
        ORDER BY event_booking_id DESC 
        LIMIT 1
    `;

    db.query(fetchLastQuery, async (fetchErr, rows) => {
        if (fetchErr) {
            console.error('Error fetching last booking number:', fetchErr);
            return res.status(500).send('Error fetching last booking number');
        }
        const lastBooking = rows.length ? rows[0] : null; // Default to 0 if there are no bookings
        const booking_number = parseInt(lastBooking.event_booking_number) + 1;

        const query = 'INSERT INTO event_booking (event_booking_number,event_booking_name, event_booking_dob, event_booking_gender, event_booking_email, event_booking_contact, event_booking_state, event_booking_city, event_booking_address, event_booking_pincode, event_id) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';
        db.query(query, [booking_number, name, date, gender, email, mobile, state, city, address, pincode, eventId], (err, result) => {
            if (err) {
                console.error('Error storing booking:', err);
                return res.status(500).send('Error booking event');
            }
            const bookingId = result.insertId;
    
            // Create Razorpay order
            const options = {
                amount: eventPrice * 100, // Payment amount in paise
                currency: 'INR',
                receipt: `receipt_order_${bookingId}`,
            };
    
            razorpay.orders.create(options, (err, order) => {
                if (err) {
                    console.error('Error creating Razorpay order:', err);
                    return res.status(500).send('Payment failed');
                }
                res.json({ orderId: order.id, bookingId });
            });
        });
    });
});

// Handle payment verification
router.post('/book-event/verify-payment', async (req, res) => {
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature, bookingId, email } = req.body;

    const body = razorpay_order_id + "|" + razorpay_payment_id;
    const expectedSignature = crypto
        .createHmac('sha256', process.env.RAZORPAY_KEY_SECRET)
        .update(body.toString())
        .digest('hex');

    if (expectedSignature === razorpay_signature) {
        const query = 'UPDATE event_booking SET payment_status = ?, payment_id = ? WHERE event_booking_id = ?';
        db.query(query, ['paid', razorpay_payment_id, bookingId], async (err, result) => {
            if (err) {
                console.error('Error updating booking:', err);
                return res.status(500).send('Error verifying payment');
            }

            // Fetch the last row in the event_booking table
            const fetchLastQuery = `
                SELECT * FROM event_booking 
                ORDER BY event_booking_id DESC 
                LIMIT 1
            `;

            db.query(fetchLastQuery, async (fetchErr, rows) => {
                if (fetchErr) {
                    console.error('Error fetching last booking:', fetchErr);
                    return res.status(500).send('Error fetching last booking');
                }

                const lastBooking = rows.length ? rows[0] : null;

                // Send confirmation email
                const subject = 'Booking Confirmation';
                const message = `Dear Customer,\n\nThank you for your booking. Your payment was successful and your booking ID is ${lastBooking.event_booking_number}.\n\nBest Regards,\nEvent Team`;
    
                try {
                    await sendEmail(email, subject, message);
                    res.json({ success: true, message: 'Payment verified and email sent successfully' });
                } catch (error) {
                    console.error('Error sending email:', error);
                    res.status(500).json({ success: true, message: 'Payment verified, but email sending failed' });
                }
            });

        });
    } else {
        const query = 'UPDATE event_booking SET payment_status = ?, payment_id = ? WHERE event_booking_id = ?';
        db.query(query, ['failed', razorpay_payment_id, bookingId], (err, result) => {
            if (err) {
                console.error('Error updating booking status:', err);
                return res.status(500).send('Error updating failed payment');
            }
            res.status(400).send('Payment verification failed');
        });
    }
});

module.exports = router;