import React from 'react'
import { Container } from 'react-bootstrap'
import JoinUsBG from '../../assets/images/msic/joinus_bg.png'
import Breadcrumb from 'react-bootstrap/Breadcrumb'
import JoinUsForm_init from './JoinUsForm/JoinUsForm_init'
import HomeIcon from '../../assets/images/icons/file.svg'
import FileIcon from '../../assets/images/icons/file.svg'
import EditIcon from '../../assets/images/icons/edit.svg'

const JoinUsCont = () => {
  return (
    <React.Fragment>
      <div className="event-banner" style={{ backgroundImage: `url(${JoinUsBG})` }}>
        <div className="event-banner-inner">
          <Breadcrumb>
            <Breadcrumb.Item href="#"><img src={HomeIcon} className='img-fluid' alt="" />Home</Breadcrumb.Item>
            <Breadcrumb.Item href="#"><img src={FileIcon} className='img-fluid' alt="" />Projects</Breadcrumb.Item>
            <Breadcrumb.Item active><img src={EditIcon} className='img-fluid' alt="" />Gallery</Breadcrumb.Item>
          </Breadcrumb>
          <h2 className='text-white'>Join Us</h2>
          <p className='text-white paragraph1'>Become a part of our vibrant community! Engage in enriching workshops, cultural programs, and events that celebrate tradition and knowledge. Together, let’s preserve and promote our shared heritage.</p>
        </div>
      </div>
      <div className="donate-container">
        <Container>
          <div className="donate-wrapper">
            <JoinUsForm_init />
          </div>
        </Container>
      </div>
    </React.Fragment>
  )
}

export default JoinUsCont