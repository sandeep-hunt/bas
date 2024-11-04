import React, { useEffect } from 'react'
import Breadcrumb from 'react-bootstrap/Breadcrumb'
import About_bg from '../assets/images/msic/about_bg.png'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import { Col, Container, Row } from 'react-bootstrap'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import AboutImg from '../assets/images/msic/aboutImg.png'
import Team1 from '../assets/images/team/1.png'
import Team2 from '../assets/images/team/2.png'
import Team3 from '../assets/images/team/3.png'
import Team4 from '../assets/images/team/4.png'
import Slider from "react-slick"
import Advisory1 from '../assets/images/advisory/1.png'
import Advisory2 from '../assets/images/advisory/2.png'
import Advisory3 from '../assets/images/advisory/3.png'
import Advisory4 from '../assets/images/advisory/4.png'
import HomeIcon from '../assets/images/icons/home.svg'
import EditIcon from '../assets/images/icons/edit.svg'

const data = [
    {
        image: Advisory1,
        name: 'Dr. Vamshi Krishna Ghanapathi',
        designation: 'Chief Advisor (Veda-s)',
        description: '<h4>Dr. Vamshi Krishna Ghanapathi</h4><h5>Chief Advisor (Veda-s)</br>Trustee, Avadhoota Datta Peetham<br/>Director, SVAMI | Chief Functionary - Sri Datta Venkateswara<br/>Aagama Vidya Kendram & Temple, Mysore</h5><br/><p>Dr. Vamshi Krishna Ghanapathi is a distinguished scholar and spiritual leader in the realm of Vedic studies. As a Trustee of Avadhoota Datta Peetham and the Chief Functionary of Sri Datta Venkateswara Aagama Vidya Kendram & Temple in Mysore, his leadership has been instrumental in preserving and promoting Vedic knowledge and traditions. He also serves as the Director of SVAMI (Sri Venkateshwara Agama Mahavidyalaya Institution), where he oversees educational initiatives focused on the Vedic sciences.</p><p>A visionary in his field, Dr. Ghanapathi founded the Sanatana Guru Sampradaya Pratishthanam and is the Founding Trustee of Dharma Poshanam, organizations dedicated to fostering the values and teachings of the Vedas. His work as the Director of the Vaakya Project & Computational Tools for Vedic Learning has played a key role in modernizing Vedic education by integrating computational technologies, making these ancient teachings more accessible to future generations.His guidance is sought after in numerous temples, including the Marakata Rajarajeswari Temple in Vijayawada, where he serves as an advisor. Additionally, he is a PhD Guide for Vedic Research at Karnataka Sanskrit University in Bengaluru, mentoring scholars in advanced Vedic studies. His expertise in Vedic Geography and his leadership across multiple initiatives have earned him recognition as a thought leader in both spiritual and academic domains.</p>',
    },
    {
        image: Advisory2,
        name: 'Dr.Bhagyashree Yargop',
        designation: 'Chief Advisor (Vedic Geography)',
        description: "<h4>Dr. Bhagyashree Yargop</h4><h5>Coastal Geomorphologist & Researcher in Ancient Indian Geographical Knowledge</h5><br/><p>Dr. Bhagyashree Yargop is a distinguished Coastal Geomorphologist with profound expertise in Ancient Indian Geographical Knowledge. Her career is highlighted by her pivotal role in establishing the **Department of Earth Sciences** at a leading university, where she has significantly shaped the academic landscape for emerging geographers and researchers. Her leadership is further demonstrated through her administrative roles as a senior college administrator, where she has seamlessly integrated her passion for education and research to influence academic policies and initiatives.</p><p>Dr. Yargop's research extends beyond traditional geographical studies, encompassing a deep exploration of Ancient Indian Geographical Knowledge. She actively investigates how historical geographical insights can be integrated with modern scientific understanding. Her contributions not only illuminate ancient practices but also enhance contemporary approaches to coastal geomorphology, thus broadening our grasp of Earth's dynamic processes.</p><p>Beyond her professional achievements, Dr. Yargop is passionate about **Indian classical music**, which complements her academic pursuits and enriches her life. Her love for travel, exploration, and reading further inspires her, allowing her to draw from a wide array of experiences and insights. Dr. Yargop’s multifaceted career continues to inspire students and researchers, making substantial contributions to both modern and traditional geographical studies.</p>",
    },
    {
        image: Advisory3,
        name: 'Nikhil Ghorpadkar',
        designation: 'Advisor (Tāl Vādya)',
        description: '<h4>Nikhil Ghorpadkar</h4><h5>Advisor (Tāl Vādya)</h5><br/><p>Nikhil Ghorpadkar is a celebrated Pakhavaj player from Pune, India, whose captivating performances have mesmerized audiences both nationally and internationally for over two decades. Recently, he was honored with a residency at Abbaye De Royaumont in France, where he explored "F K Bass, A Journey in Time & Space," further showcasing his innovative approach to traditional music.</p><p>Coming from a renowned lineage of Pakhavaj maestros, Nikhil upholds the rich legacy of his family, starting from his late forefather, Pundit Shankar Bhaiyya Ghorpadkar, to his esteemed grandfather, Late Pundit Vasantarao Ghorpadkar. He carries forward the Pānsé tradition of Pakhāvaj with dedication and expertise. His father’s maternal side was distinguished by musicians who served as court musicians under the Péśwā-s, adding to the familys illustrious musical heritage. Nikhil has also broadened his musical knowledge through training in the Kudau Singh tradition, learned from the late Pundit Ramākānt Pathak of Lucknow.</p><p>An empanelled artist with the Indian Council for Cultural Relations (ICCR), Nikhil is a regular performer and graded artist of All India Radio. He also serves as a distinguished Guru at the Lalit Kala Kendra, University of Pune, and the School of Performing Arts, Bharati Vidyapeeth Deemed University, Pune. His contributions extend to conducting workshops and masterclasses for various institutions and organizations. Nikhil’s association with the Film and Television Institute of India (FTII) includes completing a summer Film Appreciation course and participating in numerous film projects, following in the footsteps of his great-grandfather and grandfather, who were involved in film music.</p>',
    },
    {
        image: Advisory4,
        name: 'Shri. Uttom Mihir Roy',
        designation: 'Chief Advisor (Physical Security)',
        description: "<h4>Shri. Uttom Mihir Roy</h4><h5>Chief Advisor (Physical Security)</h5><br/><p>Shri Uttom Mihir Roy is a highly experienced security consultant and expert in physical security management. With an illustrious career spanning several decades, he has held key positions in various national-level organizations. As the former General Manager and Head of Security for the Mumbai region at the Oil & Natural Gas Commission (ONGC), under the Ministry of Petroleum & Gas, Shri Roy was responsible for overseeing the security operations across critical areas including parts of Gujarat, Goa, and Maharashtra. His leadership ensured the safety and protection of one of India's most vital sectors.</p><p>In addition to his tenure with ONGC, Shri Roy has also served the Department of Atomic Energy, where he contributed to securing highly sensitive and critical installations. His extensive background in safeguarding national resources and infrastructure highlights his expertise in managing complex security challenges across multiple domains.</p><p>Now, as a Chief Advisor on Physical Security, Shri Roy brings his wealth of experience to the table, providing strategic guidance on security matters, threat assessment, and risk mitigation for organizations across various sectors. His insights and deep understanding of security protocols make him an invaluable asset in ensuring the protection of assets and personnel in high-risk environments.</p>",
    },
]

const AboutUs = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    var settings = {
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 1000,
        autoplaySpeed: 5000,
        cssEase: "linear",
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                    arrows: false
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1,
                    arrows: false,
                    dots: true,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                    dots: true,
                }
            }
        ]
    };
    return (
        <React.Fragment>
            <Header />
            <div className="event-banner" style={{ backgroundImage: `url(${About_bg})` }}>
                <div className="event-banner-inner">
                    <Breadcrumb>
                        <Breadcrumb.Item href="#"><img src={HomeIcon} className='img-fluid' alt="" />Home</Breadcrumb.Item>
                        <Breadcrumb.Item active><img src={EditIcon} className='img-fluid' alt="" />About Us</Breadcrumb.Item>
                    </Breadcrumb>
                    <h2 className='text-white'>About Us</h2>
                    <p className='text-white paragraph1'>We are dedicated to preserving and promoting the ancient wisdom of Vedic traditions through education, music, and culture. Our mission is to create a platform for learning, growth, and the revival of timeless knowledge systems.</p>
                </div>
            </div>
            <Container fluid>
                <div className="about-container">
                    <div className="autp">
                        <h2 className='text-main tw-600'>About Us</h2>
                        <p className='text-main paragraph1'>Bhārata Āṛṣeya Saṅsthān is a dedicated initiative to celebrate, share, and sustain the essence of Bhartiya Sanskriti worldwide. Inspired by the vision of our ancient Rishi-s, we seek to revive and promote the timeless wisdom embedded in Bhartiya traditions, from Vedic literature to spiritual practices, shlokas, music, and holistic wellness. Through our extensive programs—such as the Dhrupad Gurukul, Samaveda Gurukul, and Jyotisha Gurukul—we offer a range of cultural and educational experiences that bridge ancient teachings with contemporary understanding. Our commitment to research, publications, and global events serves as a platform to deepen awareness and respect for Bhartiya heritage, making these invaluable teachings accessible to communities across the world. Join us in our journey to honor and share the transformative power of Bhartiya Sanskriti.</p>
                    </div>
                    <div className="aumv">
                        <Row>
                            <Col sm={12} lg={7}>
                                <div className="aumvtp">
                                    <h2 className='text-main tw-600'>Our Mission</h2>
                                    <p className='text-main paragraph1'>To be a global beacon of Bhartiya wisdom and cultural heritage, inspiring individuals and communities worldwide to embrace, respect, and preserve the ancient knowledge and traditions of our Rishi-s, fostering a harmonious and sustainable world aligned with their timeless worldview.</p>
                                </div>
                                <div className="aumvbtm">
                                    <h2 className='text-main tw-600'>Our Vision</h2>
                                    <p className='text-main paragraph1'>Our mission is to promote, preserve, and share the profound wisdom of Bhartiya Sanskriti, as imparted by the Rishi-s, across generations and borders. Through educational initiatives, research, cultural events, and publications, we aim to rekindle a connection with Bhartiya traditions—spanning literature, music, shastras, meditation, and beyond—creating a bridge between ancient teachings and modern life. We are dedicated to fostering an understanding and appreciation of these practices globally and supporting the spiritual and intellectual growth of all those who seek to learn.</p>
                                </div>
                            </Col>
                            <Col sm={12} lg={5} className='d-flex justify-content-end'>
                                <img src={AboutImg} className='img-fluid' alt="" />
                            </Col>
                        </Row>
                    </div>
                    <div className="auot">
                        <h2 className='text-main text-center tw-600'>Our Team</h2>
                        <div className="auotinr">
                            <Row>
                                <Col xs={12} sm={6} lg={3}>
                                    <div className="auotinitm">
                                        <div className="auotinrct">
                                            <h5 className='m-0'>Prof. Dr. Subroto Roy</h5>
                                            <span className='subHdng'>Founding Director</span>
                                        </div>
                                        <div className="auotinrit">
                                            <img src={Team1} className='img-fluid' alt="" />
                                        </div>
                                    </div>
                                </Col>
                                <Col xs={12} sm={6} lg={3}>
                                    <div className="auotinitm">
                                        <div className="auotinrct">
                                            <h5 className='m-0'>Vijay Koli</h5>
                                            <span className='subHdng'>Director</span>
                                        </div>
                                        <div className="auotinrit">
                                            <img src={Team2} className='img-fluid' alt="" />
                                        </div>
                                    </div>
                                </Col>
                                <Col xs={12} sm={6} lg={3}>
                                    <div className="auotinitm">
                                        <div className="auotinrct">
                                            <h5 className='m-0'>Smt. Alpana Ganguly</h5>
                                            <span className='subHdng'>Quality Assurance Director</span>
                                        </div>
                                        <div className="auotinrit">
                                            <img src={Team3} className='img-fluid' alt="" />
                                        </div>
                                    </div>
                                </Col>
                                <Col xs={12} sm={6} lg={3}>
                                    <div className="auotinitm">
                                        <div className="auotinrct">
                                            <h5 className='m-0'>Smt. Apurva Sathe</h5>
                                            <span className='subHdng'>Head of Sustainability Projects</span>
                                        </div>
                                        <div className="auotinrit">
                                            <img src={Team4} className='img-fluid' alt="" />
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </div>
                    <div className="auab">
                        <h2 className='text-main text-center tw-600'>Advisory Board</h2>
                        <div className="auabcnt">
                            <Slider {...settings}>
                                {
                                    data.map((item, index) => {
                                        return (
                                            <div key={index}>
                                                <div className="auabcnt-itm">
                                                    <Row>
                                                        <Col sm={12} lg={4}>
                                                            <div className="auabcnt-itmlf">
                                                                <img src={item.image} className='img-fluid' alt="" />
                                                            </div>
                                                            <div className="auabcnt-itmrt">
                                                                <h4 className=' text-main m-0'>{item.name}</h4>
                                                                <p className='text-main tw-600'>{item.designation}</p>
                                                            </div>
                                                        </Col>
                                                        <Col sm={12} lg={8}>
                                                            <div className="auabcnt-itmrit" dangerouslySetInnerHTML={{ __html: item.description }}>
                                                            </div>
                                                        </Col>
                                                    </Row>
                                                </div>
                                            </div>
                                        );
                                    })
                                }
                            </Slider>
                        </div>
                    </div>
                    <div className="auctu">
                        <h2 className='text-main text-bold'>Contact Us</h2>
                        <Row className='auctuinr'>
                            <Col sm={12} lg={7}>
                                <Row>
                                    <Col sm={12} md={6}>
                                        <Form.Group className='form-group'>
                                            <label>First Name<span style={{ color: `red` }}>*</span></label>
                                            <input className='form-control' type="text" name="name" placeholder='Your First Name' />
                                        </Form.Group>
                                    </Col>
                                    <Col sm={12} md={6}>
                                        <Form.Group className='form-group'>
                                            <label>Last Name<span style={{ color: `red` }}>*</span></label>
                                            <input className='form-control' type="text" name="name" placeholder='Your Last Name' />
                                        </Form.Group>
                                    </Col>
                                    <Col sm={12} md={6}>
                                        <Form.Group className='form-group'>
                                            <label>Mail<span style={{ color: `red` }}>*</span></label>
                                            <input className='form-control' type="email" name="name" placeholder='Your Mail' />
                                        </Form.Group>
                                    </Col>
                                    <Col sm={12} md={6}>
                                        <Form.Group className='form-group'>
                                            <label>Phone<span style={{ color: `red` }}>*</span></label>
                                            <input className='form-control' type="text" name="name" placeholder='Your Phone' />
                                        </Form.Group>
                                    </Col>
                                    <Col sm={12}>
                                        <Form.Group className='form-group'>
                                            <label>Message<span style={{ color: `red` }}>*</span></label>
                                            <textarea rows={6} className='form-control' type="text" name="name" placeholder='Type Your Message Here...' />
                                        </Form.Group>
                                    </Col>
                                </Row>
                                <Button className='btn-main'>Send Message</Button>
                            </Col>
                        </Row>
                    </div>
                </div>
            </Container>
            <Footer />
        </React.Fragment>
    )
}

export default AboutUs