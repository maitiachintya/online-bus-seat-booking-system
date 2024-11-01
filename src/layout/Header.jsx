import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import NavDropdown from 'react-bootstrap/NavDropdown';
// import busLogo from '../assets/bus-logo.png'; // Import the bus logo image

const Header = () => {
    const navLinkStyle = {
        color: '#f0f0f0', // Light color for contrast
        fontWeight: '600',
        fontSize: '18px',
        textTransform: 'uppercase',
        padding: '8px 16px',
        transition: 'color 0.3s ease',
    };

    const navLinkHover = {
        color: '#ffcc00', // Color change on hover
    };

    return (
        <div>
            <Navbar
                bg="primary"
                expand="lg"
                fixed="top" // Add this line to make the navbar fixed
                style={{
                    background: 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%)',
                    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
                    padding: '10px 0',
                }}
            >
                <Container>
                    <Navbar.Brand
                        style={{
                            color: '#ffffff',
                            fontWeight: 'bold',
                            fontSize: '26px',
                            letterSpacing: '1px',
                            textTransform: 'uppercase',
                            display: 'flex', // Use flex to align items
                            alignItems: 'center', // Center items vertically
                        }}
                        as={Link}
                        to="/"
                    >
                        <span style={{ fontSize: '2.2rem', fontWeight: 'bold', marginRight: '10px' }}>
                            🚌
                        </span>
                        BUS Ticket Booking
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link
                                style={navLinkStyle}
                                as={Link}
                                to="/"
                                onMouseEnter={(e) => (e.target.style.color = navLinkHover.color)}
                                onMouseLeave={(e) => (e.target.style.color = '#f0f0f0')}
                            >
                                Home
                            </Nav.Link>
                            <Nav.Link
                                style={navLinkStyle}
                                as={Link}
                                to="/about-page"
                                onMouseEnter={(e) => (e.target.style.color = navLinkHover.color)}
                                onMouseLeave={(e) => (e.target.style.color = '#f0f0f0')}
                            >
                                About
                            </Nav.Link>
                            <Nav.Link
                                style={navLinkStyle}
                                as={Link}
                                to="/contact-page"
                                onMouseEnter={(e) => (e.target.style.color = navLinkHover.color)}
                                onMouseLeave={(e) => (e.target.style.color = '#f0f0f0')}
                            >
                                Contact Us
                            </Nav.Link>
                            <Nav.Link
                                style={navLinkStyle}
                                as={Link}
                                to="/services"
                                onMouseEnter={(e) => (e.target.style.color = navLinkHover.color)}
                                onMouseLeave={(e) => (e.target.style.color = '#f0f0f0')}
                            >
                                Services
                            </Nav.Link>

                            <NavDropdown
                                title={<span style={navLinkStyle}>Career Sites</span>}
                                id="basic-nav-dropdown"
                            >
                                <NavDropdown.Item
                                    style={navLinkStyle}
                                    as={Link}
                                    to="/login"
                                    onMouseEnter={(e) => (e.target.style.color = navLinkHover.color)}
                                    onMouseLeave={(e) => (e.target.style.color = '#f0f0f0')}
                                >
                                    Already Have an Account?
                                </NavDropdown.Item>
                                <NavDropdown.Item
                                    style={navLinkStyle}
                                    as={Link}
                                    to="/register"
                                    onMouseEnter={(e) => (e.target.style.color = navLinkHover.color)}
                                    onMouseLeave={(e) => (e.target.style.color = '#f0f0f0')}
                                >
                                    Create Account
                                </NavDropdown.Item>
                                {/* New Dropdown Items */}
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;
