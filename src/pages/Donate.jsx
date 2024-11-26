import React, { useEffect} from 'react'
import DonateCont from '../components/Donate/DonateCont'
import { Helmet } from 'react-helmet-async'

const Donate = ({settings}) => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <React.Fragment>
      <Helmet>
        <title>{`${settings?.site_title || "Loading..."} | Donate Us`}</title>
        <meta name="description" content={settings.site_description} />
        <meta name="keywords" content={settings.site_keywords}></meta>
      </Helmet>
      <DonateCont />
    </React.Fragment>
  )
}

export default Donate