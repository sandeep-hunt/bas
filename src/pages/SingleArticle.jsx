import React, {useEffect} from 'react'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import { Card, Col, Container, Row, Button } from 'react-bootstrap'
import Article1 from '../assets/images/msic/article1.png'
import Profile from '../assets/images/msic/profile.png'
import Blog1 from '../assets/images/msic/blog1.png'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faXTwitter, faInstagramSquare, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'

const SingleArticle = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <React.Fragment>
      <Header />
      <Container fluid>
        <div className="single-post-container">
          <div className="single-post-head">
            <Row className='align-items-center'>
              <Col sm={12} md={8}>
                <h1>FOCALISATION IN VEDIC & MODERN DAY
                  DHRUPAD VOCAL MUSIC STORIES</h1>
                <div className="post-meta">
                  <p className="post-meta-inner">
                    <span className='subHdng'><img src={Profile} className='img-fluid' />&nbsp;&nbsp;Subroto Roy</span>
                    <span className='subHdng'>7 min. 159 reads</span>
                  </p>
                </div>
              </Col>
              <Col sm={12} md={4} className='d-flex align-items-center justify-content-center'>
                <img src={Article1} className='img-fluid' alt="" />
              </Col>
            </Row>
          </div>
          <div className="single-post-body">
            <div className="single-post-inner">
              <div className="single-post-date">
                <span class="date">08.08.2021</span>
                <span class="separator"></span>
                <span class="time">4 minutes</span>
              </div>
              <div className="single-post-social-icons">
                <a href="" target='_blank'><FontAwesomeIcon icon={faFacebookF} /></a>
                <a href="" target='_blank'><FontAwesomeIcon icon={faXTwitter} /></a>
                <a href="" target='_blank'><FontAwesomeIcon icon={faInstagramSquare} /></a>
                <a href="" target='_blank'><FontAwesomeIcon icon={faLinkedinIn} /></a>
              </div>
            </div>
            <div className="single-post-content">
              <strong>Abstract</strong>
              <p>Narratives we hear play a crucial role in shaping our understanding of civilizational history by connecting dots to form a cohesive story. The narrative strategies surrounding Indian heritage over the past thousand years, however, require revisiting as emerging counter-narratives are increasingly gaining significance. Globalized narratives, which have become foundational to newer interpretations, often cause Indians to feel estranged, misunderstood, or even demoralized. This problem intensifies when local storytellers adopt these globalized narratives, mistaking narrators for the original sources of knowledge.</p>
              <p>Such misunderstandings can lead to "focalization"—a process by which perspectives are altered or skewed—resulting in the miscommunication of key aspects of Indian culture. By examining ancient Indian traditions such as **Sām Veda** (Vedic chanting, with an unknown origin date) and **Dhrupad** (an ancient form of classical Indian music, likely originating around 300 BC and still practiced today), this article explores how these cultural treasures have been represented in newer globalized narratives. It highlights the focalization that arises from these narratives and underscores the need to address these misconceptions in order to preserve the true essence of Indian heritage.</p>
              <p><strong>Keywords: </strong>Narrative Strategies, Focalisation, Khayāl, Dhrupad, Sāma Gāna</p>
              <p><strong>Link: </strong><a href="#" target='_blank'>https://imgurl.com/images/nature_image.pdf</a></p>
            </div>

            <div className="posts-container single-post">
              <div className="posts-header">
                <h3>Related Article Posts</h3>
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
                      <h4>FOCALISATION IN VEDIC & MODERN DAY DHRUPAD VOCAL MUSIC STORIES</h4>
                      <p className='paragraph3'>
                        Narratives we hear play a crucial role in shaping our understanding of civilizational history by connecting dots to form a cohesive story.....
                      </p>
                      <div className="d-flex justify-content-end mt-4">
                        <Link to="/" className="btn-link">Read More&nbsp;&#8594;</Link>
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
                      <h4>FOCALISATION IN VEDIC & MODERN DAY DHRUPAD VOCAL MUSIC STORIES</h4>
                      <p className='paragraph3'>
                        Narratives we hear play a crucial role in shaping our understanding of civilizational history by connecting dots to form a cohesive story.....
                      </p>
                      <div className="d-flex justify-content-end mt-4">
                        <Link to="/" className="btn-link">Read More&nbsp;&#8594;</Link>
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
                      <h4>FOCALISATION IN VEDIC & MODERN DAY DHRUPAD VOCAL MUSIC STORIES</h4>
                      <p className='paragraph3'>
                        Narratives we hear play a crucial role in shaping our understanding of civilizational history by connecting dots to form a cohesive story.....
                      </p>
                      <div className="d-flex justify-content-end mt-4">
                        <Link to="/" className="btn-link">Read More&nbsp;&#8594;</Link>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </div>
          </div>
        </div>
      </Container>
      <Footer />
    </React.Fragment>
  )
}

export default SingleArticle