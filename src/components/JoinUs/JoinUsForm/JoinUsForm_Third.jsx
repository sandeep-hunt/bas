import React, { useState } from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { Spinner } from 'react-bootstrap'; // Import Spinner for loading indicator
import DonateImg1 from '../../../assets/images/msic/donate_bg1.png';

const JoinUsForm_Third = ({ formData, setFormData, submitForm, prevStep, errors, btnLoad }) => {
    const { aadhaarFile, panFile, resumeFile } = formData; // Change photoFile to resumeFile
    const [isCheckboxChecked, setCheckboxChecked] = useState(false);

    const handleFileChange = (e, fileType) => {
        const selectedFile = e.target.files[0]; // Get the selected file
        setFormData((prevData) => ({ ...prevData, [fileType]: selectedFile })); // Update specific file in formData
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
                                            <div className='donation-right-cont'>
                                                <div className='donation-right-step active-check'>2</div>
                                                <div className="donation-right-text active">CONTACT DETAIL</div>
                                            </div>
                                            <div className='donation-right-cont active'>
                                                <div className='donation-right-step active'>3</div>
                                                <div className="donation-right-text active">DOCUMENTS</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="donation-right-body">
                                        <h4>Upload Documents</h4>
                                        <Row>
                                            <Col xs={12} className="mb-3">
                                                <Form.Group>
                                                    <label>Aadhaar Document <span style={{ color: 'red' }}>*</span></label>
                                                    <input
                                                        className="form-control"
                                                        type="file"
                                                        onChange={(e) => handleFileChange(e, 'aadhaarFile')}
                                                    />
                                                    {errors.aadhaarFile ? (
                                                        <small className="text-danger">{errors.aadhaarFile}</small>
                                                    ) : (
                                                        formData.aadhaarFile && (
                                                            <small className="text-success">
                                                                {formData.aadhaarFile.name}
                                                            </small>
                                                        )
                                                    )}
                                                </Form.Group>
                                            </Col>
                                            <Col xs={12} className="mb-3">
                                                <Form.Group>
                                                    <label>PAN Card <span style={{ color: 'red' }}>*</span></label>
                                                    <input
                                                        className="form-control"
                                                        type="file"
                                                        onChange={(e) => handleFileChange(e, 'panFile')}
                                                    />
                                                    {errors.panFile ? (
                                                        <small className="text-danger">{errors.panFile}</small>
                                                    ) : (
                                                        formData.panFile && (
                                                            <small className="text-success">
                                                                {formData.panFile.name}
                                                            </small>
                                                        )
                                                    )}
                                                </Form.Group>
                                            </Col>
                                            <Col xs={12} className="mb-3">
                                                <Form.Group>
                                                    <label>Resume <span style={{ color: 'red' }}>*</span></label>
                                                    <input
                                                        className="form-control"
                                                        type="file"
                                                        onChange={(e) => handleFileChange(e, 'resumeFile')} // Changed photoFile to resumeFile
                                                    />
                                                    {errors.resumeFile ? ( // Changed photoFile to resumeFile
                                                        <small className="text-danger">{errors.resumeFile}</small> // Changed photoFile to resumeFile
                                                    ) : (
                                                        formData.resumeFile && ( // Changed photoFile to resumeFile
                                                            <small className="text-success">
                                                                {formData.resumeFile.name} {/* Changed photoFile to resumeFile */}
                                                            </small>
                                                        )
                                                    )}
                                                </Form.Group>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col>
                                                <Form.Group className="mb-3">
                                                    <Form.Check
                                                        checked={isCheckboxChecked}
                                                        onChange={handleCheckboxChange}
                                                        required
                                                        label={
                                                            <span className="form-checkbox-label">
                                                                I certify that above provided documents are correct and there is no mistake.
                                                            </span>
                                                        }
                                                    />
                                                </Form.Group>
                                            </Col>
                                        </Row>
                                        <Form.Group>
                                            <Row>
                                                <Col>
                                                    <div className="d-grid">
                                                        <Button className="btn-main-outline" onClick={prevStep}>Back</Button>
                                                    </div>
                                                </Col>
                                                <Col>
                                                    <div className="d-grid">
                                                        <Button
                                                            className="btn-main"
                                                            onClick={submitForm}
                                                            disabled={
                                                                btnLoad ||
                                                                !isCheckboxChecked ||
                                                                !aadhaarFile ||
                                                                !panFile ||
                                                                !resumeFile // Changed photoFile to resumeFile
                                                            }
                                                        >
                                                            {btnLoad ? <Spinner as="span" animation="border" size="sm" /> : 'Register'}
                                                        </Button>
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
    );
};

export default JoinUsForm_Third;