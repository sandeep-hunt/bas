const express = require('express');
const router = express.Router();
const verifyToken = require('../middleware/verifyToken');
const multer = require('multer');
const path = require('path');
const db =require('../middleware/connection');

// Configure multer for file uploads
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        if (file.mimetype === 'application/pdf') {
            cb(null, 'uploads/articles/files'); // Save PDFs in a separate folder
        } else {
            cb(null, 'uploads/articles/'); // Save images in a separate folder
        }
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname); // Keep the original name of the PDF files
    }
});
const upload = multer({ storage: storage });

// Get Articles
router.get('/', verifyToken, (req, res) => {
    const sql = 'SELECT * FROM articles';  // Modify this query based on your article table
    db.query(sql, (err, results) => {
        if (err) {
            return res.status(500).json({ error: 'Failed to fetch articles' });
        }
        res.json(results);
    });
});

//Add Article
router.post('/add', upload.fields([{ name: 'image1', maxCount: 1 }, { name: 'image2', maxCount: 1 }, { name: 'pdfs', maxCount: 10 }]), (req, res) => {
    const { article_title, article_shortDesc, article_content, article_author, article_slug, article_page_title, article_page_keywords, article_page_desc } = req.body;

    // Handle uploaded files
    const image1 = req.files['image1'] ? `uploads/articles/${req.files['image1'][0].filename}` : null;
    const image2 = req.files['image2'] ? `uploads/articles/${req.files['image2'][0].filename}` : null;
    const pdfs = req.files['pdfs'] ? req.files['pdfs'].map(file => `uploads/articles/files/${file.originalname}`) : [];

    // Check for duplicate article_slug
    const slugCheckSql = `SELECT article_id FROM articles WHERE article_slug = ?`;
    db.query(slugCheckSql, [article_slug], (slugErr, slugResult) => {
        if (slugErr) {
            console.error('Error checking slug:', slugErr);
            return res.status(500).json({
                error: 'Failed to add article',
                details: slugErr.message
            });
        }

        if (slugResult.length > 0) {
            return res.status(400).json({ message: 'Article slug already exists. Please use a unique slug.' });
        }

        // If slug is unique, insert the new article
        const sql = `
            INSERT INTO articles (
                article_title, 
                article_shortDesc, 
                article_content, 
                article_attachment, 
                article_author, 
                article_slug, 
                article_page_title, 
                article_page_keywords, 
                article_page_desc, 
                article_thumbnail, 
                article_image
            ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
        `;
        const params = [
            article_title,
            article_shortDesc,
            article_content,
            JSON.stringify(pdfs),
            article_author,
            article_slug,
            article_page_title,
            article_page_keywords,
            article_page_desc,
            image1,
            image2
        ];

        db.query(sql, params, (err, result) => {
            if (err) {
                console.error('Error inserting article:', err);
                return res.status(500).json({ 
                    error: 'Failed to add article', 
                    details: err.message 
                });
            }
            res.json({ 
                message: 'Article added successfully', 
                articleId: result.insertId 
            });
        });
    });
});


//get article by slug
router.get('/:id', (req, res) => {
    const articleId = req.params.id;  // Get the title from the URL params
    const sql = `
    SELECT articles.*, users.username AS author
      FROM articles
      JOIN users ON articles.article_author = users.username
      WHERE articles.article_id = ?
      `; // Modify based on your table structure
    db.query(sql, [articleId], (err, result) => {
        if (err) {
            return res.status(500).json({ error: 'Failed to fetch article' });
        }
        if (result.length === 0) {
            return res.status(404).json({ message: 'Article not found' });
        }
        res.json(result[0]);  // Return the first (and only) row
    });
});

//delete article
router.delete('/delete/:id', verifyToken, (req, res) => {
    const articleId = req.params.id;

    const sql = 'DELETE FROM articles WHERE article_id = ?';
    db.query(sql, [articleId], (err, result) => {
        if (err) {
            console.error('Error deleting article:', err);
            return res.status(500).json({ error: 'Failed to delete article', details: err.message });
        }
        if (result.affectedRows === 0) {
            return res.status(404).json({ message: 'Article not found' });
        }
        res.json({ message: 'Article deleted successfully' });
    });
});

//update article
router.put('/update/:id', upload.fields([{ name: 'image1', maxCount: 1 }, { name: 'image2', maxCount: 1 }, { name: 'pdfs', maxCount: 10 }]), (req, res) => {
    const articleId = req.params.id;
    const { article_title, article_shortDesc, article_content, article_slug, article_page_title, article_page_keywords, article_page_desc } = req.body;

    const image1 = req.files['image1'] ? `uploads/${req.files['image1'][0].filename}` : null;
    const image2 = req.files['image2'] ? `uploads/${req.files['image2'][0].filename}` : null;
    const pdfs = req.files['pdfs'] ? req.files['pdfs'].map(file => `uploads/articles/files/${file.originalname}`) : JSON.parse(existingBlog.pdfs);

    let sql = `UPDATE articles SET article_title = ?, article_shortDesc = ?, article_content = ?, article_slug = ?, article_page_title = ?, article_page_keywords = ?, article_page_desc = ?`;

    const params = [article_title, article_shortDesc, article_content, article_slug, article_page_title, article_page_keywords, article_page_desc];

    if (pdfs) {
        sql += `, article_attachment = ?`;
        params.push(JSON.stringify(pdfs));
    }

    if (image1) {
        sql += `, article_thumbnail = ?`;
        params.push(image1);
    }

    if (image2) {
        sql += `, article_image = ?`;
        params.push(image2);
    }

    // Complete the query
    sql += ` WHERE article_id = ?`;
    params.push(articleId);

    // Execute the query
    db.query(sql, params, (err, result) => {
        if (err) {
            console.error('Error updating article:', err);
            return res.status(500).json({ error: 'Failed to update article', details: err.message });
        }
        if (result.affectedRows === 0) {
            return res.status(404).json({ message: 'article not found' });
        }
        res.json({ message: 'article updated successfully' });
    });
})

module.exports = router;