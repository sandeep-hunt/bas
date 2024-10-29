import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import Slider from "react-slick";
import { Button } from 'react-bootstrap';
import axios from 'axios';
import { Link } from 'react-router-dom';

const EventsList = () => {
  const [events, setEvents] = useState([]);
  const [visibleEvents, setVisibleEvents] = useState(3); // Initially display 3 events in the list

  // Fetch events from the backend API
  useEffect(() => {
    axios.get(import.meta.env.VITE_BACKEND_API + 'fetch/events')
      .then(response => {
        setEvents(response.data); // Set events data
      })
      .catch(error => {
        console.error('There was an error fetching the events!', error);
      });
  }, []);

  // Split the events into two parts: first 3 for the slider, rest for the list
  const sliderEvents = events.slice(0, 3);
  const listEvents = events.slice(3, visibleEvents + 3); // Show more events based on visibleEvents count

  // Load more events when the user clicks "Show More"
  const loadMoreEvents = () => {
    setVisibleEvents(prev => prev + 3); // Show 3 more events
  };

  const formatDate = (dateString) => {
      const date = new Date(dateString);
      return date.toISOString().split('T')[0];  // "YYYY-MM-DD" format
  };

  var settings = {
    dots: false,
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 5000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
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
      <Container fluid>
        <div className="event-container">
          {/* Slider section for the first 3 events */}
          <div className='event-slider-container'>
            <Slider {...settings}>
              {sliderEvents.map((event, index) => (
                <div key={index} className='event-slider'>
                  <img src={import.meta.env.VITE_BACKEND_API + event.event_image} className='img-fluid' alt={event.name} />
                  <div className="event-slider-inner">
                    <h1 className='text-white event-slider-title'>{event.event_name}</h1>
                    <h4 className='text-white event-slider-price'>&#8377; {event.event_price}</h4>
                    <div>
                      <Link to={`booking/${event.event_slug}`} className="btn-link">Book Now&nbsp;&#8594;</Link>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>

          {/* Event list for the remaining events */}
          <div className="event-list">
            <div className="events-list-header">
              <h3 className='text-main'>Upcoming Events</h3>
            </div>
            <div className="events-list-body">
              {listEvents.map((event, index) => (
                <div key={index} className="events-item">
                  <div className="events-item-left">
                    <img src={import.meta.env.VITE_BACKEND_API + event.event_thumbnail} className='img-fluid' alt={event.name} />
                    <div className="events-inner-cont">
                      <p className='paragraph1 m-0'><b>{event.event_name}</b></p>
                      <p className='paragraph1 m-0'><b>{event.event_location}</b></p>
                      <span>{formatDate(event.event_date)}</span>
                      <span>{event.event_time}</span>
                      <span>&#8377; {event.event_price}</span>
                    </div>
                  </div>
                  <div className="events-item-right">
                    <Button className='btn-main-outline'>View Details&nbsp;&#8594;</Button>
                    <Link to={`booking/${event.event_slug}`} className="btn-link">Book Now&nbsp;&#8594;</Link>
                  </div>
                </div>
              ))}

              {/* Show More Button */}
              {visibleEvents + 3 < events.length && (
                <div className="d-flex justify-content-center">
                  <Button className='btn-main-outline' onClick={loadMoreEvents}>Show More</Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </Container>
    </React.Fragment>
  );
};

export default EventsList;
