import React, {useEffect} from 'react'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import BookingCont from '../components/Events/Booking/BookingCont'

const EventBooking = () => {

    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
    
    return (
        <React.Fragment>
            <Header />
            <BookingCont />
            <Footer />
        </React.Fragment>
    )
}

export default EventBooking