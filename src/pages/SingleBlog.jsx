import React, { useEffect } from 'react'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import { Card, Col, Container, Row, Button } from 'react-bootstrap'
import BlogImg from '../assets/images/msic/blogImg.png'
import Profile from '../assets/images/msic/profile.png'
import Blogslid1 from '../assets/images/msic/blogslid1.png'
import Blogslid2 from '../assets/images/msic/blogslid2.png'
import Blogslid3 from '../assets/images/msic/blogslid3.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'
import { faFacebookF, faXTwitter, faInstagramSquare, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'

const SingleBlog = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <React.Fragment>
            <Header />
            <div className="single-post-head blog" style={{ backgroundImage: `url(${BlogImg})` }}>
                <Container fluid className='single-post-head-cont h-100'>
                    <div className="single-post-hbi">
                        <div className="sphbitp">
                            <h1 className='text-white'>Teaching as a Passion, Not Just a Profession: The Vision of Bharata Arsheya Sansthan</h1>
                        </div>
                        <div className="sphbibtm">
                            <div className="post-meta">
                                <p className="post-meta-inner">
                                    <span className='subHdng text-white'><img src={Profile} className='img-fluid' />&nbsp;&nbsp;Subroto Roy</span>
                                    <span className='subHdng text-white'>7 min. 159 reads</span>
                                </p>
                            </div>
                            <div className="single-post-social-icons">
                                <a href="" target='_blank'><FontAwesomeIcon icon={faFacebookF} /></a>
                                <a href="" target='_blank'><FontAwesomeIcon icon={faXTwitter} /></a>
                                <a href="" target='_blank'><FontAwesomeIcon icon={faInstagramSquare} /></a>
                                <a href="" target='_blank'><FontAwesomeIcon icon={faLinkedinIn} /></a>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
            <Container fluid>
                <div className="single-post-container single-blog">
                    <div className="single-post-body">
                        <div className="single-post-inner">
                            <div className="single-post-date">
                                <span class="date">08.08.2021</span>
                                <span class="separator"></span>
                                <span class="time">4 minutes</span>
                            </div>
                        </div>
                        <div className="single-post-content">
                            <p>At **Bharata Arsheya Sansthan**, teaching transcends beyond the boundaries of a mere profession; it is a deep-rooted passion. This approach has naturally drawn countless learners seeking authentic wisdom and meaningful guidance. When teaching is driven by passion, it creates an environment where education becomes transformative, not transactional.</p>
                            <p>For the Sansthan, education, or Siksha, is not just about imparting knowledge—it is about **seva**, or selfless service. By treating teaching as a form of seva, the institution upholds the ancient tradition of learning as a sacred exchange, where both teacher and student engage in a process that nurtures the spirit. This service-oriented approach ensures that learners are drawn toward the teachings, not because they have to, but because they feel a genuine connection to the wisdom being offered.</p>
                            <h4>Siksha as Seva: A Timeless Tradition</h4>
                            <p>In the Indian Vedic tradition, education has always been viewed as **seva**—a selfless act of giving and receiving knowledge that is meant to uplift the individual and society. **Bharata Arsheya Sansthan** embraces this tradition by promoting the idea that education is not a sector to be commercialized but a sacred duty that brings out the best in both the teacher and the learner.</p>
                            <p>This philosophy nurtures a space where learners feel deeply connected to their studies. They are not just participants in a system but seekers of higher wisdom, gravitating toward the Sansthan’s unique approach. The result is a dynamic, engaged community of students who view education as an integral part of their spiritual and intellectual growth.</p>
                            <h4>The Power of Passion-Driven Teaching</h4>
                            <p>When teaching is fueled by passion, the learning experience becomes more engaging and impactful. The educators at Bharata Arsheya Sansthan, led by this philosophy, are not just imparting information; they are lighting the way for learners to explore their own potential. This enthusiasm fosters a love for learning, ensuring that students remain motivated and invested in their journey of self-discovery.</p>
                            <p>Passionate teaching has the power to inspire and transform. When learners sense that their mentoh3rs are deeply committed to their growth, they are naturally inclined to engage fully, eager to absorb and apply the knowledge they receive. This ensures not only academic success but also personal and spiritual development.</p>
                            <h4>Conclusion: A Call to Learn Through Seva</h4>
                            <p>At Bharata Arsheya Sansthan, education is a mission driven by passion and rooted in the ethos of seva. This dedication to Siksha as Seva attracts learners who are not just seeking education but a meaningful connection with their inner self. It is this timeless approach that sets the Sansthan apart, creating a learning environment where students and teachers embark on a shared journey of growth, wisdom, and service.</p>
                        </div>

                        <div className="posts-container single-post">
                            <div className="posts-header">
                                <h3>Related Blog Posts</h3>
                            </div>
                            <Row xs={1} md={3} className="g-4">
                                <Col>
                                    <Card>
                                        <Card.Img variant="top" src={Blogslid1} />
                                        <Card.Body>
                                            <div className="posts-body-header">
                                                <div className="posts-head-left">
                                                    <img src={Profile} className='img-fluid' alt="" />
                                                    <div className="posts-head-inner-text">
                                                        <h6 className='text-main mb-0 text-bold'>Subroto Roy</h6>
                                                        <span className='subHdng'>20thMarch, 2024</span>
                                                    </div>
                                                </div>
                                                <div className="posts-head-right">
                                                    <span className='category-pill'>Music</span>
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
                                        <Card.Img variant="top" src={Blogslid2} />
                                        <Card.Body>
                                            <div className="posts-body-header">
                                                <div className="posts-head-left">
                                                    <img src={Profile} className='img-fluid' alt="" />
                                                    <div className="posts-head-inner-text">
                                                        <h6 className='text-main mb-0 text-bold'>Subroto Roy</h6>
                                                        <span className='subHdng'>20thMarch, 2024</span>
                                                    </div>
                                                </div>
                                                <div className="posts-head-right">
                                                    <span className='category-pill'>Music</span>
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
                                        <Card.Img variant="top" src={Blogslid3} />
                                        <Card.Body>
                                            <div className="posts-body-header">
                                                <div className="posts-head-left">
                                                    <img src={Profile} className='img-fluid' alt="" />
                                                    <div className="posts-head-inner-text">
                                                        <h6 className='text-main mb-0 text-bold'>Subroto Roy</h6>
                                                        <span className='subHdng'>20thMarch, 2024</span>
                                                    </div>
                                                </div>
                                                <div className="posts-head-right">
                                                    <span className='category-pill'>Music</span>
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
                    </div>
                </div>
            </Container>
            <Footer />
        </React.Fragment>
    )
}

export default SingleBlog