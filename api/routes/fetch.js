const express = require('express');
const router = express.Router();
const Razorpay = require('razorpay');
const crypto = require('crypto');
const db = require('../middleware/connection');
const { sendEmailEventBooking, sendEmailDonation, loadTemplate } = require('../middleware/emailconfig');
const generatePdf = require('../utils/generatePDF');
const fs = require('fs').promises;

// Get Blogs
router.get('/events', (req, res) => {
    const sql = 'SELECT * FROM events where event_status = ?';  // Modify this query based on your blog table
    db.query(sql, ['0'], (err, results) => {
        if (err) {
            return res.status(500).json({ error: 'Failed to fetch events' });
        }
        res.json(results);
    });
});

// Razorpay instance
const razorpay = new Razorpay({
    key_id: process.env.RAZORPAY_KEY_ID,
    key_secret: process.env.RAZORPAY_KEY_SECRET
});

//Get event by slug
router.get('/events/:slug', (req, res) => {
    const eventSlug = req.params.slug;

    // SQL query to get the event details by ID
    const query = 'SELECT * FROM events WHERE event_slug = ?';

    db.query(query, [eventSlug], (err, results) => {
        if (err) {
            console.error('Error fetching event:', err);
            return res.status(500).send('Internal Server Error');
        }

        if (results.length > 0) {
            res.json(results[0]); // Send the first result as the event
        } else {
            res.status(404).send('Event not found');
        }
    });
});

router.post('/book-event', async (req, res) => {
    const { name, date, gender, email, mobile, state, city, address, pincode, eventId, eventPrice } = req.body;

    // Fetch the last row in the event_booking table
    const fetchLastQuery = `
        SELECT * FROM event_booking 
        ORDER BY event_booking_id DESC 
        LIMIT 1
    `;

    db.query(fetchLastQuery, async (fetchErr, rows) => {
        if (fetchErr) {
            console.error('Error fetching last booking number:', fetchErr);
            return res.status(500).send('Error fetching last booking number');
        }
        const lastBooking = rows.length ? rows[0] : null; // Default to 0 if there are no bookings
        const booking_number = parseInt(lastBooking.event_booking_number) + 1;

        const query = 'INSERT INTO event_booking (event_booking_number,event_booking_name, event_booking_dob, event_booking_gender, event_booking_email, event_booking_contact, event_booking_state, event_booking_city, event_booking_address, event_booking_pincode, event_id) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';
        db.query(query, [booking_number, name, date, gender, email, mobile, state, city, address, pincode, eventId], (err, result) => {
            if (err) {
                console.error('Error storing booking:', err);
                return res.status(500).send('Error booking event');
            }
            const bookingId = result.insertId;

            // Create Razorpay order
            const options = {
                amount: eventPrice * 100, // Payment amount in paise
                currency: 'INR',
                receipt: `receipt_order_${bookingId}`,
            };

            razorpay.orders.create(options, (err, order) => {
                if (err) {
                    console.error('Error creating Razorpay order:', err);
                    return res.status(500).send('Payment failed');
                }
                res.json({ orderId: order.id, bookingId });
            });
        });
    });
});

// Handle payment verification
router.post('/book-event/verify-payment', async (req, res) => {
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature, bookingId, email } = req.body;

    const body = razorpay_order_id + "|" + razorpay_payment_id;
    const expectedSignature = crypto
        .createHmac('sha256', process.env.RAZORPAY_KEY_SECRET)
        .update(body.toString())
        .digest('hex');

    if (expectedSignature === razorpay_signature) {
        // Update booking status to 'paid'
        const query = 'UPDATE event_booking SET payment_status = ?, payment_id = ? WHERE event_booking_id = ?';
        db.query(query, ['paid', razorpay_payment_id, bookingId], async (err, result) => {
            if (err) {
                console.error('Error updating booking:', err);
                return res.status(500).send('Error verifying payment');
            }

            // Fetch the booking record
            const fetchLastQuery = `
                SELECT * FROM event_booking 
                WHERE event_booking_id = ?
            `;
            db.query(fetchLastQuery, [bookingId], async (fetchErr, rows) => {
                if (fetchErr) {
                    console.error('Error fetching last booking:', fetchErr);
                    return res.status(500).send('Error fetching last booking');
                }

                const lastBooking = rows.length ? rows[0] : null;
                if (!lastBooking) {
                    return res.status(404).send('Booking record not found');
                }

                // Fetch the booking record
                const fetchEvent = `
                    SELECT * FROM events 
                    WHERE event_id = ?
                `;

                db.query(fetchEvent, [lastBooking.event_id], async (fetchErr, rows) => {
                    const event = rows.length ? rows[0] : null;

                    const eventDate = new Date(event.event_date);
                    const formattedEventDate = eventDate.toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                    });

                    let eventTime;
                    if (Number.isInteger(parseInt(event.event_time))) {
                        // If it's a Unix timestamp in milliseconds
                        eventTime = new Date(parseInt(event.event_time));
                    } else {
                        // If it's a valid ISO string
                        eventTime = new Date(event.event_time);
                    }
                    const formattedEventTime = eventTime.toLocaleTimeString('en-US', {
                        hour: '2-digit',
                        minute: '2-digit',
                        hour12: true
                    });

                    // Prepare email data for the confirmation email
                    const replacements = {
                        eventImage: `${process.env.BASE_URL + event.event_image}`,
                        eventName: event.event_name,
                        bookingNumber: lastBooking.event_booking_number,
                        eventLocation: event.event_location,
                        bookingName: lastBooking.event_booking_name,
                        eventDate: formattedEventDate,
                        eventTime: formattedEventTime,
                    };

                    try {
                        // Load HTML template and send email
                        const htmlContent = await loadTemplate('bookingConfirmation', replacements);
                        // const pdfBuffer = await generatePdf(htmlContent);

                        const subject = 'Booking Confirmation';
                        const message = `<p>Dear ${lastBooking.event_booking_name},</p><br/><p>Thank you for your booking. Your payment was successful and your booking Number is ${lastBooking.event_booking_number}.</p><br/>Best Regards,<br/>Event Team`;

                        await sendEmailEventBooking(email, subject, htmlContent);
                        res.json({ success: true, message: 'Payment verified and email sent successfully' });
                    } catch (error) {
                        console.error('Error sending email or generating PDF:', error);
                        res.status(500).json({ success: true, message: 'Payment verified, but email sending failed' });
                    }
                });
            });
        });
    } else {
        // Update booking status to 'failed' if the signature doesn't match
        const query = 'UPDATE event_booking SET payment_status = ?, payment_id = ? WHERE event_booking_id = ?';
        db.query(query, ['failed', razorpay_payment_id, bookingId], (err, result) => {
            if (err) {
                console.error('Error updating booking status:', err);
                return res.status(500).send('Error updating failed payment');
            }
            res.status(400).send('Payment verification failed');
        });
    }
});

// Handle join us
router.post('/register', (req, res) => {
    const { name, mobile, email, age, gender, member_type, state, city, address, pincode } = req.body;
    const query = `INSERT INTO members (name, mobile, email, age, gender, member_type, state, city, address, pincode) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;
    db.query(query, [name, mobile, email, age, gender, member_type, state, city, address, pincode], (err, result) => {
        if (err) {
            console.error('Error inserting data:', err);
            res.status(500).json({ message: 'Error registering user' });
        } else {
            res.status(201).json({ message: 'User registered successfully!' });
        }
    });
});

//Handle message
router.post('/messageSubmit', (req, res) => {
    const { firstname, lastname, email, mobile, message } = req.body;
    const sql = 'INSERT INTO messages (message_firstname, message_lastname, message_email, message_mobile, message, message_status) VALUES (?, ?, ?, ?, ?, ?)';
    const values = [firstname, lastname, email, mobile, message, '0'];
    db.query(sql, values, (err, result) => {
        if (err) {
            console.error('Error inserting data: ' + err);
            return res.status(500).json({ message: 'Internal server error.' });
        }
        res.status(201).json({ message: 'Message/Feedback Submitted Successfully.' });
    });
});

//Handle Get Blogs Limit
router.get('/getBlogs', async (req, res) => {
    const limit = parseInt(req.query.limit) || 5; // Default limit if not provided

    const sql = 'SELECT blogs.*, users.username, users.full_name, users.user_profile, categories.category_id, categories.category_name FROM blogs JOIN users ON blogs.blog_author = users.username JOIN categories ON blogs.blog_category = categories.category_id ORDER BY blogs.blog_id DESC LIMIT ?';  // Modify this query based on your blog table
    db.query(sql, [limit], (err, results) => {
        if (err) {
            return res.status(500).json({ error: 'Failed to fetch events' });
        }
        res.json(results);
    });
});

//Handle Get Articles Limit
router.get('/getArticles', async (req, res) => {
    const limit = parseInt(req.query.limit) || 5; // Default limit if not provided

    const sql = 'SELECT articles.*, users.username, users.full_name, users.user_profile FROM articles JOIN users ON articles.article_author = users.username ORDER BY articles.article_id DESC LIMIT ?';  // Modify this query based on your article table
    db.query(sql, [limit], (err, results) => {
        if (err) {
            return res.status(500).json({ error: 'Failed to fetch events' });
        }
        res.json(results);
    });
});

//Handle Get Articles List
router.get('/getArticlesList', (req, res) => {
    const page = parseInt(req.query.page) || 1;   // Default to page 1
    const limit = parseInt(req.query.limit) || 10; // Default to 10 items per page
    const offset = (page - 1) * limit;
    db.query('SELECT COUNT(*) AS count FROM articles', (err, countResult) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }

        const totalItems = countResult[0].count;
        const totalPages = Math.ceil(totalItems / limit);

        // Fetch paginated items
        const sql = `SELECT articles.*, users.username, users.full_name, users.user_profile FROM articles JOIN users ON articles.article_author = users.username ORDER BY articles.article_id DESC LIMIT ${limit} OFFSET ${offset}`;
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

//Handle Get Blogs List
router.get('/getBlogsList', (req, res) => {
    const page = parseInt(req.query.page) || 1;   // Default to page 1
    const limit = parseInt(req.query.limit) || 10; // Default to 10 items per page
    const offset = (page - 1) * limit;
    db.query('SELECT COUNT(*) AS count FROM blogs', (err, countResult) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }

        const totalItems = countResult[0].count;
        const totalPages = Math.ceil(totalItems / limit);

        // Fetch paginated items
        const sql = `SELECT blogs.*, users.username, users.full_name, users.user_profile, categories.category_id, categories.category_name FROM blogs JOIN users ON blogs.blog_author = users.username JOIN categories ON blogs.blog_category = categories.category_id ORDER BY blogs.blog_id DESC LIMIT ${limit} OFFSET ${offset}`;
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

//Handle Get Blog By Slug
router.get('/blogBySlug/:slug', (req, res) => {
    const blogSlug = req.params.slug;

    // SQL query to get the blog details by slug
    const query = 'SELECT blogs.*, users.username, users.full_name, users.user_profile, categories.category_id, categories.category_name FROM blogs JOIN users ON blogs.blog_author = users.username JOIN categories ON blogs.blog_category = categories.category_id WHERE blog_slug = ?';

    db.query(query, [blogSlug], (err, results) => {
        if (err) {
            console.error('Error fetching blog:', err);
            return res.status(500).send('Internal Server Error');
        }

        if (results.length > 0) {
            res.json(results[0]); // Send the first result as the blog
        } else {
            res.status(404).send('Blog not found');
        }
    });
});

//Handle Get Articles By Slug
router.get('/articleBySlug/:slug', (req, res) => {
    const articleSlug = req.params.slug;

    // SQL query to get the article details by slug
    const query = 'SELECT articles.*, users.username, users.full_name, users.user_profile FROM articles JOIN users ON articles.article_author = users.username WHERE article_slug = ?';

    db.query(query, [articleSlug], (err, results) => {
        if (err) {
            console.error('Error fetching article:', err);
            return res.status(500).send('Internal Server Error');
        }

        if (results.length > 0) {
            res.json(results[0]); // Send the first result as the article
        } else {
            res.status(404).send('Article not found');
        }
    });
});

//Handle Get Random articles limit=3
router.get('/randArticle', (req, res) => {
    db.query('SELECT articles.*, users.username, users.full_name, users.user_profile FROM articles JOIN users ON articles.article_author = users.username ORDER BY RAND() LIMIT 3', (err, result) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        return res.json(result);  // Return the random articles as a JSON response
    });
});

//Handle Get Related Blog Posts limit=3
router.get('/relatedBlog/:slug', (req, res) => {
    const { slug } = req.params;

    // First, fetch the blog by its slug to get the category_id (or any other related attribute)
    db.query('SELECT * FROM blogs WHERE blog_slug = ?', [slug], (err, result) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }

        if (result.length === 0) {
            return res.status(404).json({ message: 'Blogs not found' });
        }

        const blog = result[0];

        // Fetch related blogs based on the same category_id (for example)
        db.query(
            'SELECT blogs.*, users.username, users.full_name, users.user_profile, categories.category_id, categories.category_name FROM blogs JOIN users ON blogs.blog_author = users.username JOIN categories ON blogs.blog_category = categories.category_id WHERE blog_category = ? AND blog_slug != ? LIMIT 3',
            [blog.blog_category, slug],
            (err, relatedBlogs) => {
                if (err) {
                    return res.status(500).json({ error: err.message });
                }
                return res.json(relatedBlogs);
            }
        );
    });
});

//Handle Get Settings
router.get('/settings', (req, res) => {
    const sql = 'SELECT * FROM settings';  // Modify this query based on your blog table
    db.query(sql, (err, results) => {
        if (err) {
            return res.status(500).json({ error: 'Failed to fetch settings' });
        }
        res.json(results);
    });
});

//Handle Post Donate
router.post('/donate-now', async (req, res) => {
    const { name, mobile, email, age, gender, state, city, address, pincode, donation_type, donation_amt, donation_freq } = req.body;

    // Fetch the last row in the event_booking table
    const fetchLastQuery = `
        SELECT * FROM donation 
        ORDER BY donation_id DESC 
        LIMIT 1
    `;

    db.query(fetchLastQuery, async (fetchErr, rows) => {
        if (fetchErr) {
            console.error('Error fetching last donation receipt number:', fetchErr);
            return res.status(500).send('Error fetching last donation receipt number');
        }
        const lastDonation = rows.length ? rows[0] : null; // Default to 0 if there are no bookings
        const receipt_number = parseInt(lastDonation.donate_receipt_no) + 1;

        const query = 'INSERT INTO donation (donate_receipt_no,doner_name, doner_mobile, doner_email, doner_age, doner_gender, doner_state, doner_city, doner_address, doner_pincode, donation_type, donation_amount, donation_freq) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';
        db.query(query, [receipt_number, name, mobile, email, age, gender, state, city, address, pincode, donation_type, donation_amt, donation_freq], (err, result) => {
            if (err) {
                console.error('Error storing donation:', err);
                return res.status(500).send('Error donating');
            }
            const receiptId = result.insertId;

            // Create Razorpay order
            const options = {
                amount: donation_amt * 100, // Payment amount in paise
                currency: 'INR',
                receipt: `receipt_order_${receiptId}`,
            };

            razorpay.orders.create(options, (err, order) => {
                if (err) {
                    console.error('Error creating Razorpay order:', err);
                    return res.status(500).send('Payment failed');
                }
                res.json({ orderId: order.id, receiptId });
            });
        });

    })
});

//Handle Post Donation Payment Verification
router.post('/donation/verify-payment', async (req, res) => {
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature, receiptId, email } = req.body;

    const body = razorpay_order_id + "|" + razorpay_payment_id;
    const expectedSignature = crypto
        .createHmac('sha256', process.env.RAZORPAY_KEY_SECRET)
        .update(body.toString())
        .digest('hex');

    if (expectedSignature === razorpay_signature) {
        // Update booking status to 'paid'
        const query = 'UPDATE donation SET donation_payment_status = ?, donation_payment_id = ? WHERE donation_id = ?';
        db.query(query, ['paid', razorpay_payment_id, receiptId], async (err, result) => {
            if (err) {
                console.error('Error updating donation status:', err);
                return res.status(500).send('Error verifying payment');
            }

            // Fetch the booking record
            const fetchLastQuery = `
                SELECT * FROM donation 
                WHERE donation_id = ?
            `;
            db.query(fetchLastQuery, [receiptId], async (fetchErr, rows) => {
                if (fetchErr) {
                    console.error('Error fetching last donation:', fetchErr);
                    return res.status(500).send('Error fetching last donation');
                }

                const lastBooking = rows.length ? rows[0] : null;
                if (!lastBooking) {
                    return res.status(404).send('Donation record not found');
                }

                try {
                    // Load HTML template and send email
                    // const htmlContent = await loadTemplate('bookingConfirmation', replacements);
                    // const pdfBuffer = await generatePdf(htmlContent);

                    const subject = 'Donation Confirmation';
                    const message = `<p>Dear ${lastBooking.doner_name},</p><br/><p>Thank you for donating us!!!. Your payment was successful and your donation receipt number is ${lastBooking.donate_receipt_no}.</p><br/>Best Regards,<br/>Donation Team`;

                    await sendEmailDonation(email, subject, message);
                    res.json({ success: true, message: 'Payment verified and email sent successfully' });
                } catch (error) {
                    console.error('Error sending email or generating PDF:', error);
                    res.status(500).json({ success: true, message: 'Payment verified, but email sending failed' });
                }
            });
        });
    } else {
        // Update booking status to 'failed' if the signature doesn't match
        const query = 'UPDATE donation SET donation_payment_status = ?, donation_payment_id = ? WHERE donation_id = ?';
        db.query(query, ['failed', razorpay_payment_id, receiptId], (err, result) => {
            if (err) {
                console.error('Error updating donation status:', err);
                return res.status(500).send('Error updating failed payment');
            }
            res.status(400).send('Payment verification failed');
        });
    }
});

module.exports = router;