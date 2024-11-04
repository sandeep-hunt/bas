// /utils/generatePdf.js
const puppeteer = require('puppeteer');

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

module.exports = generatePdf;