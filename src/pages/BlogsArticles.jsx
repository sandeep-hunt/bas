import React, {useEffect, useState} from 'react'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import Breadcrumb from 'react-bootstrap/Breadcrumb'
import Pro_bg1 from '../assets/images/msic/blog_bg.png'
import { Container } from 'react-bootstrap'
import RecentBlogs from '../components/Blogs/RecentBlogs/RecentBlogs'
import RecentArticles from '../components/Blogs/RecentArticles/RecentArticles'
import HomeIcon from '../assets/images/icons/home.svg'
import EditIcon from '../assets/images/icons/edit.svg'
import axios from 'axios'
import { Helmet } from 'react-helmet-async'

const BlogsArticles = () => {
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
        <title>{`${settings?.site_title || "Bharata Arseya Samsthan"} | Recent Blogs & Articles`}</title>
        <meta name="description" content={settings.site_description} />
        <meta name="keywords" content={settings.site_keywords}></meta>
    </Helmet>
      <Header />
      <div className="projects-banner" style={{ backgroundImage: `url(${Pro_bg1})` }}>
        <div className="projects-banner-inner">
          <Breadcrumb>
            <Breadcrumb.Item href="#"><img src={HomeIcon} className='img-fluid' alt="" />Home</Breadcrumb.Item>
            <Breadcrumb.Item active><img src={EditIcon} className='img-fluid' alt="" />Blogs & Articles</Breadcrumb.Item>
          </Breadcrumb>
          <h2 className='text-white'>Blogs & Articles</h2>
          <p className='text-white paragraph1'>Research articles and blogs relevant to the relevant area can be accessed here.</p>
        </div>
      </div>
      <Container fluid>
        <RecentArticles />
        <RecentBlogs />
      </Container>
      <Footer />
    </React.Fragment>
  )
}

export default BlogsArticles