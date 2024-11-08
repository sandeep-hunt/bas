import React, {useEffect, useState} from 'react'
import Header from '../components/Header/Header'
import HeroBanner from '../components/HeroBanner/HeroBanner'
import AboutHome from '../components/Msic/AboutHome/AboutHome'
import { Container } from 'react-bootstrap'
import ImpactHome from '../components/Msic/ImpactHome/ImpactHome'
import ProjectsHome from '../components/Msic/ProjectsHome/ProjectsHome'
import GalleryHome from '../components/Msic/GalleryHome/GalleryHome'
import BlogArtiHome from '../components/Msic/BlogArtiHome/BlogArtiHome'
import TestiHome from '../components/Msic/TestiHome/TestiHome'
import MsgBxHome from '../components/Msic/MsgBxHome/MsgBxHome'
import Footer from '../components/Footer/Footer'
import JoinHome from '../components/Msic/JoinHome/JoinHome'
import VideoHome from '../components/Msic/VideoHome/VideoHome'
import axios from 'axios'
import { Helmet } from 'react-helmet-async'

const Homepage = () => {
  const [settings, setsettings] = useState('');

  useEffect(() => {
    window.scrollTo(0, 0);
    const fetchData = async () => {
      try {
        // Fetch the settings
        const fetchSettings = await axios.get(import.meta.env.VITE_BACKEND_API + 'fetch/settings');
        setsettings(fetchSettings.data[0]);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <React.Fragment>
    <Helmet>
      <title>{`${settings?.site_title || "Bharata Arseya Samsthan"}`}</title>
      <meta name="description" content={settings.site_description} />
      <meta name="keywords" content={settings.site_keywords}></meta>
    </Helmet>
      <Header />
      <Container fluid>
        <HeroBanner />
        <AboutHome />
        <ImpactHome />
        <ProjectsHome />
        <GalleryHome />
        <BlogArtiHome />
        <TestiHome />
        <MsgBxHome />
      </Container>
      <JoinHome />
      <Container fluid>
        <VideoHome />
      </Container>
      <Footer />
    </React.Fragment>
  )
}

export default Homepage