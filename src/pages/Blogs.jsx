import React, {useEffect} from 'react'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import { Container } from 'react-bootstrap'
import BlogsList from '../components/Blogs/Blogs/BlogsList'

const Blogs = () => {

    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);

    return (
        <React.Fragment>
            <Header />
            <Container fluid>
                <BlogsList />
            </Container>
            <Footer />
        </React.Fragment>
    )
}

export default Blogs