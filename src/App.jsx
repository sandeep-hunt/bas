import React, { useEffect, useState } from 'react';
import './App.css';
import './assets/css/xsmall.css';
import './assets/css/small.css';
import './assets/css/medium.css';
import './assets/css/large.css';
import './assets/css/extralarge.css';
import './assets/css/exexclarge.css';
import 'react-phone-input-2/lib/style.css';
import { Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Donate from './pages/Donate';
import Dhrupad_Gurukul from './pages/Dhrupad_Gurukul';
import Samaveda_Gurukul from './pages/Samaveda_Gurukul';
import Girvaan_Bhasa from './pages/Girvaan_Bhasa';
import Jyotish from './pages/Jyotish';
import Events from './pages/Events';
import Gallery from './pages/Gallery';
import BlogsArticles from './pages/BlogsArticles';
import Blogs from './pages/Blogs';
import Articles from './pages/Articles';
import SingleArticle from './pages/SingleArticle';
import SingleBlog from './pages/SingleBlog';
import EventBooking from './pages/EventBooking';
import JoinUs from './pages/JoinUs';
import AboutUs from './pages/AboutUs';
import FloatingIcon from './components/Msic/FloatingIcon/FloatingIcon';
import axios from 'axios';
import GetReceipt from './pages/GetReceipt';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Terms from './pages/Terms';
import Refund from './pages/Refund';

function App() {
  const [getsettings, setgetsettings] = useState('');

  useEffect(() => {
    window.scrollTo(0, 0);
    const fetchData = async () => {
      try {
        // Fetch the settings
        const fetchSettings = await axios.get(import.meta.env.VITE_BACKEND_API + 'fetch/settings');
        setgetsettings(fetchSettings.data[0]);
        const faviconUrl = import.meta.env.VITE_BACKEND_API + fetchSettings.data[0].site_favicon;
        if (faviconUrl) {
          const link = document.querySelector("link[rel~='icon']");
          if (link) {
            link.href = faviconUrl;
          } else {
            const newLink = document.createElement('link');
            newLink.rel = 'icon';
            newLink.href = faviconUrl;
            document.head.appendChild(newLink);
          }
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <React.Fragment>
      <Header />
      <Routes>
        <Route path='/' element={<Homepage settings={getsettings} />} />
        <Route path='donate' element={<Donate settings={getsettings} />} />
        <Route path='dhrupad_gurukul' element={<Dhrupad_Gurukul settings={getsettings} />} />
        <Route path='samaveda_gurukul' element={<Samaveda_Gurukul settings={getsettings} />} />
        <Route path='girvaan_bhasa' element={<Girvaan_Bhasa settings={getsettings} />} />
        <Route path='jyotisha_gurkul' element={<Jyotish settings={getsettings} />} />
        <Route path='events' element={<Events settings={getsettings} />} />
        <Route path='events/booking/:slug' element={<EventBooking settings={getsettings} />} />
        <Route path='gallery' element={<Gallery settings={getsettings} />} />
        <Route path='blogs&articles' element={<BlogsArticles settings={getsettings} />} />
        <Route path='blogs' element={<Blogs settings={getsettings} />} />
        <Route path='articles' element={<Articles settings={getsettings} />} />
        <Route path='articles/:slug' element={<SingleArticle settings={getsettings} />} />
        <Route path='blogs/:slug' element={<SingleBlog settings={getsettings} />} />
        <Route path='join-us' element={<JoinUs settings={getsettings} />} />
        <Route path='about-us' element={<AboutUs setsettings={getsettings} />} />
        <Route path='get-receipt' element={<GetReceipt settings={getsettings} />} />
        <Route path='terms' element={<Terms settings={getsettings} />}/>
        <Route path='refund' element={<Refund settings={getsettings} />}/>
      </Routes>
      <FloatingIcon />
      <Footer />
    </React.Fragment>
  );
}

export default App;
