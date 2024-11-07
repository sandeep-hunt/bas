const express = require('express');
const router = express.Router();
const db = require('../middleware/connection');

router.post('/check-email', (req, res) => {
    const { email } = req.body;

    // SQL query to get the member details by ID
    const query = 'SELECT * FROM members WHERE email = ?';

    db.query(query, [email], (err, results) => {
        if (err) {
            console.error('Error fetching member:', err);
            return res.status(500).send('Internal Server Error');
        }

        if (results.length > 0) {
            res.json({ exists: true });
        } else {
            res.json({ exists: false });
        }
    });
});

module.exports = router;