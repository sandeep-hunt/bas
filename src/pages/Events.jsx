import React, {useEffect} from 'react'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import EventsBanner from '../components/Events/EventsBanner'
import EventsList from '../components/Events/EventsList'

const Events = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <React.Fragment>
        <Header />
        <EventsBanner />
        <EventsList />
        <Footer />
    </React.Fragment>
  )
}

export default Events