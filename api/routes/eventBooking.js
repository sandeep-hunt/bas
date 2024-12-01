const express = require('express');
const router = express.Router();
const db = require('../middleware/connection');
const { sendEmail } = require('../middleware/emailconfig');
const verifyToken = require('../middleware/verifyToken');
const Razorpay = require('razorpay');

const razorpay = new Razorpay({
    key_id: process.env.RAZORPAY_KEY_ID,
    key_secret: process.env.RAZORPAY_KEY_SECRET,
});


router.get('/', verifyToken, (req, resp) => {
    // Count the total number of items
    db.query('SELECT COUNT(*) AS count FROM event_booking', (err, countResult) => {
        if (err) {
            return resp.status(500).json({ error: err.message });
        }

        const totalItems = countResult[0].count;

        // Fetch all items with event_name without pagination
        const sql = `
            SELECT eb.*, e.event_name, e.event_status
            FROM event_booking eb
            JOIN events e ON eb.event_id = e.event_id
        `;
        db.query(sql, (err, results) => {
            if (err) {
                return resp.status(500).json({ error: err.message });
            }
            resp.json(results);
        });
    });
});


// router.get('/',verifyToken, (req, resp) => {
//     const page = parseInt(req.query.page) || 1;   // Default to page 1
//     const limit = parseInt(req.query.limit) || 10; // Default to 10 items per page
//     const offset = (page - 1) * limit;

//     // Count the total number of items
//     db.query('SELECT COUNT(*) AS count FROM event_booking', (err, countResult) => {
//         if (err) {
//             return resp.status(500).json({ error: err.message });
//         }

//         const totalItems = countResult[0].count;
//         const totalPages = Math.ceil(totalItems / limit);

//         // Fetch paginated items
//         const sql = `SELECT * FROM event_booking `;
//         db.query(sql, (err, results) => {
//             if (err) {
//                 return resp.status(500).json({ error: err.message });
//             }
//             resp.json(results);
//         });
//     });
// })


router.post('/add', verifyToken,async (req, resp) => {
    const {
        event_booking_number, event_booking_name,
        event_booking_dob, event_booking_email,
        event_booking_contact, event_booking_gender,
        event_booking_state, event_booking_city,
        event_booking_address, event_booking_pincode,
        payment_id, payment_status,
        event_id
    } = req.body;

    const query = `
        INSERT INTO event_booking(
            event_booking_number, event_booking_name,
            event_booking_dob, event_booking_email,
            event_booking_contact, event_booking_gender,
            event_booking_state, event_booking_city,
            event_booking_address, event_booking_pincode,
            payment_id, payment_status, event_id
        ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `;

    db.query(query, [
        event_booking_number, event_booking_name,
        event_booking_dob, event_booking_email,
        event_booking_contact, event_booking_gender,
        event_booking_state, event_booking_city,
        event_booking_address, event_booking_pincode,
        payment_id, payment_status, event_id
    ], async (err, result) => {
        if (err) {
            return resp.status(500).json({ message: 'Error adding eventBooking', details: err.message });
        } else {
            try {
                const options = {
                    amount: 50000, 
                    currency: "INR",
                    receipt: `receipt_${result.insertId}`,
                    payment_capture: 1, 
                    notes: {
                        event_booking_id: result.insertId,
                        event_booking_name,
                    }
                };

                const order = await razorpay.orders.create(options);

                // Construct the payment link URL
                const paymentLink = `https://rzp.io/i/${order.id}`;

                // Send the email with the payment link
                await sendEmail(
                    event_booking_email,
                    "Complete Your Payment",
                    `
                    <h1>Complete Your Payment</h1>
                    <p>Thank you for booking with us. Please complete your payment by clicking the following link:</p>
                    <a href="${paymentLink}" style="color: #0c66c2; text-decoration: none; font-weight: bold;">Complete Payment</a>
                    <p>If the link doesn’t work, copy and paste the following URL into your browser:</p>
                    <p>${paymentLink}</p>
                    <p>Thank you!</p>
                    `
                );

                resp.status(201).json({
                    message: 'EventBooking added successfully',
                    event_booking_id: result.insertId,
                    payment_link: paymentLink
                });
            } catch (error) {
                resp.status(500).json({ message: 'Error creating Razorpay order', details: error.message });
            }
        }
    });
});


router.put('/update/:id',verifyToken, (req, resp) => {
    const event_booking_id = req.params.id;
    const {
        event_booking_name, event_booking_dob, event_booking_city,
        event_booking_email, event_booking_contact, event_booking_address,
        event_booking_gender, event_booking_pincode
    } = req.body;

    const query = `
        UPDATE event_booking 
        SET 
            event_booking_name = ?, 
            event_booking_dob = ?, 
            event_booking_city = ?, 
            event_booking_email = ?, 
            event_booking_contact = ?, 
            event_booking_address = ?, 
            event_booking_gender = ?, 
            event_booking_pincode = ?
        WHERE 
            event_booking_id = ?
    `;

    db.query(query, [
        event_booking_name, event_booking_dob, event_booking_city,
        event_booking_email, event_booking_contact, event_booking_address,
        event_booking_gender, event_booking_pincode, event_booking_id
    ], (err, result) => {
        if (err) {
            resp.status(500).json({ message: "Failed to update booking event ", details: err.message });
        }
        if (result.affectedRows === 0) {
            return resp.status(404).json({ message: 'Event Booking not found' })
        }
        else {
            resp.status(200).json({ message: "Event Booking updated successfully" });
        }
    });
});

router.delete('/delete/:id',verifyToken, (req, res) => {
    const event_booking_id = req.params.id;

    const sql = 'DELETE FROM event_booking WHERE event_booking_id = ?';
    db.query(sql, [event_booking_id], (err, result) => {
        if (err) {
            return res.status(500).json({ error: 'Failed to delete event', details: err.message });
        }
        if (result.affectedRows === 0) {
            return res.status(404).json({ message: 'Event Booking not found' });
        }
        res.json({ message: 'Event deleted successfully' });
    });
});

module.exports = router;