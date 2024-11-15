import React, { useEffect, useState } from 'react'
import './Footer.css'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons'
import { faFacebookF,faXTwitter,faInstagramSquare,faLinkedinIn,faYoutube } from '@fortawesome/free-brands-svg-icons'
import axios from 'axios'

const Footer = () => {
  const [settings, setsettings] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch the settings
        const fetchSettings = await axios.get(import.meta.env.VITE_BACKEND_API + 'fetch/settings');
        setsettings(fetchSettings.data[0]);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  },[])

  return (
    <React.Fragment>
      <footer>
        <Container>
          <Row>
            <Col sm={12} md={12} lg={3}>
              <div className="footer-content">
                <img src={import.meta.env.VITE_BACKEND_API + settings.site_secondary_logo} alt="logo" />
                <div>
                  <Link to="/donate" className='btn-mainLink'>&#x2764;&nbsp;Donate</Link>
                </div>
              </div>
            </Col>
            <Col sm={12} md={6} lg={3}>
              <div className="footer-content1">
                <h4 className='footer-inner-cont'>Quick Links</h4>
                <ul>
                  <li><Link to="/">Home</Link></li>
                  <li><Link to="/gallery">Gallery</Link></li>
                  <li><Link to="/events">Events</Link></li>
                  <li><Link to="/blogs&articles">Blogs & Articles</Link></li>
                  <li><Link to="/join-us">Join Us</Link></li>
                  <li><Link to="/about-us">About Us</Link></li>
                  <li><Link to="/get-receipt">Get Receipt</Link></li>
                </ul>
              </div>
            </Col>
            <Col sm={12} md={6} lg={3}>
              <div className="footer-content1">
                <h4 className='footer-inner-cont'>Projects</h4>
                <ul>
                  <li><Link to="/dhrupad_gurukul">Dhrupad Gurukul</Link></li>
                  <li><Link to="/samaveda_gurukul">Samaveda Gurukul</Link></li>
                  <li><Link to="/girvaan_bhasa">Girvaan Bhasa</Link></li>
                  <li><Link to="/jyotisha_gurkul">Jyotisha Gurukul</Link></li>
                </ul>
              </div>
            </Col>
            <Col sm={12}  md={12} lg={3}>
              <div className="footer-content1">
                <div className="footer-inner">
                  <div className="footer-inner-cont">
                    <span><FontAwesomeIcon icon={faMapMarkerAlt} /></span>
                    <strong>Address</strong>
                  </div>
                  <p>{settings.contact_address}</p>
                </div>
                <div className="footer-inner">
                  <div className="footer-inner-cont">
                    <span><FontAwesomeIcon icon={faPhoneAlt} /></span>
                    <strong>Contact</strong>
                  </div>
                  <p><a href={`tel:${settings.contact_mobile}`}>{settings.contact_mobile}</a></p>
                </div>
                <div className="footer-inner">
                  <div className="footer-inner-cont">
                    <span><FontAwesomeIcon icon={faEnvelope} /></span>
                    <strong>Email</strong>
                  </div>
                  <p><a href={`mailto:${settings.contact_mobile}`}>{settings.contact_email}</a></p>
                </div>
              </div>
            </Col>
          </Row>
          <Row>
            <Col sm={12}>
              <div className="footer-bottom">
                <div className="footer-social-icons">
                  <a href={settings.facebook_url} target='_blank'><FontAwesomeIcon icon={faFacebookF} /></a>
                  <a href={settings.twitter_url} target='_blank'><FontAwesomeIcon icon={faXTwitter} /></a>
                  <a href={settings.insta_url} target='_blank'><FontAwesomeIcon icon={faInstagramSquare} /></a>
                  <a href={settings.linkedin_url} target='_blank'><FontAwesomeIcon icon={faLinkedinIn} /></a>
                  <a href={settings.youtube_url} target='_blank'><FontAwesomeIcon icon={faYoutube} /></a>
                </div>
                <div className="footer-copyright">
                  <span>{settings.site_copyright}</span>
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