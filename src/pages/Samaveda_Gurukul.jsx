import React, { useEffect, useState } from 'react'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import Icon2 from '../assets/images/icons/pro_icon2.svg'
import { Container } from 'react-bootstrap'
import Breadcrumb from 'react-bootstrap/Breadcrumb'
import Pro_bg2 from '../assets/images/msic/project_bg2.png'
import HomeIcon from '../assets/images/icons/home.svg'
import EditIcon from '../assets/images/icons/edit.svg'
import axios from 'axios'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'

const Samaveda_Gurukul = () => {
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
            <title>{`${settings?.site_title || "Bharata Arseya Samsthan"} | Samaveda Gurukul`}</title>
            <meta name="description" content={settings.site_description} />
            <meta name="keywords" content={settings.site_keywords}></meta>
        </Helmet>
            <Header />
            <div className="projects-banner" style={{ backgroundImage: `url(${Pro_bg2})` }}>
                <div className="projects-banner-inner">
                    <Breadcrumb>
                        <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/" }}><img src={HomeIcon} className='img-fluid' alt="" />Home</Breadcrumb.Item>
                        <Breadcrumb.Item active><img src={EditIcon} className='img-fluid' alt="" />Samaveda Gurukul</Breadcrumb.Item>
                    </Breadcrumb>
                    <h2 className='text-white'>Samaveda Gurukul</h2>
                    <img src={Icon2} className='img-fluid mb-2' alt="" />
                    <p className='text-white paragraph1'>Teachers from traditional gurukulas will impart training in Saama Gaan of all exacting Shakas. Motivation for research & publication will also be given.</p>
                </div>
            </div>
            <Container fluid>
                <div className="projects-content">
                    <h4>Saamaveda Gurukula: Reviving an Ancient Tradition</h4>
                    <p>The Saamaveda, one of the four pillars of the Vedic tradition, is set to come alive at the soon-to-be-established *Saamaveda Gurukula* under the aegis of BHASA. This sacred Veda, considered the most intricate among the four Vedas, holds a unique place in Hindu spiritual practice. Revered as the embodiment of Lord Shri Krishna, the Saamaveda is indispensable in connecting humanity with the divine. It is said that without the proper chanting of the Saamaveda, the *Devata*-s (deities) do not accept offerings during Vedic rituals.</p>
                    <p>The Saamaveda, one of the four pillars of the Vedic tradition, is set to come alive at the soon-to-be-established *Saamaveda Gurukula* under the aegis of BHASA. This sacred Veda, considered the most intricate among the four Vedas, holds a unique place in Hindu spiritual practice. Revered as the embodiment of Lord Shri Krishna, the Saamaveda is indispensable in connecting humanity with the divine. It is said that without the proper chanting of the Saamaveda, the *Devata*-s (deities) do not accept offerings during Vedic rituals.</p>
                    <h4>The Complexity and Sacredness of the Saamaveda</h4>
                    <p>The Saamaveda is unique in its composition. Unlike the other Vedas, it is primarily a Veda of melodies and chants. The hymns in the Saamaveda are not simply recited—they are sung in a highly intricate and structured manner. Each note, each vibration is considered sacred, creating a divine resonance that draws the attention of the gods during Vedic rituals. The role of the Saama Gayaka is critical in ensuring that rituals and *Yagya*-s are complete and that the offerings reach their intended recipients—the divine beings.</p>
                    <h4>The Kauthuma and Ranayaniya Recensions</h4>
                    <p>The “Saamaveda Gurukula” will offer comprehensive training in two of the primary recensions of the Saamaveda—Kauthuma and Ranayaniya. These are distinct branches of the Saamaveda tradition, each with its unique methodologies and intricacies. The Kauthuma recension is more widely known, while the Ranayaniya is practiced by fewer scholars and practitioners.</p>
                    <p>Students at the Gurukula will receive training under a dedicated *acharya* (teacher) who has mastered the Saamaveda through years of study in a traditional *gurukula* in Bharata (India). This ensures that the teachings remain authentic and pure, as they are passed down from generation to generation in an unbroken lineage.</p>
                    <h4>Life Beyond the Gurukula: Learning and Serving</h4>
                    <p>Upon completing their training at the *Saamaveda Gurukula*, students will not only possess a deep knowledge of the Veda but also practical skills that can be applied in Vedic rituals around the world. Graduates will have the opportunity to learn the *nitya agnihotra*—the daily fire ritual that is a cornerstone of Vedic worship. This ritual is considered a vital practice for those who wish to maintain a connection with the divine in their everyday lives.</p>
                    <p>Additionally, those who complete the Gurukula training will have the option to request positions in *Yagya* (Vedic sacrificial rituals) performances worldwide. As the demand for qualified Saama Gayaka-s grows in various parts of the globe, graduates of the Saamaveda Gurukula will be uniquely positioned to serve in these important spiritual functions.</p>
                    <h4>The Global Need for Saama Gayaka-s</h4>
                    <p>As global awareness of the Vedic tradition grows, there is a pressing need for more Saama Gayaka-s who can lead and participate in *Yagya*-s and other Vedic rituals. The specialized knowledge of the Saamaveda is not only essential for ensuring the proper performance of these rituals but also for preserving one of the most ancient and sacred forms of knowledge in human history.</p>
                    <p>The “Saamaveda Gurukula” at BHASA is poised to become a beacon of this revival, ensuring that the tradition of Saama Gaana is passed down to future generations in its entirety and purity. The Gurukula will not only train individuals in the complexities of Saama chanting but also inspire a deeper connection to the divine through sound, making the Saamaveda a living tradition that continues to flourish.</p>
                    <h4>Conclusion: A Sacred Path </h4>
                    <p>The “Saamaveda Gurukula” offers a rare and invaluable opportunity for those who wish to immerse themselves in the ancient wisdom of the Vedas. Through rigorous training in the Kauthuma and Ranayaniya recensions, students will carry forward the sacred sounds of the Saamaveda, contributing to the preservation of this extraordinary tradition. By doing so, they will not only uphold the spiritual legacy of the Vedas but also become integral to the global network of Vedic rituals, ensuring that the divine connection between humanity and the gods remains unbroken.</p>
                </div>
            </Container>
            <Footer />
        </React.Fragment>
    )
}

export default Samaveda_Gurukul