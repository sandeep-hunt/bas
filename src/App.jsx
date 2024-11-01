import React from 'react'
import './App.css'
import './assets/css/xsmall.css'
import './assets/css/small.css'
import './assets/css/medium.css'
import './assets/css/large.css'
import './assets/css/extralarge.css'
import './assets/css/exexclarge.css'
import 'react-phone-input-2/lib/style.css';
import { Routes, Route } from "react-router-dom"
import Homepage from './pages/Homepage'
import Donate from './pages/Donate'
import Dhrupad_Gurukul from './pages/Dhrupad_Gurukul'
import Samaveda_Gurukul from './pages/Samaveda_Gurukul'
import Girvaan_Bhasa from  './pages/Girvaan_Bhasa'
import Jyotish from './pages/Jyotish'
import Events from './pages/Events'
import Gallery from './pages/Gallery'
import BlogsArticles from './pages/BlogsArticles'
import Blogs from './pages/Blogs'
import Articles from './pages/Articles'
import SingleArticle from './pages/SingleArticle'
import SingleBlog from './pages/SingleBlog'
import EventBooking from './pages/EventBooking'
import JoinUs from './pages/JoinUs'
import AboutUs from './pages/AboutUs'
import FloatingIcon from './components/Msic/FloatingIcon/FloatingIcon'

function App() {

  return (
    <React.Fragment>
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='donate' element={<Donate />} />
        <Route path='dhrupad_gurukul' element={<Dhrupad_Gurukul />} />
        <Route path='samaveda_gurukul' element={<Samaveda_Gurukul />} />
        <Route path='girvaan_bhasa' element={<Girvaan_Bhasa />} />
        <Route path='jyotish' element={<Jyotish />} />
        <Route path='events' element={<Events />} />
        <Route path='events/booking/:slug' element={<EventBooking />} />
        <Route path='gallery' element={<Gallery />} />
        <Route path='blogs&articles' element={<BlogsArticles />} />
        <Route path='blogs' element={<Blogs />} />
        <Route path='articles' element={<Articles />} />
        <Route path='single-article' element={<SingleArticle />} />
        <Route path='single-blog' element={<SingleBlog />} />
        <Route path='join-us' element={<JoinUs />} />
        <Route path='about-us' element={<AboutUs />} />
      </Routes>
      <FloatingIcon />
    </React.Fragment>
  )
}

export default App
