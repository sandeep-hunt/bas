import React, {useEffect} from 'react'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import { Container } from 'react-bootstrap'
import DonateCont from '../components/Donate/DonateCont'

const Donate = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <React.Fragment>
      <Header />
      <DonateCont />
      <Footer />
    </React.Fragment>
  )
}

export default Donate