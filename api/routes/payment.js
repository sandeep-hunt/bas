const express = require('express');
const Razorpay = require('razorpay');
const db =require('../middleware/connection');
const { sendEmailRefundPayment } = require('../middleware/emailconfig');
const verifyToken = require('../middleware/verifyToken');

const router = express.Router();

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
});


router.post('/refund',verifyToken, async (req, res) => {
  const { payment_id, bookingId, email } = req.body;

  try {
   
    const refund = await razorpay.payments.refund(payment_id);

    if (refund.status === 'processed') {
      
      const query = 'UPDATE event_booking SET payment_status = ?, payment_refund_id = ? WHERE event_booking_id = ?';
      db.query(query, ['refunded',refund?.id, bookingId], async (err, result) => {
        if (err) {
          console.error('Error updating booking status:', err);
          return res.status(500).send('Error processing refund in database');
        }

       
        const fetchBookingQuery = `
          SELECT eb.*, e.event_name, e.event_date, e.event_time, e.event_location, e.event_image 
          FROM event_booking eb 
          JOIN events e ON eb.event_id = e.event_id 
          WHERE eb.event_booking_id = ?
        `;
        db.query(fetchBookingQuery, [bookingId], async (fetchErr, rows) => {
          if (fetchErr || rows.length === 0) {
            console.error('Error fetching booking details:', fetchErr);
            return res.status(500).send('Error fetching booking details');
          }

          const booking = rows[0];
          console.log("booking",booking)

          try {
            

            const subject = 'Refund Processed';
            const message = `<p>Dear ${booking.event_booking_name},</p>
              <p>Your refund for ${booking.event_name} has been successfully processed.</p>
              <p>We apologize for any inconvenience caused.</p>
              <br/>Best Regards,<br/>Event Team`;

            await sendEmailRefundPayment(email, subject, message);
            res.json({ success: true, message: 'Refund processed and email sent successfully' });
          } catch (emailError) {
            console.error('Error sending refund email:', emailError);
            res.status(500).json({
              success: true,
              message: 'Refund processed, but email notification failed',
            });
          }
        });
      });
    } else {
      res.status(400).json({
        success: false,
        message: 'Refund processing failed',
      });
    }
  } catch (error) {
    console.error('Error processing refund:', error);
    res.status(500).json({
      success: false,
      message: `${error?.error?.description}`,
    });
  }
});

module.exports = router;
