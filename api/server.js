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

const app = express();
app.use(express.json());
app.use(cors({origin: '*'}));

// Serve static files from the 'public' directory
app.use('/uploads', express.static('uploads'));

app.use('/blogs', blogRoutes);
app.use('/articles', articleRoutes);
app.use('/gallery', galleryRoutes);
app.use('/events', eventRoutes);
app.use('/fetch', fetchRoutes);

db.connect((err) => {
  if (err) {
    console.error('Database connection failed:', err);
    return;
  }
  console.log('Connected to MySQL');
});

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
    const token = jwt.sign({ id: user.id, username: user.username }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.status(200).json({ token });
  });
});

// Protected route (example: profile)
app.get('/profile', verifyToken, (req, res) => {
  res.json({ message: `Welcome to your profile, user ID: ${req.userId}` });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
