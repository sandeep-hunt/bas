import React, { useEffect } from 'react'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import Icon1 from '../assets/images/icons/pro_icon1.svg'
import { Container } from 'react-bootstrap'
import Breadcrumb from 'react-bootstrap/Breadcrumb'
import Pro_bg1 from '../assets/images/msic/project_bg1.png'
import HomeIcon from '../assets/images/icons/home.svg'
import EditIcon from '../assets/images/icons/edit.svg'

const Dhrupad_Gurukul = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <React.Fragment>
      <Header />
      <div className="projects-banner" style={{ backgroundImage: `url(${Pro_bg1})` }}>
        <div className="projects-banner-inner">
          <Breadcrumb>
            <Breadcrumb.Item href="#"><img src={HomeIcon} className='img-fluid' alt="" />Home</Breadcrumb.Item>
            <Breadcrumb.Item active><img src={EditIcon} className='img-fluid' alt="" />Dhrupad Gurukul</Breadcrumb.Item>
          </Breadcrumb>
          <h2 className='text-white'>Dhrupad Gurukul</h2>
          <img src={Icon1} className='img-fluid mb-2' alt="" />
          <p className='text-white paragraph1'>Dhrupad vocal training in the Dagar Vani tradition will be taught one on one & online.</p>
        </div>
      </div>
      <Container fluid>
        <div className="projects-content">
          <h4>Dhrupad – The Oral-Aural Tradition</h4>
          <p>Dhrupad, one of the oldest and most profound forms of Indian classical music, is much more than a musical genre. It is an oral-aural tradition rooted in the transmission of knowledge through sound vibrations, known as *naad*. At BHASA (Bharat Arseya Sansthan), this tradition is kept alive through the teachings of Guru Dr. Suvratadev Sharmana Vandyopadhyay, who has devoted his life to imparting Dhrupad Gaan Siksha, a Vedic communication protocol.</p>
          <h4>A Comprehensive Vedic Communication Protocol</h4>
          <p>At its core, Dhrupad Gaan Siksha at BHASA represents a highly sophisticated method of transferring knowledge. It is not merely the transmission of musical notes or melodic patterns but also the transfer of *shakti*—a vital, divine energy that empowers both the teacher and the student. This communication goes beyond mere words or melodies; it is rooted in sound itself, where each vibration, or *shruti*, carries immense meaning and power.</p>
          <p>Dr. Suvratadev Sharmana Vandyopadhyay transports this *shakti* through his mastery over *naad* or sound, particularly through the subtleties of *shruti*, the microtones that form the very fabric of Indian classical music. The entire process of learning Dhrupad at BHASA is deeply spiritual, engaging the student in an *aadhyaatmic* (spiritual) journey. This elevates Dhrupad beyond entertainment, placing it as a medium for inner transformation and self-realization.</p>
          <h4>The Dagarvani: The Living Legacy</h4>
          <p>The Dagar tradition of Dhrupad, one of the most prominent and revered lineages in Indian classical music, has been preserving and nurturing this ancient art form for centuries. The Dagar family has upheld Dhrupad's spiritual essence and musical purity, transmitting it orally from one generation to the next.</p>
          <p>At BHASA, the teachings of the Dagar tradition remain vibrant and intact, passed on by Dr. Sharmana Vandyopadhyay in a manner faithful to its ancient roots. The training process focuses on deep listening and understanding, immersing students in the rich world of sound and vibration. This process not only develops musicality but also creates a channel for inner awakening, as the student becomes attuned to the subtle nuances of *shruti* and *naad*.</p>
          <h4>Dhrupad: Beyond Entertainment</h4>
          <p>Dhrupad, unlike many modern forms of music, does not confine itself to the realm of entertainment. It is a meditative practice that brings together the body, mind, and spirit. Every note and rhythm is designed to resonate within, creating harmony not just in music but in the practitioner's being.</p>
          <p>At BHASA, Dhrupad is taught as a sacred practice, a medium through which divine energy flows. The learning process involves rigorous discipline, devotion to the Guru, and a deep respect for the ancient wisdom that Dhrupad embodies.</p>
          <h4>Conclusion: A Journey of Sound and Soul</h4>
          <p>Dhrupad Gaan Siksha at BHASA is more than a music lesson—it is a journey into the essence of sound and its power to transform. Under the guidance of Dr. Suvratadev Sharmana Vandyopadhyay, this sacred tradition continues to flourish, keeping alive not just the musical heritage of Dhrupad but also its spiritual essence. For those who seek more than entertainment, Dhrupad offers a path of self-realization, making the oral-aural tradition a vital part of India's cultural and spiritual landscape.</p>
          <p>Through this practice, the music itself becomes a vehicle for experiencing the divine, reminding us that sound, when harnessed properly, is powerful forces in the universe.</p>
        </div>
      </Container>
      <Footer />
    </React.Fragment>
  )
}

export default Dhrupad_Gurukul