const express = require('express');
const mysql = require('mysql2');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const cors = require('cors');
require('dotenv').config();
const verifyToken = require('./middleware/verifyToken');
const db = require('./middleware/connection');

//Routes
const blogRoutes = require('./routes/blogs');
const articleRoutes = require('./routes/articles');
const galleryRoutes = require('./routes/gallery');
const eventRoutes = require('./routes/events');
const fetchRoutes = require('./routes/fetch');
const joinUsRoutes = require('./routes/joinUs');
const categoriesRoutes = require('./routes/categories')
const memberRoutes = require('./routes/members');
const eventBookingRoutes=require('./routes/eventBooking');
const dashboardRoutes = require('./routes/dashboard');
const settingRoutes = require('./routes/settings');
const messageRoutes = require('./routes/messages')



const app = express();
app.use(express.json());
app.use(cors({
  origin: '*'
}));

// Serve static files from the 'public' directory
app.use('/uploads', express.static('uploads'));
app.use('/blogs', blogRoutes);
app.use('/articles', articleRoutes);
app.use('/gallery', galleryRoutes);
app.use('/events', eventRoutes);
app.use('/fetch', fetchRoutes);
app.use('/joinus', joinUsRoutes);
app.use('/category',categoriesRoutes);
app.use('/members',memberRoutes);
app.use('/eventsBooking',eventBookingRoutes);
app.use('/dasboard',dashboardRoutes);
app.use('/setting',settingRoutes);
app.use('/messages',messageRoutes)




// User registration
app.post('/register', async (req, res) => {
  const { username, email, password } = req.body;

  // Check if user exists
  db.query('SELECT * FROM users WHERE email = ?', [email], async (err, result) => {
    if (err) throw err;
    if (result.length > 0) return res.status(400).json({ message: 'User already exists' });

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Insert new user
    db.query('INSERT INTO users (username, email, password) VALUES (?, ?, ?)', 
      [username, email, hashedPassword], (err, result) => {
        if (err) throw err;
        res.status(201).json({ message: 'User created successfully' });
      }
    );
  });
});

// User login
app.post('/login', (req, res) => {
  const { email, password } = req.body;

  db.query('SELECT * FROM users WHERE email = ?', [email], async (err, result) => {
    if (err) throw err;
    if (result.length === 0) return res.status(400).json({ message: 'User not found' });

    const user = result[0];

    // Compare password
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) return res.status(400).json({ message: 'Invalid credentials' });

    // Create JWT
    const token = jwt.sign({ id: user.id, username: user.username }, process.env.JWT_SECRET, { expiresIn: '10h' });
    res.status(200).json({ token,user_id:user?.id,user_name:user?.username,email:user?.email});
  });
});

// update 
app.put('/update', verifyToken, (req, res) => {
  const { username, email } = req.body;
  const userId = req.body.id;

  // Perform the update query
  const sql = 'UPDATE users SET username = ?, email = ? WHERE id = ?';
  db.query(sql, [username, email, userId], (err, updateResult) => {
    if (err) return res.status(500).json({ message: 'Database error', error: err });

    // Check if the update affected any rows
    if (updateResult.affectedRows === 0) {
      return res.status(400).json({ message: 'No changes were made to the user profile' });
    }

    // Retrieve the updated user data
    db.query('SELECT id, username, email FROM users WHERE id = ?', [userId], (err, result) => {
      if (err) return res.status(500).json({ message: 'Error fetching updated user data', error: err });

      // Check if user data was found
      if (result.length === 0) {
        return res.status(404).json({ message: 'User not found' });
      }

      // Return the updated user data
      res.status(200).json({
        message: 'Profile updated successfully',
        user: result[0] // Return the updated user (first item in the result)
      });
    });
  });
});




// Change password
app.post('/change-password', verifyToken, async (req, res) => {
  const { oldPassword, newPassword } = req.body;
  // The ID is coming from req.body instead of req.id
  const userId = req.body.id; // Changed from req.id to req.body.id

  console.log("Request body:", req.body);

  // Fetch the user's current password
  db.query('SELECT password FROM users WHERE id = ?', [userId], async (err, result) => {
    if (err) {
      console.error("Database error:", err);
      return res.status(500).json({ message: 'Database error', error: err });
    }

    console.log("Query result:", result);

    if (result.length === 0) {
      return res.status(404).json({ message: 'User not found' });
    }

    const user = result[0];

    try {
      // Verify the old password
      const isOldPasswordValid = await bcrypt.compare(oldPassword, user.password);
      if (!isOldPasswordValid) {
        return res.status(400).json({ message: 'Incorrect old password' });
      }

      // Hash the new password
      const hashedNewPassword = await bcrypt.hash(newPassword, 10);

      // Update the password in the database
      const sql = 'UPDATE users SET password = ? WHERE id = ?';
      db.query(sql, [hashedNewPassword, userId], (updateErr, updateResult) => {
        if (updateErr) {
          console.error("Update error:", updateErr);
          return res.status(500).json({ message: 'Failed to update password', error: updateErr });
        }
        res.status(200).json({ message: 'Password changed successfully' });
      });
    } catch (error) {
      console.error("Error in password processing:", error);
      res.status(500).json({ message: 'Error processing password change', error: error });
    }
  });
});

// Protected route (example: profile)
app.get('/profile', verifyToken, (req, res) => {
  res.json({ message: `Welcome to your profile, user ID: ${req.userId}` });
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
