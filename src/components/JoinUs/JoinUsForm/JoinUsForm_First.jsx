import React from 'react'
import { Row, Col } from 'react-bootstrap'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import PhoneInput from 'react-phone-input-2';
import DonateImg1 from '../../../assets/images/msic/donate_bg1.png'

const JoinUsForm_First = ({ formData, setFormData, nextStep }) => {
  const { name, mobile, email, age, gender, member_type } = formData;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  return (
    <React.Fragment>
      <Row>
        <Col sm={12} md={5}>
          <div className="donation-left" style={{ backgroundImage: `url(${DonateImg1})` }}>
            <h3>We Can Support The Culture</h3>
          </div>
        </Col>
        <Col sm={12} md={7}>
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
              </div>
            </div>
            <div className="donation-right-body">
              <h4>Personal Details</h4>
              <Row>
                <Col xs={7}>
                  <Form.Group className='mb-3'>
                    <label>Name <span style={{ color: `red` }}>*</span></label>
                    <input className='form-control' type="text" name="name" value={name} onChange={handleChange} placeholder='Full Name' />
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col xs={5}>
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
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col xs={5}>
                  <Form.Group className='mb-3'>
                    <label>Email <span style={{ color: `red` }}>*</span></label>
                    <input className='form-control' type="email" name="email" value={email} onChange={handleChange} placeholder='Email' />
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col xs={2}>
                  <Form.Group className='mb-3'>
                    <label>Age <span style={{ color: `red` }}>*</span></label>
                    <input className='form-control' type="text" name="age" value={age} onChange={handleChange} placeholder='Age' />
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col xs={3}>
                  <Form.Group>
                    <label>Gender <span style={{ color: `red` }}>*</span></label>
                    <Form.Select name="gender" onChange={handleChange}>
                      <option value=''>Gender</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                    </Form.Select>
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
              <Form.Group className='mt-4'>
                <Form.Check
                  required
                  label=" I certify that above provided information is correct and there is no mistake. I know that all further communication will be done on above provided details."
                />
              </Form.Group>
              <Form.Group className='mt-4'>
                <Row>
                  <Col>
                    <div className="d-grid">
                      <Button className='btn-main' onClick={nextStep} disabled={!name || !mobile || !email || !age || !gender || !member_type} >Next</Button>
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

export default JoinUsForm_First