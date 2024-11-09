import React, { useState } from 'react';
import { Row, Col } from 'react-bootstrap'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import DonateImg1 from '../../../assets/images/msic/donate_bg1.png'

const Donation_ThirdStep = ({ formData, setFormData, submitForm, prevStep, errors }) => {
  const { donation_type, donation_amt, donation_freq } = formData;
  const [selectedRadioAmt, setSelectedRadioAmt] = useState(donation_amt);

  const handleChange = (e) => {
    const { name, value, type } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    // Clear radio selection if custom amount is entered in the text field
    if (name === 'donation_amt' && type === 'text') {
      setSelectedRadioAmt(''); // Clear radio button selection
    }
  };

  const handleRadioChange = (value) => {
    setSelectedRadioAmt(value); // Set selected radio button value
    setFormData((prevData) => ({
      ...prevData,
      donation_amt: value,
    }));
  };

  return (
    <React.Fragment>
      <Row>
        <Col sm={12} lg={5}>
          <div className="donation-left" style={{ backgroundImage: `url(${DonateImg1})` }}>
            <h3>We like to support.</h3>
          </div>
        </Col>
        <Col sm={12} lg={7}>
          <div className="donation-right">
            <div className="donation-right-header">
              <h3 className='text-main text-center tw-800'>Make a Donation</h3>
              <div className="donation-right-wrapper">
                <div className='donation-right-cont'>
                  <div className='donation-right-step active-check'><FontAwesomeIcon icon={faCheck} /></div>
                  <div className="donation-right-text active">PERSONAL DETAILS</div>
                </div>
                <div className='donation-right-cont active'>
                  <div className='donation-right-step active-check'><FontAwesomeIcon icon={faCheck} /></div>
                  <div className="donation-right-text active">CONTACT DETAIL</div>
                </div>
                <div className='donation-right-cont'>
                  <div className='donation-right-step active'>3</div>
                  <div className="donation-right-text active">PAYMENT</div>
                </div>
              </div>
            </div>
            <div className="donation-right-body">
              <Row>
                <Col xs={5}>
                  <Form.Group className='form-group'>
                    <label>Choose a donation type<span style={{ color: `red` }}>*</span></label>
                    <Form.Select name="donation_type" onChange={handleChange}>
                      <option value=''>Select donation type</option>
                      <option value="male">Cost of education</option>
                    </Form.Select>
                    {errors.donation_type && <small className="text-danger">{errors.donation_type}</small>}
                  </Form.Group>
                </Col>
              </Row>
              <label>Choose a donation amount</label>
              <div className="form-group">
                <Form.Group className='mt-1'>
                  <Form.Check
                    inline
                    label="&#8377; 25"
                    name="donation_amt"
                    value="25"
                    type="radio"
                    id="inline-radio-1"
                    checked={selectedRadioAmt === '25'}
                    onChange={() => handleRadioChange("25")}
                  />
                </Form.Group>
                <Form.Group className='mt-1'>
                  <Form.Check
                    inline
                    label="&#8377; 50"
                    name="donation_amt"
                    value="50"
                    type="radio"
                    id="inline-radio-2"
                    checked={selectedRadioAmt === '50'}
                    onChange={() => handleRadioChange("50")}
                  />
                </Form.Group>
                <Form.Group className='mt-1'>
                  <Form.Check
                    inline
                    label="&#8377; 100"
                    name="donation_amt"
                    value="100"
                    type="radio"
                    checked={selectedRadioAmt === '100'}
                    onChange={() => handleRadioChange("100")}
                  />
                  <Row>
                    <Col xs={6}>
                      <Form.Group className='mt-1'>
                        <input className='form-control' type="text" name="donation_amt" value={donation_amt} onChange={handleChange} placeholder='Enter a custom donation amount' />
                      </Form.Group>
                      {errors.donation_amt && <small className="text-danger">{errors.donation_amt}</small>}
                    </Col>
                  </Row>
                </Form.Group>
              </div>
              <label>Choose a donation frequency<span style={{ color: `red` }}>*</span></label>
              <Form.Group className='form-group'>
                <Form.Check className='form-check-box'
                  inline
                  label="Monthly"
                  name="donation_freq"
                  value="monthly"
                  type="radio"
                  id="inline-freq-1"
                  onChange={handleChange}
                />
                <Form.Check className='form-check-box'
                  inline
                  label="One Time"
                  name="donation_freq"
                  value="one time"
                  type="radio"
                  id="inline-freq-2"
                  onChange={handleChange}
                />
                {errors.donation_freq && <small className="text-danger">{errors.donation_freq}</small>}
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
                      <Button className='btn-main' onClick={submitForm} disabled={!donation_type || !donation_amt || !donation_freq} >Donate</Button>
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

export default Donation_ThirdStep