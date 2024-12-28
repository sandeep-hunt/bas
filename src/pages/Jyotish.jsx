import React, {useEffect} from 'react'
import Icon4 from '../assets/images/icons/pro_icon4.svg'
import { Container } from 'react-bootstrap'
import Breadcrumb from 'react-bootstrap/Breadcrumb'
import Pro_bg4 from '../assets/images/msic/project_bg4.png'
import HomeIcon from '../assets/images/icons/home.svg'
import EditIcon from '../assets/images/icons/edit.svg'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'

const Jyotish = ({ settings }) => {
  
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);

    return (
        <React.Fragment>
        <Helmet>
            <title>{`${settings?.site_title || "Loading..."} | Jyotiśa Gurukul`}</title>
            <meta name="description" content={settings.site_description} />
            <meta name="keywords" content={settings.site_keywords}></meta>
        </Helmet>
            <div className="projects-banner" style={{ backgroundImage: `url(${Pro_bg4})` }}>
                <div className="projects-banner-inner">
                    <Breadcrumb>
                        <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/" }}><img src={HomeIcon} className='img-fluid' alt="" />Home</Breadcrumb.Item>
                        <Breadcrumb.Item active><img src={EditIcon} className='img-fluid' alt="" />Jyotiśa Gurukul</Breadcrumb.Item>
                    </Breadcrumb>
                    <h2 className='text-white'>Jyotiśa Gurukul</h2>
                    <img src={Icon4} className='img-fluid mb-2' alt="" />
                    <p className='text-white paragraph2'>Astronomical Jyotiśa & phal Jyotiśa as propounded by various Ṛṣīs’ will be taught. Palmistry, praśna Jyotiśa, nāḍi Jyotiśa etc. shall also be taught.</p>
                </div>
            </div>
            <Container fluid>
                <div className="projects-content">
                    <h4>Jyotiśa: The Eyes of the Véda-s</h4>
                    <p>Jyotiśa is revered as the eyes of Véda-s. It is also compared with the rare jewel on the head of Nāga serpent known as Nāgamaṇi. It merely illustrates how Jyotiśa is like the Nāgamaṇi of Véda – as a jewel in its crown.<br/>There is an astronomical part as well as a predictive part of Jyotiśa which are very well entrenched in Sanātan people through experience of their efficacy. Ṛṣi Parāśara & Ṛṣi Gemini are the two best-known fountainheads of two different but not contradictory Jyotiśa knowledge frameworks based on which many leaders of men and even nations depend heavily. Realizing its great importance, Bhāsa believes that no Bhāratīya Jñāna is complete without Jyotiśa. A comprehensive training Programme on Jyotiśa shall be offered for aspiring Jyotiśa-s. Alongside, astrological services shall also be available as Bhāsa’s sustainability project.</p>
                </div>
            </Container>
        </React.Fragment>
    )
}

export default Jyotish