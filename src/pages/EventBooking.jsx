import React, {useEffect} from 'react'
import BookingCont from '../components/Events/Booking/BookingCont'

const EventBooking = () => {

    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
    
    return (
        <React.Fragment>
            <BookingCont />
        </React.Fragment>
    )
}

export default EventBooking