import React, { useEffect, useState } from 'react'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import { Helmet } from 'react-helmet-async'
import { Container, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const GetReceipt = () => {
    const [settings, setsettings] = useState('');
  
    useEffect(() => {
      window.scrollTo(0, 0);
      const fetchData = async () => {
        try {
          // Fetch the settings
          const fetchSettings = await axios.get(import.meta.env.VITE_BACKEND_API + 'fetch/settings');
          setsettings(fetchSettings.data[0]);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
  
      fetchData();
    }, []);
  return (
    <React.Fragment>
    <Helmet>
        <title>{`${settings?.site_title || "Bharata Arseya Samsthan"} | Get Receipt`}</title>
        <meta name="description" content={settings.site_description} />
        <meta name="keywords" content={settings.site_keywords}></meta>
    </Helmet>
    <Header />
    <div className="donate-container">
        <Container fluid>
          <div className="payment-success">
            <div className="payment-wrapper">
              <Card>
                <Card.Body>
                  <div className="payment-content">
                    <h4>Thank You!</h4>
                    <h5>Your registration as a has been successful.</h5>
                    <Link to="/" className="btn-link">Back To Home</Link>
                  </div>
                </Card.Body>
              </Card>
            </div>
          </div>
        </Container>
      </div>
    <Footer />
    </React.Fragment>
  )
}

export default GetReceipt