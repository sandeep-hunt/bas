import React, {useEffect} from 'react'
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

const Homepage = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <React.Fragment>
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