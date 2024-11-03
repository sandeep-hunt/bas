import React, { useState, useEffect } from 'react';
import { Button, Card, Col, Container, Form, Row } from 'react-bootstrap';
import './BookingCont.css';
import DonateImg1 from '../../../assets/images/msic/donate_bg1.png';
import success from '../../../assets/images/msic/success.svg';
import { useParams, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';

const BookingCont = () => {
  const { slug } = useParams(); // Capture the event ID from the URL
  const [event, setEvent] = useState('');
  const [paymentSuccess, setpaymentSuccess] = useState('d-none');
  const [paymentFailed, setpaymentFailed] = useState('d-none');
  const [paymentVerify, setpaymentVerify] = useState('d-none');
  const [wrapper, setwrapper] = useState('d-block');
  const [loading, setLoading] = useState(false); // Loading state for button

  useEffect(() => {
    axios.get(`${import.meta.env.VITE_BACKEND_API}fetch/events/${slug}`)
      .then(response => {
        setEvent(response.data);
      })
      .catch(error => {
        console.error('Error fetching the event:', error);
        setError('Failed to fetch event');
      });
  }, [slug]);

  const [formData, setFormData] = useState({
    name: '',
    date: '',
    gender: '',
    email: '',
    mobile: '',
    state: '',
    city: '',
    address: '',
    pincode: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const loadRazorpayScript = () => {
    return new Promise((resolve) => {
      const script = document.createElement('script');
      script.src = 'https://checkout.razorpay.com/v1/checkout.js';
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  };

  // Validate form fields
  const isFormValid = () => {
    const { name, date, gender, email, mobile, state, city, address, pincode } = formData;
    if (!name || !date || !gender || !email || !mobile || !state || !city || !address || !pincode) {
      alert('Please fill in all required fields.');
      return false;
    }
    return true;
  };

  const handlePayment = async () => {
    if (!isFormValid()) return;

    setLoading(true);

    try {
      const bookingResponse = await axios.post(`${import.meta.env.VITE_BACKEND_API}fetch/book-event`, {
        ...formData,
        eventId: event.event_id,
        eventPrice: event.event_price
      });

      const { orderId, bookingId } = bookingResponse.data;

      const res = await loadRazorpayScript();
      if (!res) {
        alert('Razorpay SDK failed to load');
        return;
      }

      const options = {
        key: import.meta.env.VITE_RAZARPAY_KEY_ID,
        amount: event.event_price,
        currency: 'INR',
        name: event.event_name,
        description: 'Event Payment',
        order_id: orderId, // Razorpay Order ID
        handler: function (response) {
          setpaymentVerify('d-block');
          setwrapper('d-none');
          // You can also send payment details to your backend for further processing
          // Call the verify-payment API with the necessary details
          axios.post(`${import.meta.env.VITE_BACKEND_API}fetch/book-event/verify-payment`, {
            razorpay_order_id: response.razorpay_order_id,
            razorpay_payment_id: response.razorpay_payment_id,
            razorpay_signature: response.razorpay_signature,
            bookingId,
            email: formData.email
          })
            .then((verifyResponse) => {
              if (verifyResponse.data.success) {
                setwrapper('d-none');
                setpaymentVerify('d-none');
                setpaymentSuccess('d-block');
                setpaymentFailed('d-none');
              } else {
                setwrapper('d-none');
                setpaymentVerify('d-none');
                setpaymentSuccess('d-none');
                setpaymentFailed('d-block');
              }
            })
            .catch((error) => {
              setwrapper('d-none');
              setpaymentVerify('d-none');
              setpaymentSuccess('d-none');
              setpaymentFailed('d-block');
            });
        },
        modal: {
          ondismiss: function () {
            alert('Payment failed or was canceled.');
          }
        },
        prefill: {
          name: formData.name,
          email: formData.email,
          contact: formData.mobile
        },
        theme: {
          color: '#F37254'
        },
      };
      const paymentObject = new window.Razorpay(options);
      // Error Handling for Failed Payments (Optional)
      paymentObject.on('payment.failed', function (response) {
        // Payment failure handling
          setpaymentVerify('d-block');
          setwrapper('d-none');

        axios.post(`${import.meta.env.VITE_BACKEND_API}fetch/book-event/verify-payment`, {
          razorpay_order_id: response.error.metadata.order_id,
          razorpay_payment_id: response.error.metadata.payment_id, // Razorpay payment ID (if available)
          razorpay_signature: response.error.metadata.signature || '',
          bookingId // Pass the bookingId
        })
          .then((verifyResponse) => {
            if (verifyResponse.data.success) {
              setwrapper('d-none');
              setpaymentVerify('d-none');
              setpaymentSuccess('d-block');
              setpaymentFailed('d-none');
            } else {
              setwrapper('d-none');
              setpaymentVerify('d-none');
              setpaymentSuccess('d-none');
              setpaymentFailed('d-block');
            }
          })
          .catch((error) => {
            setwrapper('d-none');
            setpaymentVerify('d-none');
            setpaymentSuccess('d-none');
            setpaymentFailed('d-block');
          });
      });

      paymentObject.open();
    } catch (error) {
      console.error('Error initiating payment:', error);
      setLoading(false);
    }
  };

  return (
    <React.Fragment>
      <div className="donate-container">
        <Container fluid>
          <div className={wrapper + ' donate-wrapper'}>
            <Row>
              <Col sm={12} lg={5}>
                <div className="donation-left" style={{ backgroundImage: `url(${DonateImg1})` }}>
                  <h2>{event.event_name}</h2>
                  <p>{event.event_date}</p>
                  <p>{event.event_time}</p>
                  <p>{event.event_location}</p>
                  <h2>₹ {event.event_price}</h2>
                </div>
              </Col>
              <Col sm={12} lg={7}>
                <h3 className='form-group'>Personal Details</h3>
                <Row>
                  <Col sm={12} md={6}>
                    <Form.Group className='form-group'>
                      <label>Name <span style={{ color: 'red' }}>*</span></label>
                      <input
                        className='form-control'
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Enter your full name"
                        required
                      />
                    </Form.Group>
                  </Col>
                  <Col sm={12} md={6}>
                    <Form.Group className='form-group'>
                      <label>DOB <span style={{ color: 'red' }}>*</span></label>
                      <input
                        className='form-control'
                        type="date"
                        name="date"
                        value={formData.date}
                        onChange={handleInputChange}
                        required
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <Form.Group className='form-group'>
                  <label>Gender <span style={{ color: 'red' }}>*</span></label>
                  <Form.Select
                    name="gender"
                    value={formData.gender}
                    onChange={handleInputChange}
                    required
                  >
                    <option value=''>Select Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="rather not to say">Rather Not To Say</option>
                  </Form.Select>
                </Form.Group>
                <h3 className='form-group'>Contact Details</h3>
                <Row>
                  <Col sm={12} md={6}>
                    <Form.Group className='form-group'>
                      <label>Email <span style={{ color: 'red' }}>*</span></label>
                      <input
                        className='form-control'
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="Enter your email address"
                        required
                      />
                    </Form.Group>
                  </Col>
                  <Col sm={12} md={6}>
                    <Form.Group className='form-group'>
                      <label>Mobile <span style={{ color: 'red' }}>*</span></label>
                      <input
                        className='form-control'
                        type="text"
                        name="mobile"
                        value={formData.mobile}
                        onChange={handleInputChange}
                        placeholder="Enter your mobile number"
                        required
                      />
                    </Form.Group>
                  </Col>
                  <Col sm={12} md={6}>
                    <Form.Group className='form-group'>
                      <label>State <span style={{ color: 'red' }}>*</span></label>
                      <input
                        className='form-control'
                        type="text"
                        name="state"
                        value={formData.state}
                        onChange={handleInputChange}
                        placeholder="Enter your state"
                        required
                      />
                    </Form.Group>
                  </Col>
                  <Col sm={12} md={6}>
                    <Form.Group className='form-group'>
                      <label>City <span style={{ color: 'red' }}>*</span></label>
                      <input
                        className='form-control'
                        type="text"
                        name="city"
                        value={formData.city}
                        onChange={handleInputChange}
                        placeholder="Enter your city"
                        required
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <Form.Group className='form-group'>
                  <label>Address <span style={{ color: 'red' }}>*</span></label>
                  <textarea
                    className='form-control'
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    placeholder="Enter your full address"
                    required
                  />
                </Form.Group>
                <Form.Group className='form-group'>
                  <label>Pincode <span style={{ color: 'red' }}>*</span></label>
                  <input
                    className='form-control'
                    type="text"
                    name="pincode"
                    value={formData.pincode}
                    onChange={handleInputChange}
                    placeholder="Enter your pincode"
                    required
                  />
                </Form.Group>
                <Form.Group>
                  <Row>
                    <Col>
                      <div className="d-grid">
                        <Button className='btn-main' onClick={handlePayment} disabled={loading}>{loading ? (
                        <FontAwesomeIcon icon={faSpinner} spin /> // FontAwesome Spinner
                      ) : 'Submit & Pay'}</Button>
                      </div>
                    </Col>
                  </Row>
                </Form.Group>
              </Col>
            </Row>
          </div>
          <div className={paymentVerify + ' payment-verify'}>
            <div className="payment-wrapper">
              <Card>
                <Card.Body>
                  <div className="donation-right-header">
                    <h4 className='text-main text-center tw-800'>Book Now</h4>
                  </div>
                  <div className="payment-content">
                    <img src={success} className='img-fluid' alt="" />
                    <h4>Please Wait....</h4>
                    <h5>Verifying Payment</h5>
                  </div>
                </Card.Body>
              </Card>
            </div>
          </div>
          <div className={paymentSuccess + ' payment-success'}>
            <div className="payment-wrapper">
              <Card>
                <Card.Body>
                  <div className="donation-right-header">
                    <h4 className='text-main text-center tw-800'>Book Now</h4>
                  </div>
                  <div className="payment-content">
                    <img src={success} className='img-fluid' alt="" />
                    <h4>Thank You!</h4>
                    <h5>Payment Successful</h5>
                    <Link to="/" className="btn-link">Back To Home</Link>
                  </div>
                </Card.Body>
              </Card>
            </div>
          </div>
          <div className={paymentFailed + ' payment-failed'}>
            <div className="payment-wrapper">
              <Card>
                <Card.Body>
                  <div className="donation-right-header">
                    <h4 className='text-main text-center tw-800'>Book Now</h4>
                  </div>
                  <div className="payment-content">
                    <img src={success} className='img-fluid' alt="" />
                    <h4>Try Again Later!</h4>
                    <h5>Payment Failed</h5>
                    <Link to="/" className="btn-link">Back To Home</Link>
                  </div>
                </Card.Body>
              </Card>
            </div>
          </div>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default BookingCont;
