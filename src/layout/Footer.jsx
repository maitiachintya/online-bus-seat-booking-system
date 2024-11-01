import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer style={{ backgroundColor: '#003366', color: '#fff', padding: '20px 0' }}>
            <Container>
                <Row>
                    <Col md={4} className="text-center">
                    <span style={{ fontSize: '2.95rem', fontWeight: 'bold', marginRight: '10px' }}>
                    🚌
                </span>
                        <h5>About Us</h5>
                        <p>
                            We are dedicated to providing the best bus ticket booking experience for our customers. Our mission is to make travel accessible and hassle-free.
                        </p>
                    </Col>
                    <Col md={4} className="text-center">
                        <h5>Quick Links</h5>
                        <ul style={{ listStyleType: 'none', padding: 0 }}>
                            <li><a href="/" style={{ color: '#fff' }}>Home</a></li>
                            <li><a href="/about-page" style={{ color: '#fff' }}>About</a></li>
                            <li><a href="/services" style={{ color: '#fff' }}>Services</a></li>
                            <li><a href="/contact-page" style={{ color: '#fff' }}>Contact Us</a></li>
                        </ul>
                    </Col>
                    <Col md={4} className="text-center">
                        <h5>Contact Us</h5>
                        <p>Email: support@busticket.com</p>
                        <p>Phone: +123 456 7890</p>
                        <div>
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                                <FaFacebook size={30} style={{ margin: '0 10px', color: '#fff' }} />
                            </a>
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                                <FaTwitter size={30} style={{ margin: '0 10px', color: '#fff' }} />
                            </a>
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                                <FaInstagram size={30} style={{ margin: '0 10px', color: '#fff' }} />
                            </a>
                            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                                <FaLinkedin size={30} style={{ margin: '0 10px', color: '#fff' }} />
                            </a>
                        </div>
                    </Col>
                </Row>
                <Row className="text-center mt-4">
                    <Col>
                        <p style={{ margin: 0 }}>
                            &copy; {new Date().getFullYear()} BUS Ticket Booking. All Rights Reserved.
                        </p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;
