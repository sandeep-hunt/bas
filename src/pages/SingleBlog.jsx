import React, { useEffect, useState } from 'react'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import { Card, Col, Container, Row, Button } from 'react-bootstrap'
import BlogImg from '../assets/images/msic/blogImg.png'
import Profile from '../assets/images/msic/profile.png'
import Blogslid1 from '../assets/images/msic/blogslid1.png'
import Blogslid2 from '../assets/images/msic/blogslid2.png'
import Blogslid3 from '../assets/images/msic/blogslid3.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link, useParams } from 'react-router-dom'
import { faFacebookF, faXTwitter, faInstagramSquare, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import axios from 'axios'
import DOMPurify from 'dompurify';

const SingleBlog = () => {

    const { slug } = useParams();
    const [blog, setblog] = useState('');

    useEffect(() => {
        window.scrollTo(0, 0);
        const fetchData = async () => {
            try {
                const response = await axios.get(import.meta.env.VITE_BACKEND_API + 'fetch/blogBySlug/' + slug);
                setblog(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    const getDayWithSuffix = (day) => {
        if (day > 3 && day < 21) return `${day}th`; // Special case for 11th to 13th
        switch (day % 10) {
            case 1: return `${day}st`;
            case 2: return `${day}nd`;
            case 3: return `${day}rd`;
            default: return `${day}th`;
        }
    };

    return (
        <React.Fragment>
            <Header />
            <div className="single-post-head blog" style={{ backgroundImage: `url(${import.meta.env.VITE_BACKEND_API + blog.blog_image})` }}>
                <Container fluid className='single-post-head-cont h-100'>
                    <div className="single-post-hbi">
                        <div className="sphbitp">
                            <h1 className='text-white'>{blog.blog_title}</h1>
                        </div>
                        <div className="sphbibtm">
                            <div className="post-meta">
                                <p className="post-meta-inner">
                                    <span className='subHdng text-white'><img src={Profile} className='img-fluid' />&nbsp;&nbsp;{blog.full_name}</span>
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
                                <span class="date">
                                    {getDayWithSuffix(new Date(blog.created_at).getDate())}&nbsp;
                                    {new Date(blog.created_at).toLocaleString('default', { month: 'long' })}&nbsp;
                                    {new Date(blog.created_at).getFullYear()}
                                </span>
                                <span class="separator"></span>
                                <span class="time">4 minutes</span>
                            </div>
                        </div>
                        <div className="single-post-content" dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(blog.blog_content) }} />
                        <div className="posts-container single-post">
                            <div className="posts-header">
                                <h3>Related Blog Posts</h3>
                            </div>
                            <Row>
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