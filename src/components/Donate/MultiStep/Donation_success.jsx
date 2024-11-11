import React from 'react'
import { Container, Card } from 'react-bootstrap'
import success from '../../../assets/images/msic/success.svg';
import { Link } from 'react-router-dom';

const Donation_success = () => {
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
                    <img src={success} className='img-fluid' alt="" />
                    <h4>Thank You!</h4>
                    <h5>Payment Successful</h5>
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

export default Donation_success