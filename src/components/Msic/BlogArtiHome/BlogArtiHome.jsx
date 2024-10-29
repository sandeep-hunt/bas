import React from 'react'
import './BlogArtiHome.css'
import Slider from "react-slick"
import Card from 'react-bootstrap/Card'
import { Link } from 'react-router-dom'
import BlogSlide1 from '../../../assets/images/msic/blogslid1.png'
import BlogSlide2 from '../../../assets/images/msic/blogslid2.png'
import BlogSlide3 from '../../../assets/images/msic/blogslid3.png'

const data = [
  {
    image: BlogSlide1,
    title: 'A Tryst With The Divine Mother',
    description: 'Mehsana- Gujarat Introduction: Malhar Gupte, a Class XII student living in Mehsana of Gujarat was recently initiated into Shri Vidya …',
    author: 'Subroto Roy',
    author_img: 'https://i.imgur.com/6Q8s6JL.jpg',
    date: '20thMarch, 2024',
    category: 'Music',
  },
  {
    image: BlogSlide2,
    title: 'Dhrupada: Towards a New Ontology',
    description: 'Towards a New Ontology Abstract Key Words  Varṇa, Śabda, Vākya, Artha, Dhvani, Nāda, Sign, Sphoṭa, Stobha  This is a working ....',
    author: 'Subroto Roy',
    author_img: 'https://i.imgur.com/6Q8s6JL.jpg',
    date: '20thMarch, 2024',
    category: 'Music',
  },
  {
    image: BlogSlide3,
    title: 'A Tryst With The Divine Mother',
    description: 'Mehsana- Gujarat Introduction: Malhar Gupte, a Class XII student living in Mehsana of Gujarat was recently initiated into Shri Vidya …',
    author: 'Subroto Roy',
    author_img: 'https://i.imgur.com/6Q8s6JL.jpg',
    date: '20thMarch, 2024',
    category: 'Music',
  },
]

const BlogArtiHome = () => {
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
          infinite: true,
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
            {
              data.map((item, index) => {
                return (
                  <Card key={index} className='shadow-sm'>
                    <Card.Img variant="top" src={item.image} />
                    <Card.Body>
                      <div className="blogartihome-cont">
                        <div className="blogartihome-contlft">
                          <img src={item.author_img} alt="/" className="rounded-circle" width={48} height={48} />
                          <div className='d-flex flex-column'>
                            <h6 className='text-main mb-0 text-bold'>{item.author}</h6>
                            <span className='subHdng'>{item.date}</span>
                          </div>
                        </div>
                        <div className="blogartihome-contrht">
                          <span className='category-pill'>{item.category}</span>
                        </div>
                      </div>
                      <div className="blogartihome-contbtm">
                        <h4>{item.title}</h4>
                        <p className='paragraph2'>
                          {item.description}
                        </p>
                        <div className="d-flex justify-content-end">
                          <Link to="/" className="btn-link">Read More&nbsp;&#8594;</Link>
                        </div>
                      </div>
                    </Card.Body>
                  </Card>
                );
              })
            }
          </Slider>
        </div>
      </div>
    </React.Fragment>
  )
}

export default BlogArtiHome