import React, { useEffect, useState } from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import axios from 'axios';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import './GetReceiptGenerate.css';

const GetReceiptGenerate = ({ donationData }) => {
    if (!donationData) {
        return null;
    }

    const [settings, setSettings] = useState('');

    useEffect(() => {
        window.scrollTo(0, 0);
        const fetchData = async () => {
            try {
                // Fetch the settings
                const fetchSettings = await axios.get(import.meta.env.VITE_BACKEND_API + 'fetch/settings');
                setSettings(fetchSettings.data[0]);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    const handleDownloadPDF = async () => {
        const element = document.querySelector('.donation-receipt-card'); // Select the receipt container
        if (!element) return;

        try {
            const canvas = await html2canvas(element, { scale: 2 }); // Render HTML to canvas
            const imgData = canvas.toDataURL('image/png');
            const pdf = new jsPDF('p', 'mm', 'a4');

            // Calculate dimensions to fit the content in the PDF
            const pdfWidth = pdf.internal.pageSize.getWidth();
            const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

            pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
            pdf.save('DonationReceipt.pdf'); // Save the file
        } catch (error) {
            console.error('Error generating PDF:', error);
        }
    };

    return (
        <React.Fragment>
            <Row>
                <Col xs={12} md={8}>
                    <div className="donation-receipt-card">
                        <div className="donation-receipt-card-header">
                            <img src={import.meta.env.VITE_BACKEND_API + settings.site_logo} alt="logo" />
                            <h4 className='text-main'>DONATION RECEIPT</h4>
                            <h5 className='text-main'>THE FOUNDATION</h5>
                            <p className='donation-receipt-card-text'>6 Purushottam Apartment, 18 Shilavihar Colony,<br />Erandwane, Pune - 411 038 (Maharashtra)</p>
                        </div>
                        <div className="donation-recipt-card-body">
                            <div className="donation-recept-card-inner dontaion-receipt-bdhead">
                                <div className="donation-recept-cardL">
                                    <h5 className='text-main'>DATE:&nbsp;
                                        {(new Date(donationData.donation_created_date).getDate())}&nbsp;
                                        {new Date(donationData.donation_created_date).toLocaleString('default', { month: 'long' })}&nbsp;
                                        {new Date(donationData.donation_created_date).getFullYear()}</h5>
                                </div>
                                <div className="donation-recept-cardR">
                                    <h5 className='text-main'>Receipt#: {donationData.donate_receipt_no}</h5>
                                </div>
                            </div>
                            <div className="donation-recept-card-inner">
                                <p className='donation-receipt-card-text'>Thank you for your generous contribution to BHASA. We are grateful for your support.</p>
                                <p className='donation-receipt-card-text'>Your donation helps us to revive ancient Bhartiya value & knowledge system. </p>
                            </div>
                            <div className="donation-recept-card-inner">
                                <h5 className='text-main'>Donor Information:</h5>
                                <div className="donation-receipt-card-cont">
                                    <Row>
                                        <Col xs={12}>
                                            <p className='donation-receipt-card-text'>Name: <span className='donation-receipt-card-subtext'>{donationData.doner_name}</span></p>
                                        </Col>
                                        <Col xs={12}>
                                            <p className='donation-receipt-card-text'>Address: <span className='donation-receipt-card-subtext'>{donationData.doner_address}</span></p>
                                        </Col>
                                        <Col xs={12}>
                                            <Row>
                                                <Col xs={4}>
                                                    <p className='donation-receipt-card-text'>City: <span className='donation-receipt-card-subtext'>{donationData.doner_city}</span></p>
                                                </Col>
                                                <Col xs={4}>
                                                    <p className='donation-receipt-card-text'>State: <span className='donation-receipt-card-subtext'>{donationData.doner_state}</span></p>
                                                </Col>
                                                <Col xs={4}>
                                                    <p className='donation-receipt-card-text'>Pincode: <span className='donation-receipt-card-subtext'>{donationData.doner_pincode}</span></p>
                                                </Col>
                                            </Row>
                                        </Col>
                                    </Row>
                                </div>
                            </div>
                            <div className="donation-recept-card-inner">
                                <h5 className='text-main'>Donation Information:</h5>
                                <div className="donation-receipt-card-cont">
                                    <p className='donation-receipt-card-text'>Donation Amount: <span className='donation-receipt-card-subtext'>{donationData.donation_amount}</span></p>
                                    <p className='donation-receipt-card-text'>Donation Date:<span className='donation-receipt-card-subtext'>&nbsp;
                                        {(new Date(donationData.donation_created_date).getDate())}&nbsp;
                                        {new Date(donationData.donation_created_date).toLocaleString('default', { month: 'long' })}&nbsp;
                                        {new Date(donationData.donation_created_date).getFullYear()}</span></p>
                                </div>
                            </div>
                            <div className="donation-recept-card-inner text-center mt-5 fst-italic">
                                <span>*&nbsp;This is a system generated receipt no signature required&nbsp;*</span>
                            </div>
                        </div>
                    </div>
                </Col>
                <Col xs={12} md={4}>
                    <Button className='btn-main' onClick={handleDownloadPDF}>Download PDF</Button>
                </Col>
            </Row>
        </React.Fragment>
    );
};

export default GetReceiptGenerate;
