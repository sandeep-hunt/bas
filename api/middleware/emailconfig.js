const fs = require('fs');
const path = require('path');
const nodemailer = require('nodemailer');

// Load HTML Template and Replace Placeholders
async function loadTemplate(templateName, replacements) {
    const templatePath = path.join(__dirname, `../templates/${templateName}.html`);
    let html = fs.readFileSync(templatePath, 'utf8');

    // Replace placeholders with actual values from replacements object
    for (const key in replacements) {
        const placeholder = `{{${key}}}`;
        html = html.replace(new RegExp(placeholder, 'g'), replacements[key]);
    }

    return html;
}


// Configure and Send Email with PDF Attachment
const transporter = nodemailer.createTransport({
    host: process.env.MAILHOST_NAME,
    port: process.env.MAILHOST_PORT,
    secure: true,
    auth: {
        user: process.env.EMAIL,
        pass: process.env.APPKEY
    }
});

async function sendEmailEventBooking(to, subject, htmlContent) {
    const mailOptions = {
        from: `"BAS Event Booking" <${process.env.EMAIL}>`,
        to: to,
        subject: subject,
        html: htmlContent,
    };

    // Send email
    return transporter.sendMail(mailOptions);
}

async function sendEmailDonation(to, subject, htmlContent) {
    const mailOptions = {
        from: `"BAS Donation" <${process.env.EMAIL}>`,
        to: to,
        subject: subject,
        html: htmlContent,
    };

    // Send email
    return transporter.sendMail(mailOptions);
}

async function sendEmailRegistration(to, subject, htmlContent) {
    const mailOptions = {
        from: `"BAS Registration" <${process.env.EMAIL}>`,
        to: to,
        subject: subject,
        html: htmlContent,
    };

    // Send email
    return transporter.sendMail(mailOptions);
}


async function sendReceiptOtp(to, subject, htmlContent) {
    const mailOptions = {
        from: `"BAS Verification" <${process.env.EMAIL}>`,
        to: to,
        subject: subject,
        html: htmlContent,
    };

    // Send email
    return transporter.sendMail(mailOptions);
}

async function sendEmailDonationReminder(to, subject, htmlContent) {
    const mailOptions = {
        from: `"BAS DonataionReminder" <${process.env.EMAIL}>`,
        to: to,
        subject: subject,
        html: htmlContent,
    };

    // Send email
    return transporter.sendMail(mailOptions);
}

async function sendEmailEventUpdated(to, subject, htmlContent) {
    const mailOptions = {
        from: `"BAS Event updated" <${process.env.EMAIL}>`,
        to: to,
        subject: subject,
        html: htmlContent,
    };

    // Send email
    return transporter.sendMail(mailOptions);
}

async function sendEmailRefundPayment(to, subject, htmlContent) {
    const mailOptions = {
        from: `"BAS Event Amount Refund" <${process.env.EMAIL}>`,
        to: to,
        subject: subject,
        html: htmlContent,
    };

    // Send email
    return transporter.sendMail(mailOptions);
}
async function sendEmailMember(to, subject, htmlContent) {
    const mailOptions = {
        from: `"BAS Member Updates" <${process.env.EMAIL}>`,
        to: to,
        subject: subject,
        html: htmlContent,
    };

    // Send email
    return transporter.sendMail(mailOptions);
}

// Export all functions
module.exports = { loadTemplate, sendEmailEventBooking, sendEmailDonation ,sendEmailRegistration, sendReceiptOtp,sendEmailDonationReminder,sendEmailEventUpdated,sendEmailRefundPayment,sendEmailMember};
