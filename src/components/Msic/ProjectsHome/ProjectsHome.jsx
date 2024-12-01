import React from 'react'
import './ProjectsHome.css'
import { Col, Row } from 'react-bootstrap'
import Pro_icon1 from '../../../assets/images/icons/pro_icon1.svg'
import Pro_icon2 from '../../../assets/images/icons/pro_icon2.svg'
import Pro_icon3 from '../../../assets/images/icons/pro_icon3.svg'
import Pro_icon4 from '../../../assets/images/icons/pro_icon4.svg'
import { Link } from 'react-router-dom'

const ProjectsHome = () => {
  return (
    <React.Fragment>
      <div className="projectshome-container">
        <h2 className='container-title projectHome'>Projects</h2>
        <div className="projectshome-inner">
          <Row>
            <Col sm={12} md={6} lg={3}>
              <Link to="/dhrupad_gurukul">
                <div className="projectshome-item h-100">
                  <h4 className='text-white'>Dhrupad Gurukul</h4>
                  <img src={Pro_icon1} className='projecthome-icons' alt="" />
                  <p className='text-white paragraph3'>Revitalising pristine Bhartiya Sangeet</p>
                </div>
              </Link>
            </Col>
            <Col sm={12} md={6} lg={3}>
              <Link to="/samaveda_gurukul">
                <div className="projectshome-item h-100">
                  <h4 className='text-white'>Sāmavéda Gurukul</h4>
                  <img src={Pro_icon2} className='projecthome-icons' alt="" />
                  <p className='text-white paragraph3'>Pre-historic Melodies & Wisdom</p>
                </div>
              </Link>
            </Col>
            <Col sm={12} md={6} lg={3}>
            <Link to="/girvaan_bhasa">
              <div className="projectshome-item h-100">
                <h4 className='text-white'>Gīrvāṇ Bhasa</h4>
                <img src={Pro_icon3} className='projecthome-icons' alt="" />
                <p className='text-white paragraph3'>A bridge to divinity</p>
              </div>
            </Link>
            </Col>
            <Col sm={12} md={6} lg={3}>
            <Link to="/jyotisha_gurkul">
              <div className="projectshome-item h-100">
                <h4 className='text-white'>Jyotiśa Gurukul</h4>
                <img src={Pro_icon4} className='projecthome-icons' alt="" />
                <p className='text-white paragraph3'>Eyes of the Véda-s</p>
              </div>
            </Link>
            </Col>

          </Row>
        </div>
      </div>
    </React.Fragment>
  )
}

export default ProjectsHome