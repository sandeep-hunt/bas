import React, {useEffect} from 'react'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import { Container } from 'react-bootstrap'
import ArticlesList from '../components/Blogs/Articles/ArticlesList'

const Articles = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <React.Fragment>
        <Header />
        <Container fluid>
            <ArticlesList />
        </Container>
        <Footer />
    </React.Fragment>
  )
}

export default Articles