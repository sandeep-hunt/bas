import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import './Header.css';
import Logo from '../../assets/images/logo.svg';
import { Link } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';

function Header() {
  return (
    <>
      {['lg'].map((expand) => (
        <Navbar key={expand} expand={expand} className='shadow-sm'>
          <Container fluid>
            <Navbar.Brand as={Link} to="/">
              <img src={Logo} className='logo' alt="Logo" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Offcanvas
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="flex-grow-1">
                  <Nav.Link as={Link} to="/">Home</Nav.Link>
                  <NavDropdown
                    title="Projects"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                  >
                    <Row>
                      <Col sm={12} lg={6}>
                        <NavDropdown.Item as={Link} to="/dhrupad_gurukul">
                          <strong className='dropdown-menu-text'>Dhrupad Gurukul</strong>
                          <p className='dropdown-menu-tag'>Revitalising pristine Bhartiya Sangeet</p>
                        </NavDropdown.Item>
                      </Col>
                      <Col sm={12} lg={6}>
                        <NavDropdown.Item as={Link} to="/samaveda_gurukul">
                        <strong className='dropdown-menu-text'>Samaveda Gurukul</strong>
                        <p className='dropdown-menu-tag'>Pre-historic Melodies & Wisdom </p>
                        </NavDropdown.Item>
                      </Col>
                      <Col sm={12} lg={6}>
                        <NavDropdown.Item as={Link} to="/girvaan_bhasa">
                          <strong className='dropdown-menu-text'>Girvaan Bhasa</strong>
                          <p className='dropdown-menu-tag'>A bridge to divinity</p>
                        </NavDropdown.Item>
                      </Col>
                      <Col sm={12} lg={6}>
                        <NavDropdown.Item as={Link} to="/jyotish">
                          <strong className='dropdown-menu-text'>Jyotisha Gurukul</strong>
                          <p className='dropdown-menu-tag'>Eyes of the Veda-s</p>
                        </NavDropdown.Item>
                      </Col>
                    </Row>
                  </NavDropdown>
                  <Nav.Link as={Link} to="/gallery">Gallery</Nav.Link>
                  <Nav.Link as={Link} to="/events">Events</Nav.Link>
                  <Nav.Link as={Link} to="/blogs&articles">Blogs & Articles</Nav.Link>
                  <Nav.Link as={Link} to="/join-us">Join Us</Nav.Link>
                  <Nav.Link as={Link} to="/about-us">About Us</Nav.Link>
                  <Nav.Link as={Link} to="/donate" className='btn-mainLink'>&#x2764;&nbsp;Donate</Nav.Link>
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