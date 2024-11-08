import React, { useEffect, useState } from 'react'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import DonateCont from '../components/Donate/DonateCont'
import axios from 'axios'
import { Helmet } from 'react-helmet-async'

const Donate = () => {
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
        <title>{`${settings?.site_title || "Bharata Arseya Samsthan"} | Donate Us`}</title>
        <meta name="description" content={settings.site_description} />
        <meta name="keywords" content={settings.site_keywords}></meta>
      </Helmet>
      <Header />
      <DonateCont />
      <Footer />
    </React.Fragment>
  )
}

export default Donate