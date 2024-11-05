import React, { useEffect, useState } from 'react';
import './BlogArtiHome.css';
import Slider from "react-slick";
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import axios from 'axios'; // Ensure axios is imported

const BlogArtiHome = () => {
  const [Blogs, setBlogs] = useState([]);
  const [limit, setLimit] = useState(5);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_BACKEND_API}fetch/getBlogs?limit=${limit}`);
        setBlogs(response.data);
      } catch (error) {
        console.error('Error fetching blog data:', error);
      }
    };

    fetchBlogs(); // Call the fetch function
  }, [limit]);

  var settings = {
    dots: true,
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 5000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: false,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          arrows: false,
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <React.Fragment>
      <div className="blogartihome-container">
        <h2 className='container-title blogArtiHome'>Blogs & Articles</h2>
        <div className="slider-container blogartihome-inner">
          <Slider {...settings}>
            {Blogs.length > 0 ? ( // Check if Blogs array is not empty
              Blogs.map((item, index) => (
                <Card key={index} className='shadow-sm'>
                  <Card.Img variant="top" src={import.meta.env.VITE_BACKEND_API+item.blog_thumbnail} />
                  <Card.Body>
                    <div className="blogartihome-cont">
                      <div className="blogartihome-contlft">
                        <img src="https://i.imgur.com/6Q8s6JL.jpg" alt="/" className="rounded-circle" width={48} height={48} />
                        <div className='d-flex flex-column'>
                          <h6 className='text-main mb-0 text-bold'>{item.blog_author}</h6>
                          <span className='subHdng'>{item.created_at}</span>
                        </div>
                      </div>
                      <div className="blogartihome-contrht">
                        <span className='category-pill'>{item.category_name}</span>
                      </div>
                    </div>
                    <div className="blogartihome-contbtm">
                      <h4>{item.blog_title.substring(0, 45)}{item.blog_title.length > 45 ? '...' : ''}</h4>
                      <p className='paragraph3'>{item.blog_shortDesc.substring(0, 160)}{item.blog_shortDesc.length > 160 ? '...' : ''}</p>
                      <div className="d-flex justify-content-end">
                        <Link to="/" className="btn-link">Read More&nbsp;&#8594;</Link>
                      </div>
                    </div>
                  </Card.Body>
                </Card>
              ))
            ) : (
              <p>No blogs available.</p> // Message when no blogs are found
            )}
          </Slider>
        </div>
      </div>
    </React.Fragment>
  );
}

export default BlogArtiHome;
