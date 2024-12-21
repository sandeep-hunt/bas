import React from 'react'
import './TestiHome.css'
import Slider from "react-slick"
import Testi1 from '../../../assets/images/testimonials/1.png'
import Testi2 from '../../../assets/images/testimonials/2.png'
import Testi3 from '../../../assets/images/testimonials/3.png'
import Testi4 from '../../../assets/images/testimonials/4.png'
import Testi5 from '../../../assets/images/testimonials/5.png'

const data = [
  {
    image: Testi1,
    name: 'Late Guru Sayeeduddin Dagar',
    description: 'Late Guru Sayeeduddin Ḍāgar remarked, "He is Ḍāgar" after a demonstration and performance by Dr. Suvratadev Sharmana Vandopadhyay at Garware College, Pune Hall in 2012. This high praise reflects the depth of his artistry and connection to the Ḍāgar tradition of Dhrupad.',
  },
  {
    image: Testi2,
    name: 'Pdt. L. K Pandit - Gwalior Tradition',
    description: '"Very tuneful singing. Must try to sing in three octaves." Pdt. L. K. Pandits words underscore the melodic precision & potential of Dr. Suvratadev Sharmana Vandopadhyays musical journey, emphasizing his continuous growth & mastery in the art of Raga singing.',
  },
  {
    image: Testi3,
    name: 'Shilpa Shanker - Dhrupad Singer',
    description: 'Dr. Suvratadev Sharmana Vandopadhyay has been a transformative guide in my Dhrupad journey. His profound wisdom and insightful teachings have brought a new joy and depth to my Dhrupad practice. I am grateful for his timely and impactful guidance.',
  },
  {
    image: Testi4,
    name: 'Vijita Vishwakumar - Teacher',
    description: 'I attended the live Dhrupad Darpan baithak, a transcendental journey of acoustic beauty. The seamless interplay of raga and tala embodied the Bharatiya belief in the union of the animate and inanimate, transcending their earthly bounds.',
  },
  {
    image: Testi5,
    name: 'Saurebh Shindde - Cinematographer',
    description: 'I first attended a Dhrupad Darpan Baithak as a videographer, but the experience transformed me. My hands found rhythm, guided by something beyond me, creating images in harmony with the music. Since then, Dhrupad has become a part of my life and playlist!',
  },
]

const TestiHome = () => {
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
      <div className="testihome-container">
        <h2 className='container-title testiHome'>Testimonials</h2>
        <div className="slider-container testihome-inner">
          <Slider {...settings}>
            {
              data.map((item, index) => {
                return (
                  <div key={index}>
                    <div className="testihome-item">
                      <div className="testihome-inner-body boxShadowHovr">
                        <div className="testihome-inner-body-top">
                          <img src={item.image} alt={item.name} />
                          <h5 className='text-main'>{item.name}</h5>
                        </div>
                        <div className="testihome-inner-body-bottom">
                          <p className='paragraph3'>{item.description}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })
            }
          </Slider>
        </div>
      </div>
    </React.Fragment>
  )
}

export default TestiHome