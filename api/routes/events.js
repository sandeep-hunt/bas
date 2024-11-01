const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const db =require('../middleware/connection');

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

// Route to fetch image URLs from the database
router.get('/', (req, res) => {
    const page = parseInt(req.query.page) || 1;   // Default to page 1
    const limit = parseInt(req.query.limit) || 10; // Default to 10 items per page
    const offset = (page - 1) * limit;

    // Count the total number of items
    db.query('SELECT COUNT(*) AS count FROM events', (err, countResult) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }

        const totalItems = countResult[0].count;
        const totalPages = Math.ceil(totalItems / limit);

        // Fetch paginated items
        const sql = `SELECT * FROM events LIMIT ${limit} OFFSET ${offset}`;
        db.query(sql, (err, results) => {
            if (err) {
                return res.status(500).json({ error: err.message });
            }

            res.json({
                currentPage: page,
                totalPages: totalPages,
                totalItems: totalItems,
                items: results
            });
        });
    });
});

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
router.put('/update/:id', upload.fields([{ name: 'event_image' }, { name: 'event_thumbnail' }]), (req, res) => {
    const eventId = req.params.id;
    const { event_name, event_slug, event_price, event_date, event_time, event_location, event_status } = req.body;
    const event_image = req.files['event_image'] ? `uploads/events/${req.files['event_image'][0].filename}` : null;
    const event_thumbnail = req.files['event_thumbnail'] ? `uploads/events/${req.files['event_thumbnail'][0].filename}` : null;

    // If a new image is uploaded, update it; otherwise, keep the old one
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

    // Complete the query
    sql += ` WHERE event_id = ?`;
    params.push(eventId);

    // Execute the query
    db.query(sql, params, (err, result) => {
        if (err) {
            console.error('Error updating event:', err);
            return res.status(500).json({ error: 'Failed to update event', details: err.message });
        }
        if (result.affectedRows === 0) {
            return res.status(404).json({ message: 'Event not found' });
        }
        res.json({ message: 'Event updated successfully' });
    });

})

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