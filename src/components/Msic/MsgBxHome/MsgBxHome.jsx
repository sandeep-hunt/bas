import React from 'react'
import './MsgBxHome.css'
import { Col, Row } from 'react-bootstrap'
import AboutImg from '../../../assets/images/testimonials/about.png'

const MsgBxHome = () => {
    return (
        <React.Fragment>
            <div className="msgbxhome-container">
                <div className="msgbxhome-inner">
                    <Row>
                        <Col sm={12} md={6}>
                            <div className="msgbxhome-imgcont">
                                <img src={AboutImg} className='msgbxhome-img' alt="Dr. Subroto Roy" />
                                <div className='d-flex flex-column text-center justify-content-center'>
                                    <h4 className='text-main'>Dr. Subroto Roy</h4>
                                    <span className='text-main tw-500'>(Suvratadév Śarmaṇa Vañdyopādhyāya)</span>
                                </div>
                            </div>
                        </Col>
                        <Col sm={12} md={6} className='d-flex justify-content-center'>
                            <div className="msgbxhome-bx">
                                <h3 className='text-main text-center'>Director’s Message</h3>
                                <p className='paragraph1 text-semibold'>What we pride as Bhārata is the gift of our Ṛṣī-s’ They, not only gave us Véda-s but also successfully embedded their knowledge in our daily living. However in the name of modernity we have created unsustainable world which require a realignment with the worldview of our Ṛṣī. Bhārata Āṛṣéya Saṁsthān is an initiative to catelised the process of this realignment.</p>
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
        </React.Fragment>
    )
}

export default MsgBxHome