import React from 'react'
import './AboutHome.css'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

const AboutHome = () => {
  return (
    <React.Fragment>
      <div className="abouthome-container">
        <div className="abouthome-inner">
          <h2 className='container-title abutHome'>About Us</h2>
          <p className='text-main paragraph1'>Bhārata Āṛṣeya Saṅsthān is the initiative to promote, advocate, develop, support, Bhartiya Sanskriti Seva (On the lines of ‘Indian Administrative Services’ ) for creating awareness in and outside India about Bhartiya Sanskriti including ancient literature, customs, traditions, shlokas, Vedas, mantras, music, literature, meditation, yoga, all Indian practices and philosophy and to carry on the research for promotion of the same and to publish the relevant information through magazines, books, brochures .</p>
          <Link to="/about-us" className="btn-link">Learn More&nbsp;&nbsp;<FontAwesomeIcon size='sm' icon={faArrowRight} /></Link>
        </div>
      </div>
    </React.Fragment>
  )
}

export default AboutHome