const express = require('express');
const router = express.Router();
const Razorpay = require('razorpay');
const crypto = require('crypto');
const db =require('../middleware/connection');

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

    const query = 'INSERT INTO event_booking (event_booking_name, event_booking_dob, event_booking_gender, event_booking_email, event_booking_contact, event_booking_state, event_booking_city, event_booking_address, event_booking_pincode, event_id) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';
    db.query(query, [name, date, gender, email, mobile, state, city, address, pincode, eventId], (err, result) => {
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

// Handle payment verification
router.post('/book-event/verify-payment', (req, res) => {
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature, bookingId } = req.body;

    // Generate the expected signature using the order ID and payment ID
    const body = razorpay_order_id + "|" + razorpay_payment_id;

    const expectedSignature = crypto
        .createHmac('sha256', process.env.RAZORPAY_KEY_SECRET)
        .update(body.toString())
        .digest('hex');

    if (expectedSignature === razorpay_signature) {
        // Update the booking to mark it as paid
        const query = 'UPDATE event_booking SET payment_status = ?, payment_id = ? WHERE event_booking_id = ?';
        db.query(query, ['paid', razorpay_payment_id, bookingId], (err, result) => {
            if (err) {
                console.error('Error updating booking:', err);
                return res.status(500).send('Error verifying payment');
            }
            res.json({ success: true, message: 'Payment verified successfully' });
        });
    } else {
        // Failure: Mark the booking as 'failed' and log the failure
        const query = 'UPDATE event_booking SET payment_status = ?, payment_id = ? WHERE event_booking_id = ?';
        db.query(query, ['failed', razorpay_payment_id, bookingId], (err, result) => {
            if (err) {
                console.error('Error updating booking status:', err);
                return res.status(500).send('Error updating failed payment');
            }
        })
    }
});

module.exports = router;