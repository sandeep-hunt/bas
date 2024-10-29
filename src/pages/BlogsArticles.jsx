import React, { useEffect } from 'react'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import Breadcrumb from 'react-bootstrap/Breadcrumb'
import Pro_bg1 from '../assets/images/msic/blog_bg.png'
import { Container } from 'react-bootstrap'
import RecentBlogs from '../components/Blogs/RecentBlogs/RecentBlogs'
import RecentArticles from '../components/Blogs/RecentArticles/RecentArticles'
import HomeIcon from '../assets/images/icons/home.svg'
import EditIcon from '../assets/images/icons/edit.svg'

const BlogsArticles = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <React.Fragment>
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