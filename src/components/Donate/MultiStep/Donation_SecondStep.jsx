import React from 'react'
import { Row, Col } from 'react-bootstrap'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import DonateImg1 from '../../../assets/images/msic/donate_bg1.png'

const Donation_SecondStep = ({ formData, setFormData, nextStep, prevStep }) => {
  const { state, city, address, pincode } = formData;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  return (
    <React.Fragment>
      <Row>
        <Col sm={12} md={5}>
          <div className="donation-left" style={{backgroundImage: `url(${DonateImg1})`}}>
          <h3>We like to support.</h3>
          </div>
        </Col>
        <Col sm={12} md={7}>
          <div className="donation-right">
            <div className="donation-right-header">
              <h4 className='text-main text-center tw-800'>Make a Donation</h4>
              <div className="donation-right-wrapper">
                <div className='donation-right-cont'>
                  <div className='donation-right-step active-check'><FontAwesomeIcon icon={faCheck} /></div>
                  <div className="donation-right-text active">PERSONAL DETAILS</div>
                </div>
                <div className='donation-right-cont active'>
                  <div className='donation-right-step active'>2</div>
                  <div className="donation-right-text active">CONTACT DETAIL</div>
                </div>
                <div className='donation-right-cont'>
                  <div className='donation-right-step'>3</div>
                  <div className="donation-right-text">PAYMENT</div>
                </div>
              </div>
            </div>
            <div className="donation-right-body">
              <h4>Contact Details</h4>
              <Row>
                <Col xs={4}>
                  <Form.Group className='form-group'>
                    <label>State <span style={{ color: `red` }}>*</span></label>
                    <input className='form-control' type="text" name="state" value={state} onChange={handleChange} placeholder='State'/>
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col xs={4}>
                  <Form.Group className='form-group'>
                    <label>City <span style={{ color: `red` }}>*</span></label>
                    <input className='form-control' type="text" name="city" value={city} onChange={handleChange} placeholder='City'/>
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col xs={10}>
                  <Form.Group className='form-group'>
                    <label>Address <span style={{ color: `red` }}>*</span></label>
                    <input className='form-control' type="text" name="address" value={address} onChange={handleChange} placeholder='Address'/>
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col xs={4}>
                  <Form.Group className='form-group'>
                    <label>Pincode <span style={{ color: `red` }}>*</span></label>
                    <input className='form-control' type="text" name="pincode" value={pincode} onChange={handleChange} placeholder='Pincode'/>
                  </Form.Group>
                </Col>
              </Row>
              <Form.Group className='form-group'>
                <Form.Check
                  required
                  label="I am willing to receive regular BAS updates."
                />
              </Form.Group>
              <Form.Group>
                <Row>
                  <Col>
                    <div className="d-grid">
                      <Button className='btn-main-outline' onClick={prevStep} >Back</Button>
                    </div>
                  </Col>
                  <Col>
                    <div className="d-grid">
                      <Button className='btn-main' onClick={nextStep} disabled={!state || !city || !address || !pincode} >Next</Button>
                    </div>
                  </Col>
                </Row>
              </Form.Group>
            </div>
          </div>
        </Col>
      </Row>
    </React.Fragment>
  )
}

export default Donation_SecondStep