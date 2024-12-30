import React, {useEffect} from 'react'
import Icon3 from '../assets/images/icons/pro_icon3.svg'
import { Container } from 'react-bootstrap'
import Breadcrumb from 'react-bootstrap/Breadcrumb'
import Pro_bg3 from '../assets/images/msic/project_bg3.png'
import HomeIcon from '../assets/images/icons/home.svg'
import EditIcon from '../assets/images/icons/edit.svg'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'

const Girvaan_Bhasa = ({ settings }) => {
  
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);

    return (
        <React.Fragment>
            <Helmet>
                <title>{`${settings?.site_title || "Loading..."} | Gīrvāṇ Bhāṣā`}</title>
                <meta name="description" content={settings.site_description} />
                <meta name="keywords" content={settings.site_keywords}></meta>
            </Helmet>
            <div className="projects-banner" style={{ backgroundImage: `url(${Pro_bg3})` }}>
                <div className="projects-banner-inner">
                    <Breadcrumb>
                        <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/" }}><img src={HomeIcon} className='img-fluid' alt="" />Home</Breadcrumb.Item>
                        <Breadcrumb.Item active><img src={EditIcon} className='img-fluid' alt="" />Gīrvāṇ Bhāṣā</Breadcrumb.Item>
                    </Breadcrumb>
                    <h2 className='text-white'>Gīrvāṇ Bhāṣā</h2>
                    <img src={Icon3} className='img-fluid mb-2' alt="" />
                    <p className='text-white paragraph2 tw-600'>Gīrvāṇ Bhāṣā in its pristine form for conversation shall be imparted.</p>
                </div>
            </div>
            <Container fluid>
                <div className="projects-content">
                    <h4>Gīrvāṇ Bhāṣā: The Language of the Dévata-s</h4>
                    <p>The key to Bhāratīya Saṁskriti is Gīrvāṇ. Gīrvāṇ can be broken up into Gīr (Déva) Vāṇ (Vāṇī). This means Gīrvāṇ is the Vāṇī or prāṇa of the Dévatā-s. The project in Bhāṣā that ensures that each scholar is well-versed with Gīrvāṇ, which is often called Saṁskrit. There are a large number of manuscripts on music, Sāmavéda, and related śāstra-s written in Gīrvāṇ that have not been translated into any Indian or foreign language. This may form an important project of Bhāṣā among many others.<br/>It is also important for scholars who want to know and live Bhārat to speak in the language so that it becomes their worldview. Very few languages in various cultures can be fully translated, mainly because of the diversity of culture and worldview. This holds for Gīrvāṇ when compared, especially, with Western languages like English. The project stresses the need for speaking the Gīrvāṇ language; hence, the Gīrvāṇ teaching project..</p>
                </div>
            </Container>
        </React.Fragment>
    )
}

export default Girvaan_Bhasa