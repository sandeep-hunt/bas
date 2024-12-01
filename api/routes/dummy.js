const express = require('express');
const crypto = require('crypto');
const db = require('./db'); // Adjust the path based on your project structure
const { loadTemplate, sendEmailEventBooking } = require('./emailUtils'); // Replace with your actual utility file for emails
require('dotenv').config();

const router = express.Router();

router.post('/book-event/verify-payment', async (req, res) => {
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature, bookingId, email } = req.body;

    try {
        // Verify Razorpay signature
        const body = `${razorpay_order_id}|${razorpay_payment_id}`;
        const expectedSignature = crypto
            .createHmac('sha256', process.env.RAZORPAY_KEY_SECRET)
            .update(body)
            .digest('hex');

        if (expectedSignature !== razorpay_signature) {
            // Update booking status to 'failed' if the signature doesn't match
            const query = 'UPDATE event_booking SET payment_status = ?, payment_id = ? WHERE event_booking_id = ?';
            await db.query(query, ['failed', razorpay_payment_id, bookingId]);
            return res.status(400).send('Payment verification failed');
        }

        // Update booking status to 'paid'
        const updateQuery = 'UPDATE event_booking SET payment_status = ?, payment_id = ? WHERE event_booking_id = ?';
        await db.query(updateQuery, ['paid', razorpay_payment_id, bookingId]);

        // Fetch the booking record
        const fetchLastQuery = `SELECT * FROM event_booking WHERE event_booking_id = ?`;
        const [lastBooking] = await db.query(fetchLastQuery, [bookingId]);

        if (!lastBooking) {
            return res.status(404).send('Booking record not found');
        }

        // Fetch the event details
        const fetchEventQuery = `SELECT * FROM events WHERE event_id = ?`;
        const [event] = await db.query(fetchEventQuery, [lastBooking.event_id]);

        if (!event) {
            return res.status(404).send('Event record not found');
        }

        // Format date and time
        const eventDate = new Date(event.event_date);
        const formattedEventDate = eventDate.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
        });

        const eventDateTimeString = `${event.event_date.split('T')[0]}T${event.event_time}`;
        const eventTime = new Date(eventDateTimeString);
        const formattedEventTime = eventTime.toLocaleTimeString('en-US', {
            hour: '2-digit',
            minute: '2-digit',
            hour12: true,
        });

        // Prepare email data
        const replacements = {
            eventImage: `${process.env.BASE_URL + event.event_image}`,
            eventName: event.event_name,
            bookingNumber: lastBooking.event_booking_number,
            eventLocation: event.event_location,
            bookingName: lastBooking.event_booking_name,
            eventDate: formattedEventDate,
            eventTime: formattedEventTime,
        };

        console.log('Email replacements:', replacements);

        // Send confirmation email
        const htmlContent = await loadTemplate('bookingConfirmation', replacements);
        const subject = 'Booking Confirmation';
        const message = `<p>Dear ${lastBooking.event_booking_name},</p><p>Thank you for your booking. Your payment was successful and your booking number is ${lastBooking.event_booking_number}.</p><br>Best Regards,<br>Event Team`;

        await sendEmailEventBooking(email, subject, htmlContent);
        res.json({ success: true, message: 'Payment verified and email sent successfully' });

    } catch (error) {
        console.error('Error processing payment verification:', error);
        res.status(500).send('Internal server error');
    }
});

module.exports = router;
