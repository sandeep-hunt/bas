import React from 'react'
import './GalleryHome.css'
import Gallery1 from '../../../assets/images/gallery/home/1.png'
import Gallery2 from '../../../assets/images/gallery/home/2.png'
import Gallery3 from '../../../assets/images/gallery/home/3.png'
import Gallery4 from '../../../assets/images/gallery/home/4.png'
import Gallery5 from '../../../assets/images/gallery/home/5.png'
import Gallery6 from '../../../assets/images/gallery/home/6.png'
import Gallery7 from '../../../assets/images/gallery/home/7.png'
import Gallery8 from '../../../assets/images/gallery/home/8.png'
import { Row, Col } from 'react-bootstrap'

const GalleryHome = () => {
  return (
    <React.Fragment>
      <div className="galleryhome-container">
        <h2 className='container-title galleryHome'>Gallery</h2>
        <div className="galleryhome-inner">
          <Row>
            <Col sm={6} md={4} lg={3}>
            <img src={Gallery1} className='img-fluid' alt="" />
            </Col>
            <Col sm={6} md={4} lg={3}>
            <img src={Gallery3} className='img-fluid' alt="" />
            </Col>
            <Col sm={6} md={4} lg={3}>
            <img src={Gallery5} className='img-fluid' alt="" />
            </Col>
            <Col sm={6} md={4} lg={3}>
            <img src={Gallery7} className='img-fluid' alt="" />
            </Col>
            <Col sm={6} md={4} lg={3}>
            <img src={Gallery2} className='img-fluid' alt="" />
            </Col>
            <Col sm={6} md={4} lg={3}>
            <img src={Gallery4} className='img-fluid' alt="" />
            </Col>
            <Col sm={6} md={6} lg={3}>
            <img src={Gallery6} className='img-fluid' alt="" />
            </Col>
            <Col sm={6} md={6} lg={3}>
            <img src={Gallery8} className='img-fluid' alt="" />
            </Col>
          </Row>
        </div>
      </div>
    </React.Fragment>
  )
}

export default GalleryHome