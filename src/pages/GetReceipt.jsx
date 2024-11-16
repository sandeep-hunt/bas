import React, { useEffect, useState } from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import { Helmet } from 'react-helmet-async';
import { Container, Form, Button, Row, Col, Spinner } from 'react-bootstrap';
import axios from 'axios';

const GetReceipt = () => {
  const [settings, setSettings] = useState('');
  const [receiptNumber, setReceiptNumber] = useState('');
  const [otp, setOtp] = useState('');
  const [errorReceiptNumber, setErrorReceiptNumber] = useState('');
  const [errorOtp, setErrorOtp] = useState('');
  const [otpSent, setOtpSent] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false); // State for loading spinner

  useEffect(() => {
    window.scrollTo(0, 0);
    const fetchData = async () => {
      try {
        const fetchSettings = await axios.get(import.meta.env.VITE_BACKEND_API + 'fetch/settings');
        setSettings(fetchSettings.data[0]);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const handleReceiptNumberChange = (e) => {
    const value = e.target.value;
    if (/^\d*$/.test(value) && value !== '0') {
      setReceiptNumber(value);
      setErrorReceiptNumber('');
    } else if (value === '0') {
      setErrorReceiptNumber('Receipt number cannot be just zero.');
    } else {
      setErrorReceiptNumber('Receipt number must contain only numbers.');
    }
  };

  const handleOtpChange = (e) => {
    const value = e.target.value;
    if (/^\d*$/.test(value)) {
      setOtp(value);
      setErrorOtp('');
    } else {
      setErrorOtp('OTP must contain only numbers.');
    }
  };

  const handleGetOtp = async () => {
    if (!receiptNumber || receiptNumber.length < 6) {
      setErrorReceiptNumber('Enter a valid receipt number to get OTP.');
      return;
    }

    setIsLoading(true); // Show the spinner when loading
    setErrorReceiptNumber(''); // Clear any previous errors
    setSuccessMessage(''); // Clear any previous success messages

    try {
      // Check if the receipt number exists and send OTP
      const response = await axios.post(import.meta.env.VITE_BACKEND_API + 'fetch/check-receipt-number', {
        receipt_number: receiptNumber,
      });

      if (response.data.success) {
        setOtpSent(true); // OTP successfully sent
        setSuccessMessage('OTP has been sent successfully!');
        setErrorReceiptNumber(''); // Clear any errors
        console.log('OTP sent to the email associated with the receipt number');
      } else {
        setErrorReceiptNumber(response.data.message); // Show error if receipt number not found
        setOtpSent(false);
        setSuccessMessage(''); // Clear success message if OTP wasn't sent
      }
    } catch (error) {
      console.error('Error checking receipt number:', error);
      setErrorReceiptNumber('Error checking receipt number.');
      setOtpSent(false); // OTP sending failed
      setSuccessMessage(''); // Clear success message
    } finally {
      setIsLoading(false); // Hide the spinner after the request is completed
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let isValid = true;

    if (!receiptNumber) {
      setErrorReceiptNumber('Receipt number is required.');
      isValid = false;
    } else if (receiptNumber.length < 1) {
      setErrorReceiptNumber('Receipt number must be at least 1 digit.');
      isValid = false;
    }

    if (!otp) {
      setErrorOtp('OTP is required.');
      isValid = false;
    } else if (otp.length !== 6) {
      setErrorOtp('OTP must be 6 digits.');
      isValid = false;
    }

    if (isValid) {
      setIsSubmitting(true);
      try {
        // Send receipt number and OTP to the backend for verification
        const response = await axios.post(import.meta.env.VITE_BACKEND_API + 'fetch/verify-otp', {
          receipt_number: receiptNumber,
          otp: otp,
        });

        if (response.data.success) {
          // OTP verification successful
          setSuccessMessage('OTP verification successful!');
          setErrorReceiptNumber('');
          setErrorOtp('');
        } else {
          // OTP verification failed
          setErrorOtp('Invalid OTP. Please try again.');
          setSuccessMessage('');
        }
      } catch (error) {
        console.error('Error verifying OTP:', error);
        setErrorOtp('An error occurred while verifying OTP.');
        setSuccessMessage('');
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  return (
    <React.Fragment>
      <Helmet>
        <title>{`${settings?.site_title || 'Bharata Arseya Samsthan'} | Get Receipt`}</title>
        <meta name="description" content={settings.site_description} />
        <meta name="keywords" content={settings.site_keywords}></meta>
      </Helmet>
      <Header />
      <div className="donate-container">
        <Container fluid>
          <div className="donation-receipt-cont">
            <div className="donation-receipt-contInr">
              <div className="text-center">
                <h4>Thank You for Your Generosity!</h4>
                <h5>
                  Your donation will make a meaningful impact. We truly appreciate your support and commitment to our cause. Click the button below to download your donation receipt and keep it for your records. Thank you for your generous support!
                </h5>
              </div>
              <div className="donation-receipt-form">
                <Form onSubmit={handleSubmit}>
                  <Form.Group className="form-group">
                    <Row>
                      <Col xs={8}>
                        <label>
                          Receipt Number <span style={{ color: 'red' }}>*</span>
                        </label>
                        <input
                          className="form-control"
                          type="text"
                          name="receiptNumber"
                          placeholder="Enter Receipt Number"
                          value={receiptNumber}
                          onChange={handleReceiptNumberChange}
                          disabled={otpSent || isLoading} // Disable when OTP is sent or loading
                        />
                      </Col>
                      <Col xs={4} className="d-flex align-items-end">
                        <Button
                          className="btn-main-outline w-100"
                          type="button"
                          onClick={handleGetOtp}
                          disabled={!receiptNumber || receiptNumber.length === 0 || otpSent || isLoading} // Disable when loading or OTP is sent
                        >
                          {isLoading ? (
                            <Spinner animation="border" size="sm" />
                          ) : (
                            'Get OTP'
                          )}
                        </Button>
                      </Col>
                    </Row>
                    {errorReceiptNumber && (
                      <span style={{ color: 'red', fontSize: '0.9rem', marginTop: '0.5rem', display: 'block' }}>
                        {errorReceiptNumber}
                      </span>
                    )}
                  </Form.Group>

                  <Form.Group className="form-group">
                    <label>
                      OTP <span style={{ color: 'red' }}>*</span>
                    </label>
                    <input
                      className="form-control"
                      type="text"
                      name="otp"
                      placeholder="Enter OTP"
                      value={otp}
                      onChange={handleOtpChange}
                      disabled={!otpSent} // Enable only after OTP is sent
                    />
                    {errorOtp && (
                      <span style={{ color: 'red', fontSize: '0.9rem', marginTop: '0.5rem', display: 'block' }}>
                        {errorOtp}
                      </span>
                    )}
                    {successMessage && !errorReceiptNumber && !errorOtp && !isSubmitting && (
                      <span style={{ color: 'green', fontSize: '0.9rem', marginTop: '1rem', display: 'block' }}>
                        {successMessage}
                      </span>
                    )}
                  </Form.Group>

                  <Form.Group className="form-group">
                    <Button
                      className="btn-main w-100"
                      type="submit"
                      disabled={!receiptNumber || !otp || errorReceiptNumber || errorOtp || !otpSent || isSubmitting}
                    >
                      {isSubmitting ? 'Submitting...' : 'Submit'}
                    </Button>
                  </Form.Group>
                </Form>
              </div>
            </div>
          </div>
        </Container>
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default GetReceipt;
