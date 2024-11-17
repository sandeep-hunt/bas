import React, {useEffect} from 'react'
import EventsBanner from '../components/Events/EventsBanner'
import EventsList from '../components/Events/EventsList'
import { Helmet } from 'react-helmet-async'

const Events = ({ settings }) => {
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <React.Fragment>
      <Helmet>
        <title>{`${settings?.site_title || "Bharata Arseya Samsthan"} | Events`}</title>
        <meta name="description" content={settings.site_description} />
        <meta name="keywords" content={settings.site_keywords}></meta>
      </Helmet>
      <EventsBanner />
      <EventsList />
    </React.Fragment>
  )
}

export default Events