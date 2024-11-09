import React from 'react'
import { Container, Card } from 'react-bootstrap'
import success from '../../../assets/images/msic/success.svg';

const Donation_verifying = () => {
    return (
        <React.Fragment>
            <div className="donate-container">
                <Container fluid>
                    <div className="payment-success">
                        <div className="payment-wrapper">
                            <Card>
                                <Card.Body>
                                    <div className="donation-right-header">
                                        <h4 className='text-main text-center tw-800'>Make a Donation</h4>
                                    </div>
                                    <div className="payment-content">
                                        <img src={success} className='img-fluid' alt="payment_icon" />
                                        <h4>Please Wait....</h4>
                                        <h5>Verifying Payment</h5>
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

export default Donation_verifying