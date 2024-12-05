import React from 'react'
import './HeroBanner.css'
import { Row, Col, Button } from 'react-bootstrap'
import HeroImg from '../../assets/images/msic/heroimg.png'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

const HeroBanner = () => {
  return (
    <React.Fragment>
      <div className="herobanner-container">
        <Row>
          <Col sm={12} lg={6}>
            <div className="herobanner-inner">
              <h1 className="text-main">Celebrating our Ṛṣī Wisdom & Shastra-s</h1>
              <p className='text-main paragraph1'>The fountainheads of Bhāratīya Saṁskriti are the Rishi-s’. The Bhāratīya worldview is incomplete without reference to them. All teaching learning processes & contents must be primarily based on their wisdom.</p>
              <div>
                <Link to="/about-us" className="btn-link">Learn More&nbsp;&nbsp;<FontAwesomeIcon size='sm' icon={faArrowRight} /></Link>
              </div>
            </div>
          </Col>
          <Col sm={12} lg={6} className='d-flex justify-content-end'>
            <img src={HeroImg} className='img-fluid' alt="Ṛṣī Wisdom & Shastra-s" />
          </Col>
        </Row>
      </div>
    </React.Fragment>
  )
}

export default HeroBanner