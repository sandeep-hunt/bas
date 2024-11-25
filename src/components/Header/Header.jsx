import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import './Header.css';
import { Link } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';
import axios from 'axios';

function Header() {
  const [settings, setsettings] = useState('');
  const [showOffcanvas, setShowOffcanvas] = useState(false);

  useEffect(() => {
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

  const handleCloseOffcanvas = () => setShowOffcanvas(false);

  return (
    <>
      {['lg'].map((expand) => (
        <Navbar key={expand} expand={expand} className="shadow-sm">
          <Container fluid>
            <Navbar.Brand as={Link} to="/">
              <img src={import.meta.env.VITE_BACKEND_API + settings.site_logo} className="logo" alt="Logo" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} onClick={() => setShowOffcanvas(true)} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
              show={showOffcanvas}
              onHide={handleCloseOffcanvas}
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`} />
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="flex-grow-1">
                  <Nav.Link as={Link} to="/" onClick={handleCloseOffcanvas}>
                    Home
                  </Nav.Link>
                  <NavDropdown
                    title="Projects"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                  >
                    <Row>
                      <Col sm={12} lg={6}>
                        <NavDropdown.Item as={Link} to="/dhrupad_gurukul" onClick={handleCloseOffcanvas}>
                          <strong className="dropdown-menu-text">Dhrupad Gurukul</strong>
                          <p className="dropdown-menu-tag">Revitalising pristine Bhāratīya Sangeet</p>
                        </NavDropdown.Item>
                      </Col>
                      <Col sm={12} lg={6}>
                        <NavDropdown.Item as={Link} to="/samaveda_gurukul" onClick={handleCloseOffcanvas}>
                          <strong className="dropdown-menu-text">Sāmavéda Gurukul</strong>
                          <p className="dropdown-menu-tag">Pre-historic Melodies & Wisdom</p>
                        </NavDropdown.Item>
                      </Col>
                      <Col sm={12} lg={6}>
                        <NavDropdown.Item as={Link} to="/girvaan_bhasa" onClick={handleCloseOffcanvas}>
                          <strong className="dropdown-menu-text">Gīrvāṇ Bhasa</strong>
                          <p className="dropdown-menu-tag">A bridge to divinity</p>
                        </NavDropdown.Item>
                      </Col>
                      <Col sm={12} lg={6}>
                        <NavDropdown.Item as={Link} to="/jyotisha_gurkul" onClick={handleCloseOffcanvas}>
                          <strong className="dropdown-menu-text">Jyotiśa Gurukul</strong>
                          <p className="dropdown-menu-tag">Eyes of the Veda-s</p>
                        </NavDropdown.Item>
                      </Col>
                    </Row>
                  </NavDropdown>
                  <Nav.Link as={Link} to="/gallery" onClick={handleCloseOffcanvas}>
                    Gallery
                  </Nav.Link>
                  <Nav.Link as={Link} to="/events" onClick={handleCloseOffcanvas}>
                    Events
                  </Nav.Link>
                  <Nav.Link as={Link} to="/blogs&articles" onClick={handleCloseOffcanvas}>
                    Blogs & Articles
                  </Nav.Link>
                  <Nav.Link as={Link} to="/join-us" onClick={handleCloseOffcanvas}>
                    Join Us
                  </Nav.Link>
                  <Nav.Link as={Link} to="/about-us" onClick={handleCloseOffcanvas}>
                    About Us
                  </Nav.Link>
                  <Nav.Link as={Link} to="/donate" className="btn-mainLink" onClick={handleCloseOffcanvas}>
                    &#x2764;&nbsp;Donate
                  </Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default Header;
