import React, {useEffect} from 'react'
import { Container } from 'react-bootstrap'
import ArticlesList from '../components/Blogs/Articles/ArticlesList'
import { Helmet } from 'react-helmet-async'

const Articles = ({settings}) => {

  useEffect(() => {
    window.scrollTo(0, 0);
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