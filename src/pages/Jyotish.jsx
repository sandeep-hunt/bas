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
            <title>{`${settings?.site_title || "Bharata Arseya Samsthan"} | Jyotish`}</title>
            <meta name="description" content={settings.site_description} />
            <meta name="keywords" content={settings.site_keywords}></meta>
        </Helmet>
            <div className="projects-banner" style={{ backgroundImage: `url(${Pro_bg4})` }}>
                <div className="projects-banner-inner">
                    <Breadcrumb>
                        <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/" }}><img src={HomeIcon} className='img-fluid' alt="" />Home</Breadcrumb.Item>
                        <Breadcrumb.Item active><img src={EditIcon} className='img-fluid' alt="" />Jyotish</Breadcrumb.Item>
                    </Breadcrumb>
                    <h2 className='text-white'>Jyotiśa Gurukul</h2>
                    <img src={Icon4} className='img-fluid mb-2' alt="" />
                    <p className='text-white paragraph2'>Astronomical Jyotish & phal jyotish as propounded by various rishis will be taught. Palmistry, prashna Jyotiśa, nadi Jyotiśa etc. shall also be taught.</p>
                </div>
            </div>
            <Container fluid>
                <div className="projects-content">
                    <h4>Jyotish: The Eyes of the Vedas</h4>
                    <p>Jyotish, often referred to as the "eyes of the Vedas" and the "jewel in the crown of the Vedas," holds a profound place in Vedic knowledge and wisdom. It is not just a system of astrology but a complete science of time and celestial movements, deeply intertwined with the Vedic worldview. At BHASA, Jyotish is recognized as an essential aspect of the Vedic tradition, and there are immediate plans to offer comprehensive Jyotish classes with proper certification for those seeking to master this ancient and sacred discipline.</p>
                    <h4>The Significance of Jyotish</h4>
                    <p>In the Vedic tradition, Jyotish serves as the guiding light through which humanity can understand the influences of the planets, stars, and cosmic cycles. It is known as the "eye of the Vedas" because it helps reveal what is otherwise hidden to the human eye—cosmic patterns and divine intentions that influence life on Earth.</p>
                    <p>The sages of ancient India, through their deep meditations and profound understanding of the cosmos, developed Jyotish as a means to harmonize human life with the cosmic order. By understanding the movements of the planets and stars, one can make informed decisions in life, be it in matters of health, relationships, career, or spiritual growth. Jyotish is a holistic science that connects the microcosm of human life to the macrocosm of the universe.</p>
                    <h4>Parashariya and Jaiminiya Traditions: A Comprehensive Approach</h4>
                    <p>To ensure a well-rounded education, the Jyotish classes at BHASA will begin with a combination of two of the most respected traditions in Jyotish—Parashariya and Jaiminiya.</p>
                    <p>- Parashariya Tradition: Named after the great sage Parashara, this tradition forms the foundation of classical Vedic astrology. It focuses on *hora shastra* (predictive astrology), the twelve houses, nine planets, and various dashas (planetary periods). The Parashariya tradition is widely practiced and teaches how to read and interpret natal charts, predict future events, and offer remedies for planetary afflictions.</p>
                    <p>- Jaiminiya Tradition: Named after Sage Jaimini, this tradition offers a unique and different perspective on Jyotish. It emphasizes *karakas* (significators), *chara dashas* (moveable planetary periods), and Raja Yogas, which are combinations that lead to fame, prosperity, and success. Jaiminiya Jyotish provides powerful tools for predictive analysis, complementing the Parashariya tradition.</p>
                    <p>By combining these two systems, BHASA’s Jyotish program will offer students a comprehensive view of Vedic astrology, allowing them to approach predictions from multiple perspectives and gain a deeper understanding of the interplay of cosmic forces.</p>
                    <h4>Expanding into Bharatiya Predictive Knowledge Systems</h4>
                    <p>While the initial focus will be on the Parashariya and Jaiminiya traditions, BHASA plans to expand the program to include other Bharatiya (Indian) predictive knowledge systems. This will encompass a wide range of astrology and divination practices that have been used throughout India’s long history. These systems include:</p>
                    <p>- Tajika: A system of astrology that focuses on annual solar returns and horary astrology, predicting events based on the position of the planets at a given moment in time.</p>
                    <p>- Krishnamurti Paddhati (KP): A modern and highly accurate predictive system that simplifies Vedic astrology while offering precise results based on the timing of planetary transits and sub-lords.</p>
                    <p>- Prashna Marga: A system of horary astrology that answers specific questions based on the moment they are asked.</p>
                    <p>By incorporating these diverse systems, BHASA aims to offer students a comprehensive understanding of Jyotish and the rich tradition of Bharatiya predictive sciences.</p>
                    <h4>Certification and Practical Application</h4>
                    <p>BHASA's Jyotish classes will not only offer theoretical knowledge but also emphasize practical application. Students will be trained to interpret birth charts, make accurate predictions, and offer remedies for planetary imbalances. Whether students aim to become professional astrologers or use Jyotish as a tool for personal growth and understanding, the certification will equip them with the necessary skills and credibility.</p>
                    <p>Upon completing the program, students will receive certification, adding value to their knowledge and enhancing their professional prospects. The certification from BHASA will reflect a deep understanding of both the Parashariya and Jaiminiya traditions, as well as exposure to other Indian predictive systems.</p>
                    <h4>Jyotish: A Tool for Spiritual and Practical Growth</h4>
                    <p>Jyotish is much more than a predictive tool—it is a pathway to spiritual growth and self-realization. By understanding the patterns of the cosmos, individuals can align themselves with the natural flow of life and navigate challenges with greater ease. Jyotish provides a cosmic map, helping people understand their karmic patterns, life lessons, and spiritual purpose.</p>
                    <p>At BHASA, the approach to Jyotish will go beyond mere prediction. Students will be encouraged to see Jyotish as a holistic science that offers insights into every aspect of life, including health, relationships, and spiritual evolution. Through the study of Jyotish, learners will gain a deeper understanding of themselves and their place in the universe.</p>
                    <h4>Conclusion: Brightening life with Jyotish</h4>
                    <p>As the "eyes of the Vedas," Jyotish offers unparalleled insight into the workings of the cosmos and its impact on human life. BHASA’s Jyotish program aims to preserve and propagate this sacred science, offering students a chance to dive deep into its mysteries. With certification in both the Parashariya and Jaiminiya traditions and future expansions into other Bharatiya systems, this program is set to become a cornerstone of Vedic learning.</p>
                    <p>Jyotish is not just a predictive tool—it is a spiritual compass, guiding individuals on their journey through life. At BHASA, Jyotish will be taught as both a practical science and a spiritual practice, empowering students to illuminate their own lives and the lives of others through the divine wisdom of the Vedas.</p>
                </div>
            </Container>
        </React.Fragment>
    )
}

export default Jyotish