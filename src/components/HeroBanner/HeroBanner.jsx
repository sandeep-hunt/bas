import React from 'react'
import './HeroBanner.css'
import { Row, Col, Button } from 'react-bootstrap'
import HeroImg from '../../assets/images/msic/heroimg.png'
import { Link } from 'react-router-dom'

const HeroBanner = () => {
  return (
    <React.Fragment>
      <div className="herobanner-container">
        <Row>
          <Col sm={12} lg={6}>
            <div className="herobanner-inner">
              <h1 className="text-main">Celebrating our Rishi-s’ Wisdom & Shastra-s</h1>
              <p className='text-main paragraph1'>The fountainheads of Bhartiya sanskriti are the Rishi-s’. The Bhartiya worldview is incomplete without reference to them. All teaching learning processes & contents must be primarily based on their wisdom.</p>
              <div>
                <Link to="/" className="btn-link">Learn More&nbsp;&#8594;</Link>
              </div>
            </div>
          </Col>
          <Col sm={12} lg={6} className='d-flex justify-content-end'>
            <img src={HeroImg} className='img-fluid' alt="Hero Banner" />
          </Col>
        </Row>
      </div>
    </React.Fragment>
  )
}

export default HeroBanner