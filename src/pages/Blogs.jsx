import React, {useEffect} from 'react'
import { Container } from 'react-bootstrap'
import BlogsList from '../components/Blogs/Blogs/BlogsList'
import { Helmet } from 'react-helmet-async'

const Blogs = ({ settings }) => {
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <React.Fragment>
      <Helmet>
        <title>{`${settings?.site_title || "Bharata Arseya Samsthan"} | Blogs`}</title>
        <meta name="description" content={settings.site_description} />
        <meta name="keywords" content={settings.site_keywords}></meta>
      </Helmet>
      <Container fluid>
        <BlogsList />
      </Container>
    </React.Fragment>
  )
}

export default Blogs