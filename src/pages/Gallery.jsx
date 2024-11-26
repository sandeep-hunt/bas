import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Col, Container, Row } from 'react-bootstrap'
import Breadcrumb from 'react-bootstrap/Breadcrumb'
import Gallery_bg from '../assets/images/msic/gallery_bg.png'
import HomeIcon from '../assets/images/icons/home.svg'
import EditIcon from '../assets/images/icons/edit.svg'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'

const Gallery = ({ settings }) => {
    const [images, setImages] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [limit] = useState(12);  // Number of items per page

    // Fetch paginated items when the component mounts or page changes
    useEffect(() => {
        window.scrollTo(0, 0);
        const fetchData = async () => {
            try {
                const response = await axios.get(import.meta.env.VITE_BACKEND_API + 'gallery', {
                    params: {
                        page: currentPage,
                        limit: limit
                    }
                });

                setImages(response.data.items);
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

    return (
        <React.Fragment>
            <Helmet>
                <title>{`${settings?.site_title || "Loading..."} | Gallery`}</title>
                <meta name="description" content={settings.site_description} />
                <meta name="keywords" content={settings.site_keywords}></meta>
            </Helmet>
            <div className="event-banner" style={{ backgroundImage: `url(${Gallery_bg})` }}>
                <div className="event-banner-inner">
                    <Breadcrumb>
                        <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/" }}><img src={HomeIcon} className='img-fluid' alt="" />Home</Breadcrumb.Item>
                        <Breadcrumb.Item active><img src={EditIcon} className='img-fluid' alt="" />Gallery</Breadcrumb.Item>
                    </Breadcrumb>
                    <h2 className='text-white'>Gallery</h2>
                    <p className='paragraph2 text-white'>Explore our Upcoming Events to stay updated on our latest workshops, performances, and cultural gatherings. Dive into the Previous Events archive to relive the memorable moments and achievements of past celebrations.</p>
                </div>
            </div>
            <Container fluid>
                <div className="gallery-container">
                    <div className="gallery-inner">
                        <Row>
                            {images.map(image => (
                                <Col key={image.gallery_id} sm={12} md={4}>
                                    <div className="gallery-item">
                                        <img src={import.meta.env.VITE_BACKEND_API + image.gallery_imagePath} className='img-fluid' alt={`Image ${image.gallery_id}`} />
                                        <p className='paragraph1 text-center tw-600 text-main'>{image.gallery_image_name}</p>
                                    </div>
                                </Col>
                            ))}

                        </Row>
                    </div>
                    <div className="gallery-pagination">
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
                    </div>
                </div>
            </Container>
        </React.Fragment>
    )
}

export default Gallery
