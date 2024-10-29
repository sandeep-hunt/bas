import React from 'react'
import './RecentArticles.css'
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Blog1 from '../../../assets/images/msic/blog1.png'
import Profile from '../../../assets/images/msic/profile.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

const RecentArticles = () => {
  return (
    <React.Fragment>
      <div className="posts-container">
        <div className="posts-header">
          <h3 className='text-main text-bold'>Recent Article Posts</h3>
          <Link className='text-main' to="/articles">View All&nbsp;&nbsp;<FontAwesomeIcon icon={faArrowRight} /></Link>
        </div>
        <Row xs={1} md={3} className="g-4 mt-2">
          <Col>
            <Card>
              <Card.Img variant="top" src={Blog1} />
              <Card.Body>
                <div className="posts-body-header">
                  <div className="posts-head-left">
                    <img src={Profile} className='img-fluid' alt="" />
                    <div className="posts-head-inner-text">
                      <h6 className='text-main mb-0 text-bold'>Subroto Roy</h6>
                      <span className='subHdng'>20thMarch, 2024</span>
                    </div>
                  </div>
                </div>
                <div className="posts-body-content">
                  <h4>FOCALISATION IN VEDIC & MODERN DAY DHRUPAD VOCAL MUSIC STORIES</h4>
                  <p className='paragraph3'>
                    Narratives we hear play a crucial role in shaping our understanding of civilizational history by connecting dots to form a cohesive story.....
                  </p>
                  <div className="d-flex justify-content-end">
                    <Link to="/" className="btn-link">Read More&nbsp;&#8594;</Link>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Img variant="top" src={Blog1} />
              <Card.Body>
                <div className="posts-body-header">
                  <div className="posts-head-left">
                    <img src={Profile} className='img-fluid' alt="" />
                    <div className="posts-head-inner-text">
                      <h6 className='text-main mb-0 text-bold'>Subroto Roy</h6>
                      <span className='subHdng'>20thMarch, 2024</span>
                    </div>
                  </div>
                </div>
                <div className="posts-body-content">
                  <h4>FOCALISATION IN VEDIC & MODERN DAY DHRUPAD VOCAL MUSIC STORIES</h4>
                  <p className='paragraph3'>
                    Narratives we hear play a crucial role in shaping our understanding of civilizational history by connecting dots to form a cohesive story.....
                  </p>
                  <div className="d-flex justify-content-end">
                    <Link to="/" className="btn-link">Read More&nbsp;&#8594;</Link>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Img variant="top" src={Blog1} />
              <Card.Body>
                <div className="posts-body-header">
                  <div className="posts-head-left">
                    <img src={Profile} className='img-fluid' alt="" />
                    <div className="posts-head-inner-text">
                      <h6 className='text-main mb-0 text-bold'>Subroto Roy</h6>
                      <span className='subHdng'>20thMarch, 2024</span>
                    </div>
                  </div>
                </div>
                <div className="posts-body-content">
                  <h4>FOCALISATION IN VEDIC & MODERN DAY DHRUPAD VOCAL MUSIC STORIES</h4>
                  <p className='paragraph3'>
                    Narratives we hear play a crucial role in shaping our understanding of civilizational history by connecting dots to form a cohesive story.....
                  </p>
                  <div className="d-flex justify-content-end">
                    <Link to="/" className="btn-link">Read More&nbsp;&#8594;</Link>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
    </React.Fragment>
  )
}

export default RecentArticles