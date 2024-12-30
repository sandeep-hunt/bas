import React, {useEffect} from 'react'
import Icon2 from '../assets/images/icons/pro_icon2.svg'
import { Container } from 'react-bootstrap'
import Breadcrumb from 'react-bootstrap/Breadcrumb'
import Pro_bg2 from '../assets/images/msic/project_bg2.png'
import HomeIcon from '../assets/images/icons/home.svg'
import EditIcon from '../assets/images/icons/edit.svg'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'

const Samaveda_Gurukul = ({ settings }) => {
  
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);

    return (
        <React.Fragment>
        <Helmet>
            <title>{`${settings?.site_title || "Loading..."} | Sāmavéda Gurukul`}</title>
            <meta name="description" content={settings.site_description} />
            <meta name="keywords" content={settings.site_keywords}></meta>
        </Helmet>
            <div className="projects-banner" style={{ backgroundImage: `url(${Pro_bg2})` }}>
                <div className="projects-banner-inner">
                    <Breadcrumb>
                        <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/" }}><img src={HomeIcon} className='img-fluid' alt="" />Home</Breadcrumb.Item>
                        <Breadcrumb.Item active><img src={EditIcon} className='img-fluid' alt="" />Sāmavéda Gurukul</Breadcrumb.Item>
                    </Breadcrumb>
                    <h2 className='text-white'>Sāmavéda Gurukul</h2>
                    <img src={Icon2} className='img-fluid mb-2' alt="" />
                    <p className='text-white paragraph2 tw-600'>Teachers from traditional gurukula-s will impart training in Sāma Gān of all exegetic text like Sikṣā. Motivation for research & publication will also be given.</p>
                </div>
            </div>
            <Container fluid>
                <div className="projects-content">
                    <h4>Sāmavéda Gurukula: Reviving an Ancient Tradition</h4>
                    <p>Bhagavān Śrī Kṛṣhṇa has said in the Gītā:</p>
                    <p className='text-center'><b><i>Vēdānām Sāmvēdosmi</i><br/>Among the Vēda-s I am Sāmavēda.</b></p>
                    <p>Hence the exalted position of this Vēda, since it is āvhānīya or inviting the Devatā-s to partake of offerings and bestow laukika as well as ālaukika boons.<br/>Sāmavidhāna Brāhmaṇa says that Ṛg Véda are like the bones, Sāma-s are the flesh, while stobha-s are the hair follicles.<br/>Many other praises of the Sāmavēda are found in early maṇḍala-s of R̥g- and Yajur Vēda-s, which prove the exalted position of Sāmavēda among the Vēda-s. Also, the Gandharva Vēda of Bhārata (Nāṭyaśāstra) is the upavēda of Sāmavēda. Therefore, it is imperative that all those who learn Sāmavēda also learn the upavēda well. <br/>The upavéda itself has to also be rejuvenated as a priceless heritage. ADMUR & Sāmavéda Gurukula are a rare combination among gurukula-s in Bhārat today.</p>
                </div>
            </Container>
        </React.Fragment>
    )
}

export default Samaveda_Gurukul