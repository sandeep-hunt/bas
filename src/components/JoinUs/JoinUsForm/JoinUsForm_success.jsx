import React from 'react'
import { Container, Card } from 'react-bootstrap'
import Joinsuccess from '../../../assets/images/msic/joinsuccess.svg'
import { Link } from 'react-router-dom'

const JoinUsForm_success = ({ formData }) => {
  const { member_type } = formData;

  return (
    <React.Fragment>
      <div className="donate-container">
        <Container fluid>
          <div className="payment-success">
            <div className="payment-wrapper">
              <Card>
                <Card.Body>
                  <div className="donation-right-header">
                    <h4 className='text-main text-center tw-800'>Happy to have you here!</h4>
                  </div>
                  <div className="payment-content">
                    <img src={Joinsuccess} className='img-fluid' alt="" />
                    <h4>Thank You!</h4>
                    <h5>Your registration as a {member_type} has been successful.</h5>
                    <span className="text-center" style={{color: `#959595`}}>Thank you for registering! Please allow 24-48 hours for us to process your registration. We appreciate your patience and look forward to assisting you.</span>
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

export default JoinUsForm_success