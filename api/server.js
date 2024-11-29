const express = require('express');
const mysql = require('mysql2');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const cors = require('cors');
require('dotenv').config();
const verifyToken = require('./middleware/verifyToken');
const db = require('./middleware/connection');
const cron = require('node-cron');
const { sendEmailDonationReminder } = require('./middleware/emailconfig')
const multer = require('multer')
const fs = require('fs');




// Configure multer for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const dir = './uploads/profile/';
    fs.mkdirSync(dir, { recursive: true }); // Create directory if it doesn't exist
    cb(null, dir);
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname);
  }
});
const upload = multer({ storage: storage });

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
const messageRoutes = require('./routes/messages');
const donationRoutes = require('./routes/donation');
const paymentRoutes = require('./routes/payment');



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
app.use('/messages',messageRoutes);
app.use('/donation',donationRoutes);
app.use('/payment',paymentRoutes);





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
    res.status(200).json({ token ,user_id: user?.id,
      full_name: user?.full_name,
      user_profile: user?.user_profile,
      email: user?.email,});
  });
});

// update 
app.put('/update', verifyToken, upload.fields([{ name: 'user_profile' }]), (req, res) => {  
  const { full_name, email } = req.body;
  const userId = req.body.id;

  const userProfile = req.files['user_profile'] ? `uploads/profile/${req.files['user_profile'][0].filename}` : null;

  const sql = 'UPDATE users SET full_name = ?, user_profile = COALESCE(?, user_profile), email = ? WHERE id = ?';
  db.query(sql, [full_name, userProfile, email, userId], (err, updateResult) => {
    if (err) return res.status(500).json({ error: 'Database error' });
    if (updateResult.affectedRows === 0) return res.status(400).json({ message: 'No changes were made to the user profile' });

    db.query('SELECT id, full_name, user_profile, email FROM users WHERE id = ?', [userId], (err, result) => {
      if (err) return res.status(500).json({ error: 'Database error' });
      if (result.length === 0) return res.status(404).json({ message: 'User not found' });
      res.status(200).json({ message: 'Profile updated successfully', user: result[0] });
    });
  });
});




// Change password
app.post('/change-password', verifyToken, async (req, res) => {
  const { oldPassword, newPassword } = req.body;

  const userId = req.body.id; 

  db.query('SELECT password FROM users WHERE id = ?', [userId], async (err, result) => {
    if (err) {
      console.error("Database error:", err);
      return res.status(500).json({ message: 'Database error', error: err });
    }

    if (result.length === 0) {
      return res.status(404).json({ message: 'User not found' });
    }

    const user = result[0];

    try {
     
      const isOldPasswordValid = await bcrypt.compare(oldPassword, user.password);
      if (!isOldPasswordValid) {
        return res.status(400).json({ message: 'Incorrect old password' });
      }

      
      const hashedNewPassword = await bcrypt.hash(newPassword, 10);

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







// Function to get monthly donors who completed one month since their last donation
async function getMonthlyDonors() {
  const query = `
    SELECT * FROM donation
    WHERE donation_freq = 1
    AND DATE(donation_created_date) = DATE_SUB(CURDATE(), INTERVAL 1 MONTH)
  `;
  const [rows] = await db.promise().query(query);
  return rows;
}

// Function to send reminder emails
async function sendReminderEmails(donors) {
  donors.forEach(async (donor) => {
    try {
      await sendEmailDonationReminder(
        donor.doner_email,
        "Monthly Donation Reminder",
        `Dear Donor,\n\nThank you for your continued support! This is a reminder for your monthly donation.\n\nDonation Amount: ${donor.donation_amount}\n\nThank you!`
      );
    } catch (error) {
      console.error(`Error sending email to ${donor.doner_email}:`, error);
    }
  });
}

// Schedule the job to run every day at midnight (or every day for testing)
cron.schedule('0 10 * * *', async () => {
  const donors = await getMonthlyDonors();
  if (donors.length) {
    await sendReminderEmails(donors);
  } else {
    console.log('No monthly donors found for reminders today.');
  }
});

// First *: Minute (0–59)
// Second *: Hour (0–23)
// Third *: Day of the month (1–31)
// Fourth *: Month (1–12)
// Fifth *: Day of the week (0–7), where both 0 and 7 represent Sunday


const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
