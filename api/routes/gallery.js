const express = require('express');
const router = express.Router();
const verifyToken = require('../middleware/verifyToken');
const multer = require('multer');
const db =require('../middleware/connection');

// Configure multer for file uploads
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './uploads/gallery/');
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
    db.query('SELECT COUNT(*) AS count FROM gallery', (err, countResult) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }

        const totalItems = countResult[0].count;
        const totalPages = Math.ceil(totalItems / limit);

        // Fetch paginated items
        const sql = `SELECT * FROM gallery LIMIT ${limit} OFFSET ${offset}`;
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

// 1. Add Image
router.post('/add', upload.single('image'), (req, res) => {
    const { title } = req.body;
    const imagePath = req.file ? `uploads/gallery/${req.file.filename}` : null;

    const query = 'INSERT INTO gallery (gallery_image_name, gallery_imagePath) VALUES (?, ?)';
    db.query(query, [title, imagePath], (err, result) => {
        if (err) {
            return res.status(500).json({ error: 'Database error' });
        }
        res.status(201).json({ message: 'Image added successfully', imageId: result.insertId });
    });
});

// 2. Update Image
router.put('/update/:id', upload.single('image'), (req, res) => {
    const { title } = req.body;
    const imageId = req.params.id;

    let query = 'UPDATE gallery SET gallery_image_name = ?';
    const values = [title];

    if (req.file) {
        const imagePath = `uploads/gallery/${req.file.filename}`;
        query += ', gallery_imagePath = ?';
        values.push(imagePath);
    }

    query += ' WHERE gallery_id = ?';
    values.push(imageId);

    db.query(query, values, (err, result) => {
        if (err) {
            return res.status(500).json({ error: 'Database error' });
        }
        res.status(200).json({ message: 'Image updated successfully' });
    });
});

// 3. Delete Image
router.delete('/delete/:id', (req, res) => {
    const imageId = req.params.id;

    const query = 'DELETE FROM gallery WHERE gallery_id = ?';
    db.query(query, [imageId], (err, result) => {
        if (err) {
            return res.status(500).json({ error: 'Database error' });
        }
        res.status(200).json({ message: 'Image deleted successfully' });
    });
});

module.exports = router;