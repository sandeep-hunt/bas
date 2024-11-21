import React from 'react'
import Breadcrumb from 'react-bootstrap/Breadcrumb'
import Event_bg from '../../assets/images/msic/event_bg.png'
import HomeIcon from '../../assets/images/icons/home.svg'
import EditIcon from '../../assets/images/icons/edit.svg'
import './Events.css'
import { Link } from 'react-router-dom'

const EventsBanner = () => {
  return (
    <React.Fragment>
      <div className="event-banner" style={{ backgroundImage: `url(${Event_bg})` }}>
        <div className="event-banner-inner">
          <Breadcrumb>
            <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/" }}><img src={HomeIcon} className='img-fluid' alt="" />Home</Breadcrumb.Item>
            <Breadcrumb.Item active><img src={EditIcon} className='img-fluid' alt="" />Events</Breadcrumb.Item>
          </Breadcrumb>
          <h2 className='text-white'>Events</h2>
          <p className='paragraph2 text-white'>Explore our Upcoming Events to stay updated on our latest workshops, performances, and cultural gatherings. Dive into the Previous Events archive to relive the memorable moments and achievements of past celebrations.</p>
        </div>
      </div>
    </React.Fragment>
  )
}

export default EventsBanner