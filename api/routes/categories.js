const express = require('express');
const router = express.Router();
const verifyToken = require('../middleware/verifyToken'); // Assuming you use this for authentication
const path = require('path');
const db = require('../middleware/connection');

// GET route to fetch all categories
router.get('/',verifyToken, (req, res) => {
    const sql = 'SELECT * FROM categories';
    db.query(sql, (err, results) => {
        if (err) {
            console.log("Error:", err);
            return res.status(500).json({ error: 'Failed to fetch categories' });
        }
        res.json(results);
    });
});

// POST route to add a new category
router.post('/add-category',verifyToken, (req, res) => {
    const { category_name } = req.body;

    // Validate input
    if (!category_name) {
        return res.status(400).json({ error: 'Category name is required' });
    }

    // Query to check if the category name already exists
    const checkQuery = 'SELECT * FROM categories WHERE category_name = ?';
    db.query(checkQuery, [category_name], (checkErr, checkResult) => {
        if (checkErr) {
            console.error('Error checking category:', checkErr);
            return res.status(500).json({ error: 'Failed to check category' });
        }

        if (checkResult.length > 0) {
            // Category name already exists
            return res.status(400).json({ error: 'Category name already exists' });
        }

        // If the category name is unique, insert the new category
        const insertQuery = 'INSERT INTO categories (category_name) VALUES (?)';
        db.query(insertQuery, [category_name], (insertErr, insertResult) => {
            if (insertErr) {
                console.error('Error inserting category:', insertErr);
                return res.status(500).json({ error: 'Failed to add category' });
            }
            res.status(201).json({ message: 'Category added successfully'});
        });
    });
});

// PUT route to update a category name
router.put('/update-category/:id', verifyToken, (req, res) => {
    const { id } = req.params;
    const { category_name } = req.body;

    // Validate input
    if (!category_name) {
        return res.status(400).json({ error: 'Category name is required' });
    }

    // Query to check if the new category name already exists (excluding current category)
    const checkQuery = 'SELECT * FROM categories WHERE category_name = ? AND category_id != ?';
    db.query(checkQuery, [category_name, id], (checkErr, checkResult) => {
        if (checkErr) {
            console.error('Error checking category:', checkErr);
            return res.status(500).json({ error: 'Failed to check category' });
        }

        if (checkResult.length > 0) {
            // Category name already exists
            return res.status(400).json({ error: 'Category name already exists' });
        }

        // If the category name is unique, proceed with the update
        const updateQuery = 'UPDATE categories SET category_name = ? WHERE category_id = ?';
        db.query(updateQuery, [category_name, id], (updateErr, updateResult) => {
            if (updateErr) {
                console.error('Error updating category:', updateErr);
                return res.status(500).json({ error: 'Failed to update category' });
            }

            // Check if any row was updated
            if (updateResult.affectedRows === 0) {
                return res.status(404).json({ error: 'Category not found or no changes made' });
            }

            res.status(200).json({ message: 'Category updated successfully' });
        });
    });
});


// DELETE route to delete a category by ID
router.delete('/delete-category/:id',verifyToken, (req, res) => {
    const { id } = req.params;

    const deleteQuery = 'DELETE FROM categories WHERE category_id = ?';
    db.query(deleteQuery, [id], (deleteErr, deleteResult) => {
        if (deleteErr) {
            console.error('Error deleting category:', deleteErr);
            return res.status(500).json({ error: 'Failed to delete category' });
        }

        if (deleteResult.affectedRows === 0) {
            // No category found with the given ID
            return res.status(404).json({ error: 'Category not found' });
        }

        res.status(200).json({ message: 'Category deleted successfully' });
    });
});

module.exports = router;
