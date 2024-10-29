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
                                <img src={AboutImg} className='msgbxhome-img' alt="" />
                                <h3 className='text-main'>Dr. Subroto Roy</h3>
                            </div>
                        </Col>
                        <Col sm={12} md={6} className='d-flex justify-content-center'>
                            <div className="msgbxhome-bx">
                                <h2 className='text-main'>Director’s Message</h2>
                                <p className='paragraph1'>What we pride as Bharata is the gift of our Rishi’s.
                                    They, not only gave us Veda-s but also successfully embedded their knowledge in our daily living. However in the name of modernity we have created unsustainable world which require a realignment with the worldview of our Rishi’s. Bharata Arseya Sansthan is an initiative to catelised the process of this realignment.</p>
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
        </React.Fragment>
    )
}

export default MsgBxHome