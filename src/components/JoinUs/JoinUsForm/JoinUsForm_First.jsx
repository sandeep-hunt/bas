import React, { useState } from 'react'
import { Row, Col, Container } from 'react-bootstrap'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { Spinner } from 'react-bootstrap'; // Import Spinner for loading indicator
import PhoneInput from 'react-phone-input-2';
import DonateImg1 from '../../../assets/images/msic/donate_bg1.png'

const JoinUsForm_First = ({ formData, setFormData, nextStep, errors, btnLoad }) => {
  const { name, mobile, email, age, gender, member_type } = formData;

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
                  <h3>I Support The Saṁskriti</h3>
                </div>
              </Col>
              <Col sm={12} lg={7}>
                <div className="donation-right">
                  <div className="donation-right-header">
                    <h4 className='text-main text-center'>Join Us</h4>
                    <div className="donation-right-wrapper justify-content-evenly">
                      <div className='donation-right-cont'>
                        <div className='donation-right-step active'>1</div>
                        <div className="donation-right-text active">PERSONAL DETAILS</div>
                      </div>
                      <div className='donation-right-cont'>
                        <div className='donation-right-step'>2</div>
                        <div className="donation-right-text">CONTACT DETAIL</div>
                      </div>
                      <div className='donation-right-cont'>
                        <div className='donation-right-step'>3</div>
                        <div className="donation-right-text">DOCUMENTS</div>
                      </div>
                    </div>
                  </div>
                  <div className="donation-right-body">
                    <h4>Personal Details</h4>
                    <Row>
                      <Col xs={10} sm={8} md={7}>
                        <Form.Group className='mb-3'>
                          <label>Name <span style={{ color: `red` }}>*</span></label>
                          <input className='form-control' type="text" name="name" value={name} onChange={handleChange} placeholder='Full Name' />
                          {errors.name && <small className="text-danger">{errors.name}</small>}
                        </Form.Group>
                      </Col>
                    </Row>
                    <Row>
                      <Col xs={9} sm={6} md={5}>
                        <Form.Group className='mb-3'>
                          <label>Mobile <span style={{ color: `red` }}>*</span></label>
                          <PhoneInput
                            country={'in'}
                            value={mobile}
                            onChange={(mobile) => setFormData((prevData) => ({ ...prevData, mobile: mobile }))}
                            enableSearch={true}
                            disableSearchIcon={false}
                            inputProps={{
                              name: 'phone',
                              required: true,
                            }}
                          />
                          {errors.mobile && <small className="text-danger">{errors.mobile}</small>}
                        </Form.Group>
                      </Col>
                    </Row>
                    <Row>
                      <Col xs={10} sm={6} md={6}>
                        <Form.Group className='mb-3'>
                          <label>Email <span style={{ color: `red` }}>*</span></label>
                          <input className='form-control' type="email" name="email" value={email} onChange={handleChange} placeholder='Email' />
                          {errors.email && <small className="text-danger">{errors.email}</small>}
                        </Form.Group>
                      </Col>
                    </Row>
                    <Row>
                      <Col xs={4} sm={3} md={2}>
                        <Form.Group className='mb-3'>
                          <label>Age <span style={{ color: `red` }}>*</span></label>
                          <input className='form-control' type="text" name="age" value={age} onChange={handleChange} placeholder='Age' />
                          {errors.age && <small className="text-danger">{errors.age}</small>}
                        </Form.Group>
                      </Col>
                    </Row>
                    <Row>
                      <Col xs={6} sm={4} md={3}>
                        <Form.Group>
                          <label>Gender <span style={{ color: `red` }}>*</span></label>
                          <Form.Select name="gender" onChange={handleChange}>
                            <option value=''>Gender</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                          </Form.Select>
                          {errors.gender && <small className="text-danger">{errors.gender}</small>}
                        </Form.Group>
                      </Col>
                    </Row>
                    <label className='mt-3'>Choose a type <span style={{ color: `red` }}>*</span></label>
                    <Form.Group className='mt-2'>
                      <Form.Check
                        inline
                        label="Volunteer"
                        name="member_type"
                        value="Volunteer"
                        type="radio"
                        id="inline-radio-1"
                        onChange={handleChange}
                      />
                    </Form.Group>
                    <Form.Group>
                      <Form.Check
                        inline
                        label="Member"
                        name="member_type"
                        value="Member"
                        type="radio"
                        id="inline-radio-2"
                        onChange={handleChange}
                      />
                    </Form.Group>
                    {errors.member_type && <small className="text-danger">{errors.member_type}</small>}
                    <Form.Group className='mt-3'>
                      <Form.Check
                        checked={isCheckboxChecked}
                        onChange={handleCheckboxChange}
                        required
                        label={
                          <span className='form-checkbox-label'>
                            I certify that above provided information is correct and there is no mistake. I know that all further communication will be done on above provided details.</span>
                        }
                      />
                    </Form.Group>
                    {errors.emailCheck && <small className="text-danger">{errors.emailCheck}</small>}
                    <Form.Group className='mt-3'>
                      <Row>
                        <Col>
                          <div className="d-grid">
                            <Button className='btn-main' onClick={nextStep} disabled={btnLoad || !name || !mobile || !email || !age || !gender || !member_type || !isCheckboxChecked} >
                              {btnLoad ? <Spinner as="span" animation="border" size="sm" /> : 'Next'}</Button>
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

export default JoinUsForm_First