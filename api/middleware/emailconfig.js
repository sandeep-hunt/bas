// middleware/mailConfig.js
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL,  // your Gmail address
        pass: process.env.APPKEY   // your App Password or Gmail password
    }
});

function sendEmail(to, subject, text) {
    const mailOptions = {
        from: process.env.EMAIL,
        to: to,
        subject: subject,
        text: text
    };

    return transporter.sendMail(mailOptions);
}

module.exports = sendEmail;