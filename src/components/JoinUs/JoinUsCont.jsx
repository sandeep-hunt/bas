import React from 'react'
import JoinUsBG from '../../assets/images/msic/joinus_bg.png'
import Breadcrumb from 'react-bootstrap/Breadcrumb'
import JoinUsForm_init from './JoinUsForm/JoinUsForm_init'
import HomeIcon from '../../assets/images/icons/file.svg'
import FileIcon from '../../assets/images/icons/file.svg'
import EditIcon from '../../assets/images/icons/edit.svg'
import { Link } from 'react-router-dom'

const JoinUsCont = () => {
  return (
    <React.Fragment>
      <div className="event-banner" style={{ backgroundImage: `url(${JoinUsBG})` }}>
        <div className="event-banner-inner">
          <Breadcrumb>
            <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/" }}><img src={HomeIcon} className='img-fluid' alt="" />Home</Breadcrumb.Item>
            <Breadcrumb.Item active><img src={EditIcon} className='img-fluid' alt="" />Join Us</Breadcrumb.Item>
          </Breadcrumb>
          <h2 className='text-br'>Join Us</h2>
          <p className='text-br paragraph1'>Become a part of our vibrant community! Engage in enriching workshops, Sāṁskritik programmes, and events that celebrate tradition and knowledge. Together, let’s preserve and promote our shared heritage.</p>
        </div>
      </div>
      <JoinUsForm_init />
    </React.Fragment>
  )
}

export default JoinUsCont