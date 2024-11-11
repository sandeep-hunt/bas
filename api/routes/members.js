const express = require('express');
const router = express.Router();
const verifyToken = require('../middleware/verifyToken'); // Middleware for authentication
const db = require('../middleware/connection'); // Database connection setup
const { sendEmailRegistration } = require('../middleware/emailconfig')


// Route to add a new member
router.post('/add-member', verifyToken, (req, res) => {
    const { name, mobile, email, age, gender, member_type, state, city, address, pincode } = req.body;

    if (!name || !email) {
        return res.status(400).json({ error: 'Name and email are required' });
    }

    // Check if email already exists in the database
    const checkEmailQuery = 'SELECT * FROM members WHERE email = ?';
    db.query(checkEmailQuery, [email], async (err, result) => {
        if (err) {
            console.error('Error checking email:', err);
            return res.status(500).json({ error: 'Failed to check email' });
        }

        // If email exists, return an error
        if (result.length > 0) {
            return res.status(400).json({ error: 'Email already exists' });
        }

        // Proceed to insert the new member if email does not exist
        const insertQuery = `
            INSERT INTO members (name, mobile, email, age, gender, member_type, state, city, address, pincode) 
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
        `;
        const values = [name, mobile, email, age, gender, member_type, state, city, address, pincode];

        db.query(insertQuery, values, async (err, result) => {
            if (err) {
                console.error('Error inserting member:', err);
                return res.status(500).json({ error: 'Failed to add member' });
            }

            // Send welcome email
            await sendEmailRegistration(
                email,
                "BAS Registration Completed",
                `Hi ${name},

Welcome to our platform!

Your registration has been successfully completed!`
            );

            res.status(201).json({ message: 'Member added successfully' });
        });
    });
});


// Route to get all members
router.get('/', verifyToken, (req, res) => {
    const query = 'SELECT * FROM members';
    db.query(query, (err, results) => {
        if (err) {
            console.error('Error fetching members:', err);
            return res.status(500).json({ error: 'Failed to fetch members' });
        }
        res.json(results);
    });
});
// Route to fetch a particular member by ID
router.get('/:id', verifyToken, (req, res) => {
    const memberId = req.params.id;  // Get the ID from the URL parameter
    const query = 'SELECT * FROM members WHERE member_id = ?'; // Use `id` as per your column name

    db.query(query, [memberId], (err, results) => {
        if (err) {
            console.error('Error fetching member:', err);
            return res.status(500).json({ error: 'Failed to fetch member' });
        }

        if (results.length === 0) {
            return res.status(404).json({ error: 'Member not found' });
        }

        res.json(results[0]); // Return the first item in the result
    });
});

// Route to update a member by ID
router.put('/update-member/:id', verifyToken, (req, res) => {
    const { id } = req.params;
    const { name, mobile, email, age, gender, member_type, state, city, address, pincode } = req.body;

    // Validate input
    if (!name || !email) {
        return res.status(400).json({ error: 'Name and email are required' });
    }

    // Query to check if the email is already used by another member (excluding the current member's email)
    const checkEmailQuery = 'SELECT * FROM members WHERE email = ? AND member_id != ?';
    db.query(checkEmailQuery, [email, id], (checkErr, checkResult) => {
        if (checkErr) {
            console.error('Error checking email:', checkErr);
            return res.status(500).json({ error: 'Failed to check email' });
        }

        if (checkResult.length > 0) {
            // If email already exists for another member (not the current one)
            return res.status(400).json({ error: 'Email is already in use by another member' });
        }

        // If the email is unique (or is the same as the current one), proceed with updating the member
        const updateQuery = `
            UPDATE members 
            SET name = ?, mobile = ?, email = ?, age = ?, gender = ?, member_type = ?, state = ?, city = ?, address = ?, pincode = ? 
            WHERE member_id = ?
        `;
        const values = [name, mobile, email, age, gender, member_type, state, city, address, pincode, id];

        db.query(updateQuery, values, (err, result) => {
            if (err) {
                console.error('Error updating member:', err);
                return res.status(500).json({ error: 'Failed to update member' });
            }
            res.json({ message: 'Member updated successfully' });
        });
    });
});



// Route to delete a member by ID
router.delete('/delete-member/:id', verifyToken, (req, res) => {
    const { id } = req.params;

    const deleteQuery = 'DELETE FROM members WHERE member_id = ?';
    db.query(deleteQuery, [id], (err, result) => {
        if (err) {
            console.error('Error deleting member:', err);
            return res.status(500).json({ error: 'Failed to delete member' });
        }
        if (result.affectedRows === 0) {
            return res.status(404).json({ error: 'Member not found' });
        }
        res.json({ message: 'Member deleted successfully' });
    });
});

module.exports = router;
