import React, { useEffect, useState } from 'react'
import Icon3 from '../assets/images/icons/pro_icon3.svg'
import { Container } from 'react-bootstrap'
import Breadcrumb from 'react-bootstrap/Breadcrumb'
import Pro_bg3 from '../assets/images/msic/project_bg3.png'
import HomeIcon from '../assets/images/icons/home.svg'
import EditIcon from '../assets/images/icons/edit.svg'
import axios from 'axios'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'

const Girvaan_Bhasa = () => {
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
                <title>{`${settings?.site_title || "Bharata Arseya Samsthan"} | Girvaan Bhasa`}</title>
                <meta name="description" content={settings.site_description} />
                <meta name="keywords" content={settings.site_keywords}></meta>
            </Helmet>
            <div className="projects-banner" style={{ backgroundImage: `url(${Pro_bg3})` }}>
                <div className="projects-banner-inner">
                    <Breadcrumb>
                        <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/" }}><img src={HomeIcon} className='img-fluid' alt="" />Home</Breadcrumb.Item>
                        <Breadcrumb.Item active><img src={EditIcon} className='img-fluid' alt="" />Girvaan Bhasa</Breadcrumb.Item>
                    </Breadcrumb>
                    <h2 className='text-white'>Girvaan Bhasa</h2>
                    <img src={Icon3} className='img-fluid mb-2' alt="" />
                    <p className='text-white paragraph1'>Girvaan bhasa in its Kristine form for conversation shall be imparted.</p>
                </div>
            </div>
            <Container fluid>
                <div className="projects-content">
                    <h4>Girvaan Bhasha: The Language of the Devatas</h4>
                    <p>Girvaan Bhasha, often referred to as *Samskrita* or *Geervaani*, is considered the divine language of the *Devata*-s (gods) in the Indian spiritual tradition. Rich in its cultural, philosophical, and literary heritage, this ancient language has been revered for centuries as a medium of communication not just between humans, but between humans and the divine.</p>
                    <p>BHASA is proud to announce the introduction of a comprehensive Girvaan Bhasha learning program in collaboration with one of India's top public universities. This program is designed to make the language accessible and practical for modern learners, while preserving its sacred and literary essence.</p>
                    <h4>The Sacredness of Girvaan Bhasha</h4>
                    <p>Girvaan Bhasha is not merely a language; it is a vessel for the profound wisdom of the Vedas, Upanishads, and other ancient texts. Through the centuries, it has been the chosen medium for conveying the highest philosophical thoughts, spiritual knowledge, and scientific discoveries. This language's precise grammar and vast vocabulary enable the expression of subtle and intricate ideas, making it the perfect tool for both spiritual and intellectual endeavors.</p>
                    <p>Known as *Devabhasha* (the language of the gods), Girvaan Bhasha occupies a special place in Hindu rituals and sacred texts. Chanting mantras in Girvaan Bhasha during Vedic rituals is believed to have a powerful effect, connecting the devotee directly to the divine energy of the cosmos. It is this unique blend of spiritual and intellectual richness that the *Girvaan Bhasha* learning program seeks to convey.</p>
                    <h4>Fast-Track Learning: Speak in a Month, Comprehend in a Year</h4>
                    <p>The Girvaan Bhasha program at BHASA has been carefully structured to meet the needs of modern learners without compromising the depth and integrity of the language.</p>
                    <p>- Speak in a Month: The first phase of the program focuses on conversational Girvaan Bhasha. Learners will be introduced to the foundational elements of the language, enabling them to speak basic sentences within just one month. Through immersive learning techniques, daily practice, and expert guidance, students will gain confidence in using the language for everyday communication.</p>
                    <p>- Read and Comprehend in a Year: In the second phase of the program, the focus shifts to reading and comprehending Girvaan Bhasha in its literary form. Within a year, learners will be able to read and understand classical texts, including ancient scriptures, poetry, and philosophical works. This holistic approach ensures that learners are not only able to communicate in Girvaan Bhasha but also engage with its rich literary and spiritual tradition.</p>
                    <h4>A Pathway to Higher Learning</h4>
                    <p>In addition to the basic and intermediate levels, BHASA is planning to establish higher learning centers dedicated to the advanced study of Girvaan Bhasha. These centers will offer specialized courses for those who wish to delve deeper into the linguistic, literary, and philosophical aspects of the language. Graduates of the program will be encouraged to pursue advanced studies, contributing to the preservation and revival of this ancient tradition.</p>
                    <p>Upon successful completion of the program, learners will be awarded certificates, adding both credibility and recognition to their newly acquired skills. This certification will also serve as a gateway to further opportunities in higher education, research, and teaching in the field of Sanskrit and Vedic studies.</p>
                    <h4>Bridging the Ancient and the Modern</h4>
                    <p>The collaboration with a leading Indian university ensures that the Girvaan Bhasha program is both academically rigorous and globally recognized. This partnership reflects BHASA’s commitment to making Sanskrit relevant in today’s world while maintaining its spiritual significance. The program's structure is designed to make learning this ancient language accessible to people from all walks of life—whether they are scholars, spiritual seekers, or those simply curious about India’s cultural heritage.</p>
                    <p>With modern learning methods, the program provides flexibility and support, helping learners make steady progress. This blend of tradition and modernity ensures that Girvaan Bhasha will not only survive but thrive in the contemporary world.</p>
                    <h4>Conclusion: Reviving the Language of the Gods</h4>
                    <p>The Girvaan Bhasha program at BHASA offers a unique opportunity for individuals to connect with the profound wisdom of the past. In learning Girvaan Bhasha, students are not just mastering a language; they are tapping into a deep well of spiritual, philosophical, and cultural knowledge.</p>
                    <p>By making this sacred language accessible and practical, BHASA is playing a crucial role in reviving one of the most important languages of human civilization. Through speaking, reading, and understanding Girvaan Bhasha, learners will embark on a journey that transcends the ordinary, connecting them with the divine heritage of India and the eternal truths it holds.</p>
                </div>
            </Container>
        </React.Fragment>
    )
}

export default Girvaan_Bhasa