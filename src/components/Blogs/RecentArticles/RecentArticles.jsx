import React, { useEffect, useState } from 'react';
import './RecentArticles.css'
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import axios from 'axios'; // Ensure axios is imported

const RecentArticles = () => {
  const [Articles, setArticles] = useState([]);
  const [limit, setLimit] = useState(3);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_BACKEND_API}fetch/getArticles?limit=${limit}`);
        setArticles(response.data);
      } catch (error) {
        console.error('Error fetching articles data:', error);
      }
    };

    fetchArticles(); // Call the fetch function
  }, [limit]);

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
      <div className="posts-container">
        <div className="posts-header">
          <h3 className='text-main text-bold'>Recent Article Posts</h3>
          <Link className='text-main' to="/articles">View All&nbsp;&nbsp;<FontAwesomeIcon icon={faArrowRight} /></Link>
        </div>
        <Row>

          {Articles.length > 0 ? (
            Articles.map((item, index) => (
              <Col xs={12} md={6} lg={4} key={index}>
                <Card>
                  <Card.Img variant="top" src={import.meta.env.VITE_BACKEND_API + item.article_thumbnail} />
                  <Card.Body>
                    <div className="posts-body-header">
                      <div className="posts-head-left">
                        <img src="https://i.imgur.com/6Q8s6JL.jpg" className='rounded-circle' width={48} height={48} alt="" />
                        <div className="posts-head-inner-text">
                          <h6 className='text-main mb-0 text-bold'>{item.full_name}</h6>
                          <span className='subHdng'>
                            {getDayWithSuffix(new Date(item.created_at).getDate())}&nbsp;
                            {new Date(item.created_at).toLocaleString('default', { month: 'long' })}&nbsp;
                            {new Date(item.created_at).getFullYear()}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="posts-body-content">
                      <h4>{item.article_title.substring(0, 26)}{item.article_title.length > 26 ? '...' : ''}</h4>
                      <p className='paragraph3'>{item.article_shortDesc.substring(0, 160)}{item.article_shortDesc.length > 160 ? '...' : ''}</p>
                      <div className="d-flex justify-content-end">
                        <Link to="/" className="btn-link">Read More&nbsp;&#8594;</Link>
                      </div>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))
          ) : (
            <p>No Articles available.</p>
          )}
        </Row>
      </div>
    </React.Fragment>
  )
}

export default RecentArticles