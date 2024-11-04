const fs = require('fs');
const path = require('path');
const puppeteer = require('puppeteer');
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

// Generate PDF of a Specific Section in HTML
async function generatePdf(html) {
    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();
    await browser.close();
    await page.setContent(html);

    // Hide everything except the section with id #pdf-section
    await page.addStyleTag({
        content: `
            body > * { display: none; }
            #pdf-section { display: block; }
        `
    });

    const pdfBuffer = await page.pdf({
        width: '92.6mm',
        height: '180.4mm',
        printBackground: true,
        margin: {
            top: '0mm',
            right: '0mm',
            bottom: '0mm',
            left: '0mm',
        },
    });
    await browser.close();
    return pdfBuffer;
}

// Configure and Send Email with PDF Attachment
const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
        user: process.env.EMAIL,  // Your Gmail address
        pass: process.env.APPKEY   // Your Gmail app password
    }
});

// async function sendEmail(to, subject, htmlContent, pdfBuffer) {
//     const mailOptions = {
//         from: process.env.EMAIL_USER,
//         to: to,
//         subject: subject,
//         html: htmlContent,
//         attachments: [
//             {
//                 filename: 'BookingConfirmation.pdf',
//                 content: pdfBuffer,
//                 contentType: 'application/pdf'
//             }
//         ]
//     };

//     // Send email
//     return transporter.sendMail(mailOptions);
// }
async function sendEmail(to, subject, htmlContent) {
    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: to,
        subject: subject,
        html: htmlContent,
    };

    // Send email
    return transporter.sendMail(mailOptions);
}

// Export all functions
module.exports = { loadTemplate, generatePdf, sendEmail };
