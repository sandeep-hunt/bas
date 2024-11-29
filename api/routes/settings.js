const express = require('express');
const router = express.Router();
const multer = require('multer');
const db =require('../middleware/connection');

// Configure multer for file uploads
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './uploads/settings/');
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + '-' + file.originalname);
    }
});
const upload = multer({ storage: storage });



router.get('/',(req,resp)=>{
    db.query('SELECT * FROM settings',(err,result)=>{
        if(err){
            return resp.status(500).json({message:err.message})
        }
        else{
            resp.status(200).json({message:'Settings Fected',result})
        }
    })
})




router.put('/update/:id', upload.fields([
    { name: 'site_logo' },
    { name: 'site_favicon' },
    { name: 'site_secondary_logo' }
]), (req, resp) => {
    const {
        site_title,
        site_keywords,
        site_description,
        site_copyright,
        contact_address,
        contact_mobile,
        contact_email,
        facebook_url,
        twitter_url,
        insta_url,
        linkedin_url,
        youtube_url,
        call_to_action
    } = req.body;
    
    const site_logo = req.files['site_logo'] ? `uploads/settings/${req.files['site_logo'][0].filename}` : null;
    const site_favicon = req.files['site_favicon'] ? `uploads/settings/${req.files['site_favicon'][0].filename}` : null;
    const site_secondary_logo = req.files['site_secondary_logo'] ? `uploads/settings/${req.files['site_secondary_logo'][0].filename}` : null;
    const settings_id = req.params.id;

    const query = `
        UPDATE settings SET
            site_title = ?,
            site_keywords = ?,
            site_description = ?,
            site_copyright = ?,
            site_logo = COALESCE(?, site_logo),
            site_favicon = COALESCE(?, site_favicon),
            site_secondary_logo = COALESCE(?, site_secondary_logo),
            contact_address = ?,
            contact_mobile = ?,
            contact_email = ?,
            facebook_url = ?,
            twitter_url = ?,
            insta_url = ?,
            linkedin_url = ?,
            youtube_url = ?,
            call_to_action = ?
        WHERE settings_id = ?
    `;

    const values = [
        site_title,
        site_keywords,
        site_description,
        site_copyright,
        site_logo,
        site_favicon,
        site_secondary_logo,
        contact_address,
        contact_mobile,
        contact_email,
        facebook_url,
        twitter_url,
        insta_url,
        linkedin_url,
        youtube_url,
        call_to_action,
        settings_id
    ];

    db.query(query, values, (err, result) => {
        if (err) {
            return resp.status(500).json({ error: 'Failed to update site settings', details: err.message });
        }
        if (result.affectedRows === 0) {
            return resp.status(404).json({ message: 'Site setting not found' });
        }
        resp.json({ message: 'Site settings updated successfully' });
    });
});




module.exports=router