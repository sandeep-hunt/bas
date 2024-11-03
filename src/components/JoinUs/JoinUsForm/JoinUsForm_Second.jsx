import React, {useState} from 'react'
import { Row, Col } from 'react-bootstrap'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import DonateImg1 from '../../../assets/images/msic/donate_bg1.png'

const JoinUsForm_Second = ({ formData, setFormData, submitForm, prevStep, errors }) => {
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
      <Row>
        <Col sm={12} lg={5}>
          <div className="donation-left" style={{ backgroundImage: `url(${DonateImg1})` }}>
            <h3>We Can Support The Culture</h3>
          </div>
        </Col>
        <Col sm={12} lg={7}>
          <div className="donation-right">
            <div className="donation-right-header">
              <h4 className='text-main text-center'>Join Us</h4>
              <div className="donation-right-wrapper justify-content-evenly">
                <div className='donation-right-cont'>
                  <div className='donation-right-step active-check'><FontAwesomeIcon icon={faCheck} /></div>
                  <div className="donation-right-text active">PERSONAL DETAILS</div>
                </div>
                <div className='donation-right-cont active'>
                  <div className='donation-right-step active'>2</div>
                  <div className="donation-right-text active">CONTACT DETAIL</div>
                </div>
              </div>
            </div>
            <div className="donation-right-body">
              <h4>Contact Details</h4>
              <Row>
                <Col xs={4}>
                  <Form.Group className='mb-3'>
                    <label>State <span style={{ color: `red` }}>*</span></label>
                    <input className='form-control' type="text" name="state" value={state} onChange={handleChange} placeholder='State'/>
                    {errors.state && <small className="text-danger">{errors.state}</small>}
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col xs={4}>
                  <Form.Group className='mb-3'>
                    <label>City <span style={{ color: `red` }}>*</span></label>
                    <input className='form-control' type="text" name="city" value={city} onChange={handleChange} placeholder='City'/>
                    {errors.city && <small className="text-danger">{errors.city}</small>}
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col xs={10}>
                  <Form.Group className='mb-3'>
                    <label>Address <span style={{ color: `red` }}>*</span></label>
                    <input className='form-control' type="text" name="address" value={address} onChange={handleChange} placeholder='Address'/>
                    {errors.address && <small className="text-danger">{errors.address}</small>}
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col xs={4}>
                  <Form.Group className='mb-3'>
                    <label>Pincode <span style={{ color: `red` }}>*</span></label>
                    <input className='form-control' type="text" name="pincode" value={pincode} onChange={handleChange} placeholder='Pincode'/>
                    {errors.pincode && <small className="text-danger">{errors.pincode}</small>}
                  </Form.Group>
                </Col>
              </Row>
              <Form.Group className='mt-4'>
                <Form.Check
                  checked={isCheckboxChecked}
                  onChange={handleCheckboxChange}
                  required
                  label="I am willing to receive regular BAS updates."
                />
              </Form.Group>
              <Form.Group className='mt-4'>
                <Row>
                  <Col>
                    <div className="d-grid">
                      <Button className='btn-main-outline' onClick={prevStep} >Back</Button>
                    </div>
                  </Col>
                  <Col>
                    <div className="d-grid">
                      <Button className='btn-main' onClick={submitForm} disabled={!state || !city || !address || !pincode || !isCheckboxChecked} >Register</Button>
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

export default JoinUsForm_Second