const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const db =require('../middleware/connection');
const { verify } = require('crypto');
const { sendEmailEventUpdated } = require('../middleware/emailconfig');

// Configure multer for file uploads
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './uploads/events/');
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + '-' + file.originalname);
    }
});
const upload = multer({ storage: storage });


// get

router.get('/', (req, res) => {
    // Fetch the total number of items
    db.query('SELECT COUNT(*) AS count FROM events', (err, countResult) => {
      if (err) {
        return res.status(500).json({ error: err.message });
      }
  
      const totalItems = countResult[0].count;
  
      // Fetch all the items
      const sql = `
        SELECT
          e.event_id,
          e.event_name,
          e.event_slug,
          e.event_image,
          e.event_thumbnail,
          e.event_price,
          e.event_date,
          e.event_time,
          e.event_location,
          e.event_status,
          e.created_date,
          COALESCE(eb.event_booking_count, 0) AS event_booking_count
        FROM events e
        LEFT JOIN (
          SELECT event_id, COUNT(*) AS event_booking_count
          FROM event_booking
          WHERE payment_status = 'paid'
          GROUP BY event_id
        ) eb ON e.event_id = eb.event_id
        ORDER BY e.event_id
      `;
      db.query(sql, (err, results) => {
        if (err) {
          return res.status(500).json({ error: err.message });
        }
        // console.log("results",results)
  
        // Build the response object
        const response = {
          totalItems: totalItems,
          items: results
        };
  
        res.json(response);
      });
    });
  });

// Route to fetch image URLs from the database
// router.get('/', (req, res) => {
//     const page = parseInt(req.query.page) || 1;   // Default to page 1
//     const limit = parseInt(req.query.limit) || 10; // Default to 10 items per page
//     const offset = (page - 1) * limit;

//     // Count the total number of items
//     db.query('SELECT COUNT(*) AS count FROM events', (err, countResult) => {
//         if (err) {
//             return res.status(500).json({ error: err.message });
//         }

//         const totalItems = countResult[0].count;
//         const totalPages = Math.ceil(totalItems / limit);

//         // Fetch paginated items
//         const sql = `SELECT * FROM events LIMIT ${limit} OFFSET ${offset}`;
//         db.query(sql, (err, results) => {
//             if (err) {
//                 return res.status(500).json({ error: err.message });
//             }

//             res.json({
//                 currentPage: page,
//                 totalPages: totalPages,
//                 totalItems: totalItems,
//                 items: results
//             });
//         });
//     });
// });

// Add Event (POST)
router.post('/add', upload.fields([{ name: 'event_image' }, { name: 'event_thumbnail' }]), (req, res) => {
    const { event_name, event_slug, event_price, event_date, event_time, event_location, event_status } = req.body;
    const event_image = req.files['event_image'] ? `uploads/events/${req.files['event_image'][0].filename}` : null;
    const event_thumbnail = req.files['event_thumbnail'] ? `uploads/events/${req.files['event_thumbnail'][0].filename}` : null;

    const query = `
      INSERT INTO events (event_name, event_slug, event_image, event_thumbnail, event_price, event_date, event_time, event_location, event_status)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
    `;
    db.query(query, [event_name, event_slug, event_image, event_thumbnail, event_price, event_date, event_time, event_location, event_status], (err, result) => {
        if (err) {
            return res.status(500).json({ message: 'Error adding event', error: err });
        }
        res.status(201).json({ message: 'Event added successfully', event_id: result.insertId });
    });
});

//update blog
router.put('/update/:id', upload.fields([{ name: 'event_image' }, { name: 'event_thumbnail' }]), async (req, res) => {
  const eventId = req.params.id;
  const { event_name, event_slug, event_price, event_date, event_time, event_location, event_status } = req.body;
  const event_image = req.files['event_image'] ? `uploads/events/${req.files['event_image'][0].filename}` : null;
  const event_thumbnail = req.files['event_thumbnail'] ? `uploads/events/${req.files['event_thumbnail'][0].filename}` : null;

  let sql = `UPDATE events SET event_name = ?, event_slug = ?, event_price = ?, event_date = ?, event_time = ?, event_location = ?, event_status = ?`;
  const params = [event_name, event_slug, event_price, event_date, event_time, event_location, event_status];

  if (event_image) {
    sql += `, event_image = ?`;
    params.push(event_image);
  }
  if (event_thumbnail) {
    sql += `, event_thumbnail = ?`;
    params.push(event_thumbnail);
  }

  sql += ` WHERE event_id = ?`;
  params.push(eventId);

  try {
    // Fetch the current event data for comparison
    const [currentEvent] = await db.promise().query(`SELECT event_date, event_time, event_location, event_status FROM events WHERE event_id = ?`, [eventId]);

    if (!currentEvent.length) {
      return res.status(404).json({ message: 'Event not found' });
    }

    const existingEvent = currentEvent[0];

    // Check if any of the relevant fields have changed
    const shouldSendEmail = 
      event_status !== '0' &&
      (existingEvent.event_date !== event_date || 
      existingEvent.event_time !== event_time || 
      existingEvent.event_location !== event_location);

    // Execute the event update with promise support
    const [result] = await db.promise().query(sql, params);

    if (result.affectedRows === 0) {
      return res.status(404).json({ message: 'Event not found' });
    }

    if (shouldSendEmail) {
      // Fetch all email addresses for users who booked this event
      const fetchEmailsSql = `SELECT event_booking_email FROM event_booking WHERE event_id = ? AND payment_status = 'paid'`;
      const [emailResults] = await db.promise().query(fetchEmailsSql, [eventId]);

      const emails = emailResults.map(row => row.event_booking_email);
      if (emails.length > 0) {
        await sendEmailEventUpdated(
          emails.join(', '),
          `Update: Event "${event_name}"`,
          `Dear participant,\n\nThe event "${event_name}" has been updated. Please check the event details for the latest information.\n\nThank you.`
        );
      }
    }

    res.json({ message: 'Event updated successfully', notifications: shouldSendEmail ? 'sent' : 'not needed' });
    
  } catch (err) {
    console.error('Error processing request:', err);
    res.status(500).json({ error: 'Failed to process request', details: err.message });
  }
});


//delete blog
router.delete('/delete/:id', (req, res) => {
    const blogId = req.params.id;

    const sql = 'DELETE FROM events WHERE event_id = ?';
    db.query(sql, [blogId], (err, result) => {
        if (err) {
            console.error('Error deleting blog:', err);
            return res.status(500).json({ error: 'Failed to delete event', details: err.message });
        }
        if (result.affectedRows === 0) {
            return res.status(404).json({ message: 'Event not found' });
        }
        res.json({ message: 'Event deleted successfully' });
    });
});

module.exports = router;