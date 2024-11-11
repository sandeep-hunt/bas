import React from 'react'
import { Container, Card } from 'react-bootstrap'
import success from '../../../assets/images/msic/success.svg';
import { Link } from 'react-router-dom';

const Donation_failed = () => {
    return (
        <React.Fragment>
            <div className="donate-container">
                <Container fluid>
                    <div className="payment-failed">
                        <div className="payment-wrapper">
                            <Card>
                                <Card.Body>
                                    <div className="donation-right-header">
                                        <h4 className='text-main text-center tw-800'>Make a Donation</h4>
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
    )
}

export default Donation_failed