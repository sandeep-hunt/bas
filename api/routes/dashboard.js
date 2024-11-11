const express = require('express');
const router = express.Router();
const verifyToken = require('../middleware/verifyToken');
const db = require('../middleware/connection');

// Route for fetching counts
router.get('/count', verifyToken, (req, res) => {
    const countsQuery = `
        SELECT 
            (SELECT COUNT(*) FROM categories) AS categoryCount,
            (SELECT COUNT(*) FROM members) AS memberCount,
            (SELECT COUNT(*) FROM blogs) AS blogCount,
            (SELECT COUNT(*) FROM articles) AS articleCount,
            (SELECT COUNT(*) FROM events) AS eventCount
    `;

    db.query(countsQuery, (err, results) => {
        if (err) {
            res.status(500).json({
                success: false,
                error: 'Failed to fetch counts'
            });
        } else {
            const formattedCounts = {
                categoryCount: String(results[0].categoryCount).padStart(2, '0'),
                memberCount: String(results[0].memberCount).padStart(2, '0'),
                blogCount: String(results[0].blogCount).padStart(2, '0'),
                articleCount: String(results[0].articleCount).padStart(2, '0'),
                eventCount: String(results[0].eventCount).padStart(2, '0')
            };

            res.json({ counts: formattedCounts });
        }
    });
});


// Route for fetching recent events
router.get('/recent', verifyToken, (req, res) => {
    const eventsQuery = `
        SELECT 
            event_id,
            event_name,
            event_slug,
            event_image,
            event_thumbnail,
            event_price,
            event_date,
            event_time,
            event_location,
            event_status,
            created_date
        FROM events 
        ORDER BY created_date DESC 
        LIMIT 4
    `;

    db.query(eventsQuery, (err, results) => {
        if (err) {
            res.status(500).json({
                success: false,
                error: 'Failed to fetch recent events'
            });
        } else {
            res.json({
                recentEvents: results
            });
        }
    });
});

module.exports = router;
