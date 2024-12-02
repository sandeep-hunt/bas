const express = require('express');
const router = express.Router();
const verifyToken = require('../middleware/verifyToken');
const multer = require('multer');
const path = require('path');
const db =require('../middleware/connection');

// Configure multer for file uploads
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/blogs/');  // Folder where images are saved
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname));  // Create a unique filename
    }
});
const upload = multer({ storage: storage });

// Get Blogs
router.get('/', verifyToken, (req, res) => {
 const sql = `
    SELECT 
        blogs.*, 
        users.username, 
        users.full_name, 
        users.user_profile, 
        IFNULL(categories.category_id, '') AS category_id, 
        IFNULL(categories.category_name, '') AS category_name 
    FROM blogs 
    LEFT JOIN users ON blogs.blog_author = users.username 
    LEFT JOIN categories ON blogs.blog_category = categories.category_id 
    ORDER BY blogs.blog_id DESC
`;
    db.query(sql, (err, results) => {
        if (err) {
            return res.status(500).json({ error: 'Failed to fetch blogs' });
        }
        res.json(results);
    });
});


// Add Blog
router.post('/add', verifyToken, upload.fields([{ name: 'image1', maxCount: 1 }, { name: 'image2', maxCount: 1 }]), (req, res) => {
    const {
        blog_title, blog_shortDesc, blog_content, blog_author,
        blog_slug, blog_page_title, blog_page_keywords, blog_page_desc, blog_category
    } = req.body;

    let image1 = null;
    let image2 = null;

    if (req.files) {
        if (req.files['image1'] && req.files['image1'][0]) {
            image1 = 'uploads/blogs/' + req.files['image1'][0].filename;
        }
        if (req.files['image2'] && req.files['image2'][0]) {
            image2 = 'uploads/blogs/' + req.files['image2'][0].filename;
        }
    }

    // Check for duplicate blog_slug
    const slugCheckSql = `SELECT blog_id FROM blogs WHERE blog_slug = ?`;
    db.query(slugCheckSql, [blog_slug], (slugErr, slugResult) => {
        if (slugErr) {
            console.error('Error checking slug:', slugErr);
            return res.status(500).json({
                error: 'Failed to add blog',
                details: slugErr.message
            });
        }

        if (slugResult.length > 0) {
            return res.status(400).json({ message: 'Blog slug already exists. Please use a unique slug.' });
        }

        // If slug is unique, insert the new blog
        const sql = `
            INSERT INTO blogs (
                blog_title, 
                blog_shortDesc, 
                blog_content, 
                blog_author, 
                blog_slug, 
                blog_page_title, 
                blog_page_keywords, 
                blog_page_desc, 
                blog_category, 
                blog_thumbnail, 
                blog_image
            ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
        `;
        const params = [
            blog_title,
            blog_shortDesc,
            blog_content,
            blog_author,
            blog_slug,
            blog_page_title,
            blog_page_keywords,
            blog_page_desc,
            blog_category,
            image1,
            image2  
        ];

        db.query(sql, params, (err, result) => {
            if (err) {
                console.error('Error inserting blog:', err);
                return res.status(500).json({ 
                    error: 'Failed to add blog', 
                    details: err.message 
                });
            }
            res.json({ 
                message: 'Blog added successfully', 
                blogId: result.insertId,
                images: {
                    thumbnail: image1,
                    image: image2
                }
            });
        });
    });
});



//get blog by slug
router.get('/:id',verifyToken, (req, res) => {
    const blogId = req.params.id;  // Get the title from the URL params
    const sql = `
    SELECT 
        blogs.*, 
        users.username, 
        users.full_name, 
        users.user_profile, 
        IFNULL(categories.category_id, '') AS category_id, 
        IFNULL(categories.category_name, '') AS category_name 
    FROM blogs 
    LEFT JOIN users ON blogs.blog_author = users.username 
    LEFT JOIN categories ON blogs.blog_category = categories.category_id 
    WHERE blogs.blog_id = ?   
`; // Modify based on your table structure
    db.query(sql, [blogId], (err, result) => {
        if (err) {
            return res.status(500).json({ error: 'Failed to fetch blog' });
        }
        if (result.length === 0) {
            return res.status(404).json({ message: 'Blog not found' });
        }
        res.json(result[0]);  // Return the first (and only) row
    });
});

//delete blog
router.delete('/delete/:id', verifyToken, (req, res) => {
    const blogId = req.params.id;

    const sql = 'DELETE FROM blogs WHERE blog_id = ?';
    db.query(sql, [blogId], (err, result) => {
        if (err) {
            console.error('Error deleting blog:', err);
            return res.status(500).json({ error: 'Failed to delete blog', details: err.message });
        }
        if (result.affectedRows === 0) {
            return res.status(404).json({ message: 'Blog not found' });
        }
        res.json({ message: 'Blog deleted successfully' });
    });
});

//update blog
router.put('/update/:id',verifyToken, upload.fields([{ name: 'image1', maxCount: 1 }, { name: 'image2', maxCount: 1 }]), (req, res) => {
    const blogId = req.params.id;
    const { blog_title, blog_shortDesc, blog_content, blog_slug, blog_page_title, blog_page_keywords, blog_page_desc,blog_category } = req.body;

    const image1 = req.files['image1'] ? `uploads/blogs/${req.files['image1'][0].filename}` : null;
    const image2 = req.files['image2'] ? `uploads/blogs/${req.files['image2'][0].filename}` : null;

    let sql = `UPDATE blogs SET blog_title = ?, blog_shortDesc = ?, blog_content = ?, blog_slug = ?, blog_page_title = ?, blog_page_keywords = ?, blog_page_desc = ?,blog_category = ? `;

    const params = [blog_title, blog_shortDesc, blog_content, blog_slug, blog_page_title, blog_page_keywords, blog_page_desc,blog_category];

    if (image1) {
        sql += `, blog_thumbnail = ?`;
        params.push(image1);
    }

    if (image2) {
        sql += `, blog_image = ?`;
        params.push(image2);
    }

    // Complete the query
    sql += ` WHERE blog_id = ?`;
    params.push(blogId);

    // Execute the query
    db.query(sql, params, (err, result) => {
        if (err) {
            console.error('Error updating blog:', err);
            return res.status(500).json({ error: 'Failed to update blog', details: err.message });
        }
        if (result.affectedRows === 0) {
            return res.status(404).json({ message: 'Blog not found' });
        }
        res.json({ message: 'Blog updated successfully' });
    });

})

module.exports = router;