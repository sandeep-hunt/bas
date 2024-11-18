const express = require('express');
const router = express.Router();
const verifyToken = require('../middleware/verifyToken'); // Assuming you use this for authentication
const path = require('path');
const db = require('../middleware/connection');

// GET route to fetch all categories
router.get('/',verifyToken, (req, res) => {
    const sql = 'SELECT * FROM donation ';
    db.query(sql, (err, results) => {
        if (err) {
            console.log("Error:", err);
            return res.status(500).json({ error: 'Failed to fetch categories' });
        }
        res.json(results);
    });
});


module.exports = router;