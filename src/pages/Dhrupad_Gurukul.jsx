import React, { useEffect } from 'react'
import Icon1 from '../assets/images/icons/pro_icon1.svg'
import { Container } from 'react-bootstrap'
import Breadcrumb from 'react-bootstrap/Breadcrumb'
import Pro_bg1 from '../assets/images/msic/project_bg1.png'
import HomeIcon from '../assets/images/icons/home.svg'
import EditIcon from '../assets/images/icons/edit.svg'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'

const Dhrupad_Gurukul = ({ settings }) => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <React.Fragment>
      <Helmet>
        <title>{`${settings?.site_title || "Loading..."} | Dhrupad Gurukul`}</title>
        <meta name="description" content={settings.site_description} />
        <meta name="keywords" content={settings.site_keywords}></meta>
      </Helmet>
      <div className="projects-banner" style={{ backgroundImage: `url(${Pro_bg1})` }}>
        <div className="projects-banner-inner">
          <Breadcrumb>
            <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/" }}><img src={HomeIcon} className='img-fluid' alt="" />Home</Breadcrumb.Item>
            <Breadcrumb.Item active><img src={EditIcon} className='img-fluid' alt="" />Dhrupad Gurukul</Breadcrumb.Item>
          </Breadcrumb>
          <h2 className='text-white'>Dhrupad Gurukul</h2>
          <img src={Icon1} className='img-fluid mb-2' alt="" />
          <p className='text-white paragraph2 tw-600'>Dhrupad vocal training in the Ḍāgarvāṇī tradition will be one-on-one & online.</p>
        </div>
      </div>
      <Container fluid>
        <div className="projects-content">
          <h4>Dhrupad : The Oral-Aural Tradition</h4>
          <p>The roots of Dhrupada (Dhruva Pada) cannot be traced to any other musical form but to the Sāma Véda. <br />Nātyaśātra which is referred to as Pañćam Véda and is the Upavéda of Sāma Véda, may have been compiled before 300 BCE by Bharata Muni. Its most prominent commentator - Abhinavagupta refers to Dhruvagānam as follows:</p>
          <h5 className='text-center'><i>Prāṇabhūtan tāvad dhruvāganam prayogasya</i></h5>
          <p className='text-center'><i>Dhruvagān is not an ordinary part but the very life of nātya</i></p>
          <p>In Nātyaśātra, five forms of Dhruva-s are given in the context of Nātya as follows:</p>
          <b>
            <ol>
              <li>Praveśikī</li>
              <li>Ākṣepikī</li>
              <li>Naiṣkramikī</li>
              <li>Prāsādikī</li>
              <li>Antarā</li>
            </ol>
          </b>
          <p>However, the singers had to practice these gāna types before they were sung with the nāṭya. This in itself may have been rather attractive and may have been sung without the nāṭaka itself being enacted. <br />This may have given birth to Dhruvapāda singing which we sing today. Bharata himself writes how the Dhruva-s come from Sāma Vēda. The project <strong>Academy of Dhrupad Music & Research (ADMUR)</strong> in itself is a way to delve into the roots of Dhruvapada singing of today. But the search must happen through practice combined with library referencing. Hence the focus in <strong>ADMUR</strong> is on practice leading to insights followed by verification. Learning could also happen through conjecturing & refutations in the Upaniṣadic manner.</p>
        </div>
      </Container>
    </React.Fragment>
  )
}

export default Dhrupad_Gurukul