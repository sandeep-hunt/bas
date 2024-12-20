import React from 'react'
import './ImpactHome.css'
import { Col, Row } from 'react-bootstrap'

const ImpactHome = () => {
    return (
        <React.Fragment>
            <div className="impacthome-container">
                <h2 className='container-title impactHome'>Our Impact</h2>
                <div className="impacthome-inner">
                    <Row>
                        <Col sm={6} md={6} lg={3}>
                            <div className="impacthome-item">
                                <span className='text-main splHeadng'>50+</span>
                                <p className='text-gray paragraph2'>Lecture demonstrations across the globe</p>
                            </div>
                        </Col>
                        <Col sm={6} md={6} lg={3}>
                            <div className="impacthome-item">
                                <span className='text-main splHeadng'>63</span>
                                <p className='text-gray paragraph2'>Global performances</p>
                            </div>
                        </Col>
                        <Col sm={6} md={6} lg={3}>
                            <div className="impacthome-item">
                                <span className='text-main splHeadng'>75</span>
                                <p className='text-gray paragraph2'>International conferences</p>
                            </div>
                        </Col>
                        <Col sm={6} md={6} lg={3}>
                            <div className="impacthome-item">
                                <span className='text-main splHeadng'>110</span>
                                <p className='text-gray paragraph2'>Publications in Journals, Magazines, Newspapers</p>
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
        </React.Fragment>
    )
}

export default ImpactHome