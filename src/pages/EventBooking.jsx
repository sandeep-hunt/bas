import React, { useEffect } from 'react'
import BookingCont from '../components/Events/Booking/BookingCont'

const EventBooking = ({ settings }) => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <React.Fragment>
            <BookingCont setsettings={settings}/>
        </React.Fragment>
    )
}

export default EventBooking