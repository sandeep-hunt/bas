import React, { useState, useEffect } from 'react';
import { Card, Col, Row, Button } from 'react-bootstrap'
import Profile from '../../../assets/images/msic/profile.png'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
// import Breadcrumb from 'react-bootstrap/Breadcrumb'
import './BlogsList.css'
import axios from 'axios';

const BlogsList = () => {

    const [Blogs, setBlogs] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [limit] = useState(5);  // Number of items per page

    useEffect(() => {
        window.scrollTo(0, 0);
        const fetchData = async () => {
            try {
                const response = await axios.get(import.meta.env.VITE_BACKEND_API + 'fetch/getBlogsList', {
                    params: {
                        page: currentPage,
                        limit: limit
                    }
                });
                setBlogs(response.data.items);
                setCurrentPage(response.data.currentPage);
                setTotalPages(response.data.totalPages);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, [currentPage, limit]);

    // Function to change page
    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    // Handle "Previous" and "Next" buttons
    const handlePreviousPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    // Helper function to render pagination numbers with dots
    const renderPageNumbers = () => {
        const pageNumbers = [];
        const ellipsis = <span key="ellipsis">.&nbsp;.&nbsp;.</span>;

        if (totalPages <= 6) {
            // Show all pages if there are 6 or fewer pages
            for (let i = 1; i <= totalPages; i++) {
                pageNumbers.push(
                    <button
                        key={i}
                        onClick={() => handlePageChange(i)}
                        className={currentPage === i ? 'active' : ''}
                    >
                        {i}
                    </button>
                );
            }
        } else {
            // Always show first three pages
            for (let i = 1; i <= 3; i++) {
                pageNumbers.push(
                    <button
                        key={i}
                        onClick={() => handlePageChange(i)}
                        className={currentPage === i ? 'active' : ''}
                    >
                        {i}
                    </button>
                );
            }

            // Show ellipsis if the current page is greater than 4
            if (currentPage > 4) {
                pageNumbers.push(ellipsis);
            }

            // Show current page and its adjacent pages
            if (currentPage > 3 && currentPage < totalPages - 2) {
                for (let i = currentPage - 1; i <= currentPage + 1; i++) {
                    if (i > 3 && i < totalPages - 2) {
                        pageNumbers.push(
                            <button
                                key={i}
                                onClick={() => handlePageChange(i)}
                                className={currentPage === i ? 'active' : ''}
                            >
                                {i}
                            </button>
                        );
                    }
                }
            }

            // Show ellipsis if the current page is not near the end
            if (currentPage < totalPages - 3) {
                pageNumbers.push(ellipsis);
            }

            // Always show last three pages
            for (let i = totalPages - 2; i <= totalPages; i++) {
                pageNumbers.push(
                    <button
                        key={i}
                        onClick={() => handlePageChange(i)}
                        className={currentPage === i ? 'active' : ''}
                    >
                        {i}
                    </button>
                );
            }
        }

        return pageNumbers;
    };

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
            <div className="posts-container blog-list">
                {/* <Breadcrumb>
                    <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
                    <Breadcrumb.Item active>Blogs</Breadcrumb.Item>
                </Breadcrumb> */}
                <Row className="g-3">
                    {Blogs.map((item, index) => (
                        <Col xs={12} key={index}>
                            <Card className='boxShadowHovrBtm'>
                                <Row>
                                    <Col xs={12} md={4}>
                                        <Card.Img src={import.meta.env.VITE_BACKEND_API + item.blog_thumbnail} className='post-thumb' />
                                    </Col>
                                    <Col xs={12} md={8}>
                                        <Card.Body>
                                            <div className="item-content">
                                                <h4 className='text-main'><Link className='text-main' to={"/blogs/"+item.blog_slug}>{item.blog_title}</Link></h4>
                                                <div className="post-meta">
                                                    <div className="post-meta-inner">
                                                        <img src={import.meta.env.VITE_BACKEND_API + item.user_profile} alt="/" className="rounded-circle" width={48} height={48} />
                                                        <div className="post-meta-inner-text">
                                                            <h6 className='text-main mb-0 text-semibold'>{item.full_name}</h6>
                                                            <span className='subHdng'>
                                                                {getDayWithSuffix(new Date(item.created_at).getDate())}&nbsp;
                                                                {new Date(item.created_at).toLocaleString('default', { month: 'long' })}&nbsp;
                                                                {new Date(item.created_at).getFullYear()}
                                                            </span>
                                                        </div>
                                                        <div className="posts-head-right">
                                                            <span className='category-pill'>{item.category_name}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="item-inner-content">
                                                    <p className="text-main1">{item.blog_shortDesc.substring(0, 160)}{item.blog_shortDesc.length > 160 ? '...' : ''}</p>
                                                    <div className="d-flex justify-content-start">
                                                        <Link to={"/blogs/"+item.blog_slug} className="btn-link">Read More&nbsp;&nbsp;<FontAwesomeIcon size='sm' icon={faArrowRight} /></Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </Card.Body>
                                    </Col>
                                </Row>
                            </Card>
                        </Col>
                    ))}
                    <div className="pagination">
                        {/* Render page numbers */}
                        <button
                            className="page-btn"
                            onClick={handlePreviousPage}
                            disabled={currentPage === 1}
                        >
                            &#8592;&nbsp;Previous
                        </button>
                        {renderPageNumbers()}
                        <button
                            className="page-btn"
                            onClick={handleNextPage}
                            disabled={currentPage === totalPages}
                        >
                            Next&nbsp;&#8594;
                        </button>
                    </div>
                </Row>
            </div>
        </React.Fragment>
    )
}

export default BlogsList