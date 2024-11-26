import React, {useEffect} from 'react'
import HeroBanner from '../components/HeroBanner/HeroBanner'
import AboutHome from '../components/Msic/AboutHome/AboutHome'
import { Container } from 'react-bootstrap'
import ImpactHome from '../components/Msic/ImpactHome/ImpactHome'
import ProjectsHome from '../components/Msic/ProjectsHome/ProjectsHome'
import GalleryHome from '../components/Msic/GalleryHome/GalleryHome'
import BlogArtiHome from '../components/Msic/BlogArtiHome/BlogArtiHome'
import TestiHome from '../components/Msic/TestiHome/TestiHome'
import MsgBxHome from '../components/Msic/MsgBxHome/MsgBxHome'
import JoinHome from '../components/Msic/JoinHome/JoinHome'
import VideoHome from '../components/Msic/VideoHome/VideoHome'
import { Helmet } from 'react-helmet-async'

const Homepage = ({ settings }) => {
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <React.Fragment>
      <Helmet>
        <title>{`${settings?.site_title || "Loading..."}`}</title>
        <meta name="description" content={settings?.site_description} />
        <meta name="keywords" content={settings?.site_keywords}></meta>
      </Helmet>
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
    </React.Fragment>
  )
}

export default Homepage
