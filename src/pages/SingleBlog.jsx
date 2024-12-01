import React, { useEffect, useState } from 'react'
import { Card, Col, Container, Row, Button } from 'react-bootstrap'
import Profile from '../assets/images/msic/profile.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link, useParams } from 'react-router-dom'
import { faFacebookF, faXTwitter, faInstagramSquare, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import axios from 'axios'
import DOMPurify from 'dompurify'
import { Helmet } from 'react-helmet-async'

const SingleBlog = ({ settings }) => {

    const { slug } = useParams();
    const [blog, setblog] = useState('');
    const [relatedBlogs, setrelatedBlogs] = useState([]);

    useEffect(() => {
        window.scrollTo(0, 0);

        const fetchData = async () => {
            try {
                // Fetch blog by slug
                const response = await axios.get(`${import.meta.env.VITE_BACKEND_API}fetch/blogBySlug/${slug}`);
                setblog(response.data);

                // Fetch related blogs by slug
                const relatedResponse = await axios.get(`${import.meta.env.VITE_BACKEND_API}fetch/relatedBlog/${slug}`);
                setrelatedBlogs(relatedResponse.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, [slug]); // Add slug as a dependency

    const getDayWithSuffix = (day) => {
        if (day > 3 && day < 21) return `${day}th`;
        switch (day % 10) {
            case 1: return `${day}st`;
            case 2: return `${day}nd`;
            case 3: return `${day}rd`;
            default: return `${day}th`;
        }
    };

    // Function to extract text from HTML
    const extractTextFromHTML = (html) => {
        const doc = new DOMParser().parseFromString(html, 'text/html');
        return doc.body.textContent || "";  // Get text content from the parsed HTML
    };

    // Function to calculate reading time
    const calculateReadingTime = (htmlContent) => {
        const plainText = extractTextFromHTML(htmlContent);
        const wordCount = plainText.split(/\s+/).filter(word => word.length > 0).length;
        const wordsPerMinute = 50;  // Average reading speed
        const minutes = Math.ceil(wordCount / wordsPerMinute);
        return minutes;
    };

    // Calculate reading time for the article content
    const readingTime = blog.blog_content ? calculateReadingTime(blog.blog_content) : 0;

    const articleURL = window.location.href;

    return (
        <React.Fragment>
            <Helmet>
                <title>{`${settings.site_title} | ${blog.blog_page_title}`}</title>
                <meta name="description" content={blog.blog_page_desc} />
                <meta name="keywords" content={blog.blog_page_keywords}></meta>
            </Helmet>

            <div className="single-post-head blog" style={{ background: `linear-gradient(0deg, rgba(0, 0, 0, 0.25) 0%, rgba(0, 0, 0, 0.25) 100%), linear-gradient(180deg, rgba(0, 0, 0, 0.00) 46.86%, rgba(0, 0, 0, 0.15) 100%), url(${import.meta.env.VITE_BACKEND_API + blog.blog_image}) lightgray 50% / cover no-repeat` }}>
                <Container fluid className='single-post-head-cont h-100'>
                    <div className="single-post-hbi">
                        <div className="sphbitp">
                            <div>
                                <span className='category-pill1'>{blog.category_name}</span>
                            </div>
                            <h1 className='text-white'>{blog.blog_title}</h1>
                        </div>
                        <div className="sphbibtm">
                            <div className="post-meta">
                                <p className="post-meta-inner">
                                    <span className='subHdng text-white'><img src={import.meta.env.VITE_BACKEND_API + blog.user_profile} alt="/" className="rounded-circle" width={48} height={48} />&nbsp;&nbsp;{blog.full_name}</span>
                                </p>
                            </div>
                            <div className="single-post-social-icons">
                                <a href={`https://www.facebook.com/sharer/sharer.php?u=${articleURL}`} target='_blank'><FontAwesomeIcon icon={faFacebookF} /></a>
                                <a href={`https://twitter.com/intent/tweet?url=${articleURL}`} target='_blank'><FontAwesomeIcon icon={faXTwitter} /></a>
                                <a href={`https://www.instagram.com/?url=${articleURL}`} target='_blank'><FontAwesomeIcon icon={faInstagramSquare} /></a>
                                <a href={`https://www.linkedin.com/sharing/share-offsite/?url=${articleURL}`} target='_blank'><FontAwesomeIcon icon={faLinkedinIn} /></a>
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
                                <span className="date">
                                    {getDayWithSuffix(new Date(blog.created_at).getDate())}&nbsp;
                                    {new Date(blog.created_at).toLocaleString('default', { month: 'long' })}&nbsp;
                                    {new Date(blog.created_at).getFullYear()}
                                </span>
                                <span className="separator"></span>
                                <span className="time">{readingTime} minutes</span>
                            </div>
                        </div>
                        <div className="single-post-content" dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(blog.blog_content) }} />
                        <div className="posts-container single-post">
                            <div className="posts-header">
                                <h3>Related Blog Posts</h3>
                            </div>
                            <Row>
                                {relatedBlogs.length > 0 ? (
                                    relatedBlogs.map((relatedBlog) => (
                                        <Col xs={12} md={6} lg={4} key={relatedBlog.blog_id}>
                                            <Card className="boxShadowHovrBtm">
                                                <Card.Img variant="top" src={import.meta.env.VITE_BACKEND_API + relatedBlog.blog_thumbnail} />
                                                <Card.Body>
                                                    <div className="posts-body-header">
                                                        <div className="posts-head-left">
                                                            <img src={Profile} className='img-fluid' alt="" />
                                                            <div className="posts-head-inner-text">
                                                                <h6 className='text-main mb-0 text-bold'>{relatedBlog.full_name}</h6>
                                                                <span className='subHdng'>
                                                                    {getDayWithSuffix(new Date(relatedBlog.created_at).getDate())}&nbsp;
                                                                    {new Date(relatedBlog.created_at).toLocaleString('default', { month: 'long' })}&nbsp;
                                                                    {new Date(relatedBlog.created_at).getFullYear()}
                                                                </span>
                                                            </div>
                                                        </div>
                                                        <div className="posts-head-right">
                                                            <span className='category-pill'>{relatedBlog.category_name}</span>
                                                        </div>
                                                    </div>
                                                    <div className="posts-body-content">
                                                        <h4>{relatedBlog.blog_title.substring(0, 26)}{relatedBlog.blog_title.length > 26 ? '...' : ''}</h4>
                                                        <p className='paragraph3'>{relatedBlog.blog_shortDesc.substring(0, 160)}{relatedBlog.blog_shortDesc.length > 160 ? '...' : ''}</p>
                                                        <div className="d-flex justify-content-end">
                                                            <Link to={`/blogs/${relatedBlog.blog_slug}`} className="btn-link">Read More&nbsp;&#8594;</Link>
                                                        </div>
                                                    </div>
                                                </Card.Body>
                                            </Card>
                                        </Col>
                                    ))
                                ) : (
                                    <p>No related articles found.</p>
                                )}
                            </Row>
                        </div>
                    </div>
                </div>
            </Container>
        </React.Fragment>
    )
}

export default SingleBlog;
