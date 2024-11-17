import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'
import ArticlesList from '../components/Blogs/Articles/ArticlesList'
import axios from 'axios'
import { Helmet } from 'react-helmet-async'

const Articles = () => {
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
        <title>{`${settings?.site_title || "Bharata Arseya Samsthan"} | Articles`}</title>
        <meta name="description" content={settings.site_description} />
        <meta name="keywords" content={settings.site_keywords}></meta>
      </Helmet>
      <Container fluid>
        <ArticlesList />
      </Container>
    </React.Fragment>
  )
}

export default Articles