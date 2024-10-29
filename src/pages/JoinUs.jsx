import React, {useEffect} from 'react'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import JoinUsCont from '../components/JoinUs/JoinUsCont'

const JoinUs = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <React.Fragment>
        <Header />
        <JoinUsCont />
        <Footer />
    </React.Fragment>
  )
}

export default JoinUs