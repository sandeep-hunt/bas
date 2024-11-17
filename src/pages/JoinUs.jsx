import React, {useEffect} from 'react'
import JoinUsCont from '../components/JoinUs/JoinUsCont'
import { Helmet } from 'react-helmet-async'

const JoinUs = ({settings}) => {
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <React.Fragment>
      <Helmet>
        <title>{`${settings?.site_title || "Bharata Arseya Samsthan"} | Join Us`}</title>
        <meta name="description" content={settings.site_description} />
        <meta name="keywords" content={settings.site_keywords}></meta>
      </Helmet>
      <JoinUsCont />
    </React.Fragment>
  )
}

export default JoinUs