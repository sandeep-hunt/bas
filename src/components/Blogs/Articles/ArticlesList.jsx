import React from 'react'
import { Card, Col, Row, Button } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faClock } from '@fortawesome/free-solid-svg-icons'
import Profile from '../../../assets/images/msic/profile.png'
import { Link } from 'react-router-dom'
// import Breadcrumb from 'react-bootstrap/Breadcrumb'
import './ArticlesList.css'

const ArticlesList = () => {
    return (
        <React.Fragment>
            <div className="posts-container article-list">
                {/* <Breadcrumb>
                    <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
                    <Breadcrumb.Item active>Articles</Breadcrumb.Item>
                </Breadcrumb> */}
                <Row xs={1} className="g-4">
                    <Col>
                        <Card>
                            <Row>
                                <Col xs={12} md={4}>
                                    <Card.Img src="https://thumbs.dreamstime.com/b/rendering-surreal-scene-single-tree-fantastic-desert-dune-seasonal-landscape-environment-panoramic-futuristic-blue-332308949.jpg" className='post-thumb' />
                                </Col>
                                <Col xs={12} md={8}>
                                    <Card.Body>
                                        <div className="item-content">
                                            <h3><Link className='text-main' to='/single-article'>A Tryst With The Divine Mother</Link></h3>
                                            <div className="post-meta">
                                                <div className="post-meta-inner">
                                                    <img src={Profile} className='img-fluid' alt="" />
                                                    <div className="post-meta-inner-text">
                                                        <h6 className='text-main mb-0 text-bold'>Subroto Roy</h6>
                                                        <span className='subHdng'>20thMarch, 2024</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="item-inner-content">
                                                <p className="text-main1">Mehsana- Gujarat Introduction: Malhar Gupte, a Class XII student student living in Mehsana  Gujarat Introduction: Malhar Gupte, a Class XII student student living in Mehsana Gujarat Introduction: Malhar Gupte, a Class XII student student living in Mehsana Gujarat Introduction: Malhar Gupte, a Class XII student student living a Class ...
                                                </p>
                                                <div className="d-flex justify-content-start">
                                                    <Link to="/" className="btn-link">Read More&nbsp;&#8594;</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </Card.Body>
                                </Col>
                            </Row>
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            <Row>
                                <Col xs={12} md={4}>
                                    <Card.Img src="https://i0.wp.com/picjumbo.com/wp-content/uploads/magical-spring-forest-scenery-during-morning-breeze-free-photo.jpg?w=600&quality=80" className='post-thumb' />
                                </Col>
                                <Col xs={12} md={8}>
                                    <Card.Body>
                                        <div className="item-content">
                                            <h3><Link className='text-main' to='/single-blog'>A Tryst With The Divine Mother</Link></h3>
                                            <div className="post-meta">
                                                <div className="post-meta-inner">
                                                    <img src={Profile} className='img-fluid' alt="" />
                                                    <div className="post-meta-inner-text">
                                                        <h6 className='text-main mb-0 text-bold'>Subroto Roy</h6>
                                                        <span className='subHdng'>20thMarch, 2024</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="item-inner-content">
                                                <p className="text-main1">Mehsana- Gujarat Introduction: Malhar Gupte, a Class XII student student living in Mehsana  Gujarat Introduction: Malhar Gupte, a Class XII student student living in Mehsana Gujarat Introduction: Malhar Gupte, a Class XII student student living in Mehsana Gujarat Introduction: Malhar Gupte, a Class XII student student living a Class ...
                                                </p>
                                                <div className="d-flex justify-content-start">
                                                    <Link to="/" className="btn-link">Read More&nbsp;&#8594;</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </Card.Body>
                                </Col>
                            </Row>
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            <Row>
                                <Col xs={12} md={4}>
                                    <Card.Img src="https://img.freepik.com/free-photo/colorful-design-with-spiral-design_188544-9588.jpg" className='post-thumb' />
                                </Col>
                                <Col xs={12} md={8}>
                                    <Card.Body>
                                        <div className="item-content">
                                            <h3><Link className='text-main' to='/single-blog'>A Tryst With The Divine Mother</Link></h3>
                                            <div className="post-meta">
                                                <div className="post-meta-inner">
                                                    <img src={Profile} className='img-fluid' alt="" />
                                                    <div className="post-meta-inner-text">
                                                        <h6 className='text-main mb-0 text-bold'>Subroto Roy</h6>
                                                        <span className='subHdng'>20thMarch, 2024</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="item-inner-content">
                                                <p className="text-main1">Mehsana- Gujarat Introduction: Malhar Gupte, a Class XII student student living in Mehsana  Gujarat Introduction: Malhar Gupte, a Class XII student student living in Mehsana Gujarat Introduction: Malhar Gupte, a Class XII student student living in Mehsana Gujarat Introduction: Malhar Gupte, a Class XII student student living a Class ...
                                                </p>
                                                <div className="d-flex justify-content-start">
                                                    <Link to="/" className="btn-link">Read More&nbsp;&#8594;</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </Card.Body>
                                </Col>
                            </Row>
                        </Card>
                    </Col>
                </Row>
            </div>
        </React.Fragment>
    )
}

export default ArticlesList