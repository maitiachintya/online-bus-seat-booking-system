import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import 'animate.css';

const ContactPage = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted!");
    };

    return (
        <div style={{
            position: 'relative',
            overflow: 'hidden',
            minHeight: '100vh',
            paddingTop: '80px',
            color: '#ffffff',
            background: 'linear-gradient(45deg, #ff758c, #ffcc67, #ff758c)', // Colorful gradient background
            animation: 'gradientBackground 10s ease infinite',
        }}>
            {/* Background Animation */}
            <style>
                {`
                @keyframes gradientBackground {
                    0% { background-position: 0% 50%; }
                    50% { background-position: 100% 50%; }
                    100% { background-position: 0% 50%; }
                }
                `}
            </style>
            {/* Main Content */}
            <Container style={{ position: 'relative', zIndex: 3 }}>
                <Row className="text-center mb-5 animate__animated animate__fadeInDown">
                    <Col>
                        <h1 style={{
                            fontSize: '4rem',
                            fontWeight: 'bold',
                            textShadow: '3px 5px 15px rgba(0, 0, 0, 0.6)',
                            marginBottom: '20px',
                            marginTop: 30,
                            color: '#ffcc00', // Bright and bold title
                            animation: 'bounce 2s infinite',
                        }}>
                            Contact Us
                        </h1>
                        <p style={{
                            fontSize: '1.5rem',
                            textShadow: '2px 3px 10px rgba(0, 0, 0, 0.4)',
                            color: '#fff',
                            letterSpacing: '0.05em',
                        }}>
                            Reach out to us anytime, we're here to help.
                        </p>
                    </Col>
                </Row>

                {/* Icons Section */}
                <Row className="text-center mb-5">
                    <Col md={4} className="animate__animated animate__zoomIn">
                        <FaPhone size={50} color="#a7c20b" />
                        <h4 style={{ marginTop: '10px', color: '#ffffff' }}>+123 456 7890</h4>
                    </Col>
                    <Col md={4} className="animate__animated animate__zoomIn" style={{ animationDelay: '0.3s' }}>
                        <FaEnvelope size={50} color="#a7c20b" />
                        <h4 style={{ marginTop: '10px', color: '#ffffff' }}>contact@example.com</h4>
                    </Col>
                    <Col md={4} className="animate__animated animate__zoomIn" style={{ animationDelay: '0.6s' }}>
                        <FaMapMarkerAlt size={50} color="#a7c20b" />
                        <h4 style={{ marginTop: '10px', color: '#ffffff' }}>123 Main St, Anytown, USA</h4>
                    </Col>
                </Row>

                {/* Contact Form */}
                <Row>
                    <Col md={6} className="mx-auto">
                        <Form onSubmit={handleSubmit} style={{
                            background: 'linear-gradient(135deg, #ff6f61, #ff85a1)',
                            borderRadius: '20px',
                            padding: '40px',
                            boxShadow: '0 10px 40px rgba(0, 0, 0, 0.3)',
                            transform: 'scale(1)',
                            transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                        }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.transform = 'scale(1.05)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform = 'scale(1)';
                            }}>
                            <Form.Group controlId="formName">
                                <Form.Label style={{ fontWeight: 'bold', fontSize: '1.4rem', color: '#ffcc00' }}>Name</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Enter your name"
                                    required
                                    style={{
                                        borderRadius: '5px',
                                        borderColor: '#ffcc00',
                                        backgroundColor: '#ffe6e6',
                                        padding: '12px',
                                        boxShadow: '0 2px 5px rgba(0, 0, 0, 0.2)',
                                    }}
                                    onFocus={(e) => {
                                        e.target.style.borderColor = '#ffcc33';
                                    }}
                                    onBlur={(e) => {
                                        e.target.style.borderColor = '#ffcc00';
                                    }}
                                />
                            </Form.Group>

                            <Form.Group controlId="formEmail">
                                <Form.Label style={{ fontWeight: 'bold', fontSize: '1.4rem', color: '#ffcc00' }}>Email</Form.Label>
                                <Form.Control
                                    type="email"
                                    placeholder="Enter your email"
                                    required
                                    style={{
                                        borderRadius: '5px',
                                        borderColor: '#ffcc00',
                                        backgroundColor: '#ffe6e6',
                                        padding: '12px',
                                        boxShadow: '0 2px 5px rgba(0, 0, 0, 0.2)',
                                    }}
                                    onFocus={(e) => {
                                        e.target.style.borderColor = '#ffcc33';
                                    }}
                                    onBlur={(e) => {
                                        e.target.style.borderColor = '#ffcc00';
                                    }}
                                />
                            </Form.Group>

                            <Form.Group controlId="formMessage">
                                <Form.Label style={{ fontWeight: 'bold', fontSize: '1.4rem', color: '#ffcc00' }}>Message</Form.Label>
                                <Form.Control
                                    as="textarea"
                                    rows={5}
                                    placeholder="Your message"
                                    required
                                    style={{
                                        borderRadius: '5px',
                                        borderColor: '#ffcc00',
                                        backgroundColor: '#ffe6e6',
                                        padding: '12px',
                                        boxShadow: '0 2px 5px rgba(0, 0, 0, 0.2)',
                                    }}
                                    onFocus={(e) => {
                                        e.target.style.borderColor = '#ffcc33';
                                    }}
                                    onBlur={(e) => {
                                        e.target.style.borderColor = '#ffcc00';
                                    }}
                                />
                            </Form.Group>

                            <Button
                                type="submit"
                                style={{
                                    backgroundColor: '#ffcc00',
                                    border: 'none',
                                    fontWeight: 'bold',
                                    fontSize: '1.25rem',
                                    marginTop: 10,
                                    padding: '12px 25px',
                                    boxShadow: '0 5px 15px rgba(0, 0, 0, 0.5)',
                                    transition: 'transform 0.3s ease',
                                }}
                                onMouseEnter={(e) => {
                                    e.target.style.transform = 'scale(1.1)';
                                }}
                                onMouseLeave={(e) => {
                                    e.target.style.transform = 'scale(1)';
                                }}
                            >
                                Send Message
                            </Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default ContactPage;
