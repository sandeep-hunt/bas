const express = require('express');
const router = express.Router();
const verifyToken = require('../middleware/verifyToken'); // Middleware for authentication
const db = require('../middleware/connection'); // Database connection setup
const { sendEmailRegistration, sendEmailMember } = require('../middleware/emailconfig');
const multer = require('multer');

// Configure Multer for file uploads
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './uploads/members/'); // Directory for file uploads
    },
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}-${file.originalname}`);
    },
});

const upload = multer({
    storage,
    fileFilter: (req, file, cb) => {
        const allowedTypes = ['application/pdf', 'image/jpeg', 'image/png',"image/jpg"];
        if (allowedTypes.includes(file.mimetype)) {
            cb(null, true);
        } else {
            cb(new Error('Invalid file type. Only PDF, JPEG, and PNG are allowed.'));
        }
    },
});


// Route to add a new member
router.post('/add-member', verifyToken,  upload.fields([
    { name: 'aadhaarFile' },
    { name: 'panFile'},
    { name: 'resumeFile'}, // Changed from photoFile to resumeFile
]), (req, res) => {
    const { name, mobile, email, age, gender, member_type, state, city, address, pincode } = req.body;

    const aadhaarFilePath = req.files.aadhaarFile ? req.files.aadhaarFile[0].path : null;
    const panFilePath = req.files.panFile ? req.files.panFile[0].path : null;
    const resumeFilePath = req.files.resumeFile ? req.files.resumeFile[0].path : null; // Added resumeFilePath

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
        INSERT INTO members (name, mobile, email, age, gender, member_type, state, city, address, pincode, aadhaarFilePath, panFilePath, resumeFilePath) 
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
     `;
        const values = [name, mobile, email, age, gender, member_type, state, city, address, pincode,aadhaarFilePath,
            panFilePath,
            resumeFilePath,];

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

// router.put('/update-member/:id',verifyToken,upload.fields([
//         { name: 'aadhaarFile' },
//         { name: 'panFile' },
//         { name: 'resumeFile' }
//     ]),
//     (req, res) => {
//         const { id } = req.params;
//         const { name, mobile, email, age, gender, member_type, state, city, address, pincode } = req.body;

//         const aadhaarFilePath = req.files.aadhaarFile ? req.files.aadhaarFile[0].path : null;
//         const panFilePath = req.files.panFile ? req.files.panFile[0].path : null;
//         const resumeFilePath = req.files.resumeFile ? req.files.resumeFile[0].path : null;

//         if (!name || !email) {
//             return res.status(400).json({ error: 'Name and email are required' });
//         }

//         // Query to check if the email is already used by another member (excluding the current member's email)
//         const checkEmailQuery = 'SELECT * FROM members WHERE email = ? AND member_id != ?';
//         db.query(checkEmailQuery, [email, id], (checkErr, checkResult) => {
//             if (checkErr) {
//                 console.error('Error checking email:', checkErr);
//                 return res.status(500).json({ error: 'Failed to check email' });
//             }

//             if (checkResult.length > 0) {
//                 return res.status(400).json({ error: 'Email is already in use by another member' });
//             }

//             // Prepare the update query
//             const updateQuery = `
//                 UPDATE members 
//                 SET 
//                     name = ?, mobile = ?, email = ?, age = ?, gender = ?, member_type = ?, 
//                     state = ?, city = ?, address = ?, pincode = ?, 
//                     aadhaarFilePath = COALESCE(?, aadhaarFilePath), 
//                     panFilePath = COALESCE(?, panFilePath), 
//                     resumeFilePath = COALESCE(?, resumeFilePath)
//                 WHERE member_id = ?
//             `;

//             const values = [
//                 name, mobile, email, age, gender, member_type, state, city, address, pincode,
//                 aadhaarFilePath, panFilePath, resumeFilePath, id
//             ];

//             db.query(updateQuery, values, (err, result) => {
//                 if (err) {
//                     console.error('Error updating member:', err);
//                     return res.status(500).json({ error: 'Failed to update member' });
//                 }
//                 res.json({ message: 'Member updated successfully' });
//             });
//         });
//     }
// );

router.put('/update-member/:id',
    verifyToken,
    upload.fields([
        { name: 'aadhaarFile' },
        { name: 'panFile' },
        { name: 'resumeFile' },
    ]),
    (req, res) => {
        const { id } = req.params;
        const { name, mobile, email, age, gender, member_type, state, city, address, pincode } = req.body;

        const aadhaarFilePath = req.files.aadhaarFile ? req.files.aadhaarFile[0].path : null;
        const panFilePath = req.files.panFile ? req.files.panFile[0].path : null;
        const resumeFilePath = req.files.resumeFile ? req.files.resumeFile[0].path : null;

        if (!name || !email) {
            return res.status(400).json({ error: 'Name and email are required' });
        }

        // First, fetch the current member_type from the database
        const getMemberQuery = 'SELECT * FROM members WHERE member_id = ?';
        db.query(getMemberQuery, [id], (fetchErr, fetchResult) => {
            if (fetchErr) {
                console.error('Error fetching current member details:', fetchErr);
                return res.status(500).json({ error: 'Failed to fetch member details' });
            }

            if (fetchResult.length === 0) {
                return res.status(404).json({ error: 'Member not found' });
            }

            const currentMemberDetails = fetchResult[0];

            // Proceed with the update
            const checkEmailQuery = 'SELECT * FROM members WHERE email = ? AND member_id != ?';
            db.query(checkEmailQuery, [email, id], (checkErr, checkResult) => {
                if (checkErr) {
                    console.error('Error checking email:', checkErr);
                    return res.status(500).json({ error: 'Failed to check email' });
                }

                if (checkResult.length > 0) {
                    return res.status(400).json({ error: 'Email is already in use by another member' });
                }

                // Prepare the update query
                const updateQuery = `
                    UPDATE members 
                    SET 
                        name = ?, mobile = ?, email = ?, age = ?, gender = ?, member_type = ?, 
                        state = ?, city = ?, address = ?, pincode = ?, 
                        aadhaarFilePath = COALESCE(?, aadhaarFilePath), 
                        panFilePath = COALESCE(?, panFilePath), 
                        resumeFilePath = COALESCE(?, resumeFilePath)
                    WHERE member_id = ?
                `;

                const values = [
                    name, mobile, email, age, gender, member_type, state, city, address, pincode,
                    aadhaarFilePath, panFilePath, resumeFilePath, id,
                ];

                db.query(updateQuery, values, (err, result) => {
                    if (err) {
                        console.error('Error updating member:', err);
                        return res.status(500).json({ error: 'Failed to update member' });
                    }

                    const subject = 'Your Membership Type Has Been Updated';
                    const email_message = `
                        <p>Dear ${currentMemberDetails?.name},</p>
                        <p>Your membership type has been updated from <strong>${currentMemberDetails?.member_type}</strong> to <strong>${member_type}</strong>.</p>
                        <p>Thank you for your valuable contribution.</p>
                        <br/>
                        Best regards,<br/>
                        The BAS Team
                    `;
                    if (currentMemberDetails?.member_type !== member_type) {
                        sendEmailMember(email, subject, email_message)
                            .then(() => {
                                res.json({ message: 'Member updated successfully, and notification sent' });
                            })
                            .catch((emailErr) => {
                                console.error('Error sending notification email:', emailErr);
                                res.status(500).json({ error: 'Member updated but failed to send notification email' });
                            });
                    } else {
                        res.json({ message: 'Member updated successfully' });
                    }
                });
            });
        });
    }
);

router.put('/update-member-status/:id', verifyToken, (req, res) => {

    const { id } = req.params;
    let { status, reject_reason } = req.body;


    // Convert status to a number if it's sent as a string
    status = parseInt(status, 10);

    // Validate status
    if (![1, 2].includes(status)) {
        return res.status(400).json({ error: 'Invalid status value. Use 1 for approved, 2 for rejected.' });
    }

    // Fetch the current member details
    const getMemberQuery = 'SELECT * FROM members WHERE member_id = ?';
    db.query(getMemberQuery, [id], (fetchErr, fetchResult) => {
        if (fetchErr) {
            console.error('Error fetching member details:', fetchErr);
            return res.status(500).json({ error: 'Failed to fetch member details' });
        }

        if (fetchResult.length === 0) {
            return res.status(404).json({ error: 'Member not found' });
        }

        const currentMemberDetails = fetchResult[0];

        // Prepare the update query
        const updateQuery = `
            UPDATE members 
            SET 
                status = ?, 
                reject_reason = COALESCE(?, reject_reason)
            WHERE member_id = ?
        `;

        const values = [status, status === 2 ? reject_reason : null, id];

        db.query(updateQuery, values, (updateErr, updateResult) => {
            if (updateErr) {
                console.error('Error updating member status:', updateErr);
                return res.status(500).json({ error: 'Failed to update member status' });
            }

            // Send email notification
            const subject = status === 1 
                ? 'Your Membership Application is Approved' 
                : 'Your Membership Application is Rejected';
            const email_message = status === 1
                ? `
                    <p>Dear ${currentMemberDetails?.name},</p>
                    <p>We are pleased to inform you that your membership application has been approved.</p>
                    <p>Welcome to the BAS community!</p>
                    <br/>
                    Best regards,<br/>
                    The BAS Team
                `
                : `
                    <p>Dear ${currentMemberDetails?.name},</p>
                    <p>We regret to inform you that your membership application has been rejected.</p>
                    <p>Reason for rejection: <strong>${reject_reason}</strong></p>
                    <br/>
                    Best regards,<br/>
                    The BAS Team
                `;

            sendEmailMember(currentMemberDetails.email, subject, email_message)
                .then(() => {
                    res.json({ 
                        message: `Member status updated successfully, and notification sent (${status === 1 ? 'Approved' : 'Rejected'})` 
                    });
                })
                .catch((emailErr) => {
                    console.error('Error sending notification email:', emailErr);
                    res.status(500).json({ error: 'Status updated but failed to send notification email' });
                });
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
