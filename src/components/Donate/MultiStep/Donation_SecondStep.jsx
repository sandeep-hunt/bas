import React, { useState } from 'react'
import { Row, Col, Container } from 'react-bootstrap'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import DonateImg1 from '../../../assets/images/msic/donate_bg1.png'

const Donation_SecondStep = ({ formData, setFormData, nextStep, prevStep, errors }) => {
  const { state, city, address, pincode } = formData;
  const [isCheckboxChecked, setCheckboxChecked] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleCheckboxChange = () => {
    setCheckboxChecked(!isCheckboxChecked);
  };

  return (
    <React.Fragment>
      <div className="donate-container">
        <Container fluid>
          <div className="donate-wrapper">
            <Row>
              <Col sm={12} lg={5}>
                <div className="donation-left" style={{ backgroundImage: `url(${DonateImg1})` }}>
                  <h3>We like to support.</h3>
                </div>
              </Col>
              <Col sm={12} lg={7}>
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
                      <Col xs={6} sm={5}>
                        <Form.Group className='form-group'>
                          <label>State <span style={{ color: `red` }}>*</span></label>
                          <input className='form-control' type="text" name="state" value={state} onChange={handleChange} placeholder='State' />
                          {errors.state && <small className="text-danger">{errors.state}</small>}
                        </Form.Group>
                      </Col>
                    </Row>
                    <Row>
                      <Col xs={6} sm={5}>
                        <Form.Group className='form-group'>
                          <label>City <span style={{ color: `red` }}>*</span></label>
                          <input className='form-control' type="text" name="city" value={city} onChange={handleChange} placeholder='City' />
                          {errors.city && <small className="text-danger">{errors.city}</small>}
                        </Form.Group>
                      </Col>
                    </Row>
                    <Row>
                      <Col xs={10}>
                        <Form.Group className='form-group'>
                          <label>Address <span style={{ color: `red` }}>*</span></label>
                          <input className='form-control' type="text" name="address" value={address} onChange={handleChange} placeholder='Address' />
                          {errors.address && <small className="text-danger">{errors.address}</small>}
                        </Form.Group>
                      </Col>
                    </Row>
                    <Row>
                      <Col xs={5} md={4}>
                        <Form.Group className='form-group'>
                          <label>Pincode <span style={{ color: `red` }}>*</span></label>
                          <input className='form-control' type="text" name="pincode" value={pincode} onChange={handleChange} placeholder='Pincode' />
                          {errors.pincode && <small className="text-danger">{errors.pincode}</small>}
                        </Form.Group>
                      </Col>
                    </Row>
                    <Form.Group className='form-group'>
                      <Form.Check
                        checked={isCheckboxChecked}
                        onChange={handleCheckboxChange}
                        required
                        label={
                          <span className='form-checkbox-label'>
                            I do hereby declare that, the contributions are from my personal funds and voluntary by nature. I also agree to the policy that no refunds for the cancellation of the donated amount will be entertained.</span>
                        }
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
                            <Button className='btn-main' onClick={nextStep} disabled={!state || !city || !address || !pincode || !isCheckboxChecked} >Next</Button>
                          </div>
                        </Col>
                      </Row>
                    </Form.Group>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
    </React.Fragment>
  )
}

export default Donation_SecondStep