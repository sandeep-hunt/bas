import React, { useEffect, useState } from 'react'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import { Card, Col, Container, Row, Button } from 'react-bootstrap'
import Profile from '../assets/images/msic/profile.png'
import { Link, useParams } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faXTwitter, faInstagramSquare, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { Helmet } from 'react-helmet-async'
import axios from 'axios'
import DOMPurify from 'dompurify'

const SingleArticle = () => {

  const { slug } = useParams();
  const [article, setarticle] = useState('');
  const [settings, setsettings] = useState('');
  const [randomArticles, setRandomArticles] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);
    const fetchData = async () => {
      try {
        // Fetch the main article by slug (you can keep this as is)
        const response = await axios.get(import.meta.env.VITE_BACKEND_API + 'fetch/articleBySlug/' + slug);
        setarticle(response.data);

        // Fetch the settings
        const fetchSettings = await axios.get(import.meta.env.VITE_BACKEND_API + 'fetch/settings');
        setsettings(fetchSettings.data[0]);

        // Fetch 3 random articles
        const randomResponse = await axios.get(`${import.meta.env.VITE_BACKEND_API}fetch/randArticle`);
        setRandomArticles(randomResponse.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [slug]);

  const getDayWithSuffix = (day) => {
    if (day > 3 && day < 21) return `${day}th`; // Special case for 11th to 13th
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
  const readingTime = article.article_content ? calculateReadingTime(article.article_content) : 0;

  //Multiple attachmets in clear json format
  const attachmentURLs = article.article_attachment ? JSON.parse(article.article_attachment) : [];

  //Current page url
  const articleURL = window.location.href;

  return (
    <React.Fragment>
      <Helmet>
        <title>{`${settings.site_title} | ${article.article_page_title || "India's Farm Utility ROVRs, Off Road Utility Vehicles, UTV, ATV"}`}</title>
        <meta name="description" content={article.article_page_desc} />
        <meta name="keywords" content={article.article_page_keywords}></meta>
      </Helmet>
      <Header />
      <Container fluid>
        <div className="single-post-container">
          <div className="single-post-head">
            <Row className='align-items-center'>
              <Col sm={12} md={8}>
                <h1>{article.article_title}</h1>
                <div className="post-meta">
                  <p className="post-meta-inner">
                    <span className='subHdng'><img src={Profile} className='img-fluid' />&nbsp;&nbsp;{article.full_name}</span>
                  </p>
                </div>
              </Col>
              <Col sm={12} md={4} className='d-flex align-items-center justify-content-center'>
                <img src={import.meta.env.VITE_BACKEND_API + article.article_image} className='img-fluid' alt="" />
              </Col>
            </Row>
          </div>
          <div className="single-post-body">
            <div className="single-post-inner">
              <div className="single-post-date">
                <span class="date">{getDayWithSuffix(new Date(article.created_at).getDate())}&nbsp;
                  {new Date(article.created_at).toLocaleString('default', { month: 'long' })}&nbsp;
                  {new Date(article.created_at).getFullYear()}
                </span>
                <span class="separator"></span>
                <span class="time">{readingTime} minutes</span>
              </div>
              <div className="single-post-social-icons">
                <a href={`https://www.facebook.com/sharer/sharer.php?u=${articleURL}`} target='_blank'><FontAwesomeIcon icon={faFacebookF} /></a>
                <a href={`https://twitter.com/intent/tweet?url=${articleURL}`} target='_blank'><FontAwesomeIcon icon={faXTwitter} /></a>
                <a href={`https://www.instagram.com/?url=${articleURL}`} target='_blank'><FontAwesomeIcon icon={faInstagramSquare} /></a>
                <a href={`https://www.linkedin.com/sharing/share-offsite/?url=${articleURL}`} target='_blank'><FontAwesomeIcon icon={faLinkedinIn} /></a>
              </div>
            </div>
            <div className="article-single-post-cont">
              <div className="single-post-content" dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(article.article_content) }} />
              <p><strong>Keywords: </strong>{article.article_page_keywords}</p>
              {attachmentURLs.length > 0 && (
                <p><strong>Attachments:</strong>&nbsp;
                  {attachmentURLs.map((url, index) => (
                    <span key={index}>
                      <strong><u><a href={import.meta.env.VITE_BACKEND_API + url} target='_blank' rel='noopener noreferrer'>Download Attachment {index + 1}</a></u></strong>,&nbsp;
                    </span>
                  ))}
                </p>
              )}

            </div>

            <div className="posts-container single-post">
              <div className="posts-header">
                <h3>Related Article Posts</h3>
              </div>
              <Row>
                {randomArticles.length > 0 ? (
                  randomArticles.map((article) => (
                    <Col xs={12} md={6} lg={4}>
                      <Card className="boxShadowHovrBtm">
                        <Card.Img variant="top" src={import.meta.env.VITE_BACKEND_API + article.article_thumbnail} />
                        <Card.Body>
                          <div className="posts-body-header">
                            <div className="posts-head-left">
                              <img src={Profile} className='img-fluid' alt="" />
                              <div className="posts-head-inner-text">
                                <h6 className='text-main mb-0 text-bold'>{article.full_name}</h6>
                                <span className='subHdng'>
                                  {getDayWithSuffix(new Date(article.created_at).getDate())}&nbsp;
                                  {new Date(article.created_at).toLocaleString('default', { month: 'long' })}&nbsp;
                                  {new Date(article.created_at).getFullYear()}
                                </span>
                              </div>
                            </div>
                          </div>
                          <h4>{article.article_title.substring(0, 26)}{article.article_title.length > 26 ? '...' : ''}</h4>
                          <p className='paragraph3'>{article.article_shortDesc.substring(0, 160)}{article.article_shortDesc.length > 160 ? '...' : ''}</p>
                          <div className="d-flex justify-content-end mt-4">
                            <Link to={"/articles/"+article.article_slug} className="btn-link">Read More&nbsp;&#8594;</Link>
                          </div>
                        </Card.Body>
                      </Card>
                    </Col>
                  ))
                ) : (
                  <p>No random articles found.</p>
                )}
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