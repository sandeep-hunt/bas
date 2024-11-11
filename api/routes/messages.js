const express = require('express');
const router = express.Router();
const verifyToken = require('../middleware/verifyToken'); // Assuming you use this for authentication
const db = require('../middleware/connection');

// GET route to fetch all messages
router.get('/', verifyToken, (req, res) => {
    const sql = 'SELECT * FROM messages';
    db.query(sql, (err, results) => {
        if (err) {
            console.log("Error:", err);
            return res.status(500).json({ error: 'Failed to fetch messages' });
        }
        res.json(results);
    });
});

// POST route to create a new message
router.post('/add', verifyToken, (req, res) => {
    const { sender_id, receiver_id, message, message_status } = req.body;
    const sql = 'INSERT INTO messages (sender_id, receiver_id, message, message_status) VALUES (?, ?, ?, ?)';
    db.query(sql, [sender_id, receiver_id, message, message_status], (err, results) => {
        if (err) {
            console.log("Error:", err);
            return res.status(500).json({ error: 'Failed to create message' });
        }
        res.status(201).json({ message: 'Message created successfully', id: results.insertId });
    });
});

// PUT route to update message status
router.put('/update-message/:id', verifyToken, (req, res) => {
    const { message_status } = req.body;
    const sql = 'UPDATE messages SET message_status = ? WHERE message_id = ?';
    db.query(sql, [message_status, req.params.id], (err, results) => {
        if (err) {
            console.log("Error:", err);
            return res.status(500).json({ error: 'Failed to update message status' });
        }
        if (results.affectedRows === 0) {
            return res.status(404).json({ error: 'Message not found' });
        }
        res.json({ message: 'Message status updated successfully' });
    });
});

// DELETE route to delete a message
router.delete('/delete-message/:id', verifyToken, (req, res) => {
    const sql = 'DELETE FROM messages WHERE message_id = ?';
    db.query(sql, [req.params.id], (err, results) => {
        if (err) {
            console.log("Error:", err);
            return res.status(500).json({ error: 'Failed to delete message' });
        }
        if (results.affectedRows === 0) {
            return res.status(404).json({ error: 'Message not found' });
        }
        res.json({ message: 'Message deleted successfully' });
    });
});

module.exports = router;
