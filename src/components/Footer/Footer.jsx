import React from 'react'
import './Footer.css'
import { Col, Container, Row } from 'react-bootstrap'
import Logo from '../../assets/images/logo_light.svg'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons'
import { faFacebookF,faXTwitter,faInstagramSquare,faLinkedinIn,faYoutube } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
  return (
    <React.Fragment>
      <footer>
        <Container>
          <Row>
            <Col sm={12} md={3}>
              <div className="footer-content">
                <img src={Logo} alt="" />
                <div>
                  <Link to="/donate" className='btn-mainLink'>&#x2764;&nbsp;Donate</Link>
                </div>
              </div>
            </Col>
            <Col sm={12} md={3}>
              <div className="footer-content1">
                <h4 className='footer-inner-cont'>Quick Links</h4>
                <ul>
                  <li><Link to="/">Home</Link></li>
                  <li><Link to="/">Projects</Link></li>
                  <li><Link to="/gallery">Gallery</Link></li>
                  <li><Link to="/events">Events</Link></li>
                  <li><Link to="/blogs&articles">Blogs & Articles</Link></li>
                  <li><Link to="/join-us">Join Us</Link></li>
                  <li><Link to="/about-us">About Us</Link></li>
                </ul>
              </div>
            </Col>
            <Col sm={12} md={3}>
              <div className="footer-content1">
                <h4 className='footer-inner-cont'>Projects</h4>
                <ul>
                  <li><Link to="/">Dhrupad Gurukul</Link></li>
                  <li><Link to="/">Samaveda Gurukul</Link></li>
                  <li><Link to="/">Girvaan Bhasa</Link></li>
                  <li><Link to="/">Jyotisha Gurukul</Link></li>
                </ul>
              </div>
            </Col>
            <Col sm={12} md={3}>
              <div className="footer-content1">
                <div className="footer-inner">
                  <div className="footer-inner-cont">
                    <span><FontAwesomeIcon icon={faMapMarkerAlt} /></span>
                    <strong>Address</strong>
                  </div>
                  <p>6 Purushottam apartment, 18 Shilavihar colony, Erandwane Pune - 411 038 Maharashtra </p>
                </div>
                <div className="footer-inner">
                  <div className="footer-inner-cont">
                    <span><FontAwesomeIcon icon={faPhoneAlt} /></span>
                    <strong>Contact</strong>
                  </div>
                  <p><a href="tel:+919823256524">91+ 9823256524</a></p>
                </div>
                <div className="footer-inner">
                  <div className="footer-inner-cont">
                    <span><FontAwesomeIcon icon={faEnvelope} /></span>
                    <strong>Email</strong>
                  </div>
                  <p><a href="mailto:bhasa@drashta.co.in">bhasa@drashta.co.in</a></p>
                </div>
              </div>
            </Col>
          </Row>
          <Row>
            <Col sm={12}>
              <div className="footer-bottom">
                <div className="footer-social-icons">
                  <a href="" target='_blank'><FontAwesomeIcon icon={faFacebookF} /></a>
                  <a href="" target='_blank'><FontAwesomeIcon icon={faXTwitter} /></a>
                  <a href="" target='_blank'><FontAwesomeIcon icon={faInstagramSquare} /></a>
                  <a href="" target='_blank'><FontAwesomeIcon icon={faLinkedinIn} /></a>
                  <a href="" target='_blank'><FontAwesomeIcon icon={faYoutube} /></a>
                </div>
                <div className="footer-copyright">
                  <span>Copyright © 2024 bhasa@drashta.co.in | All Rights Reserved.</span>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </footer>
    </React.Fragment>
  )
}

export default Footer