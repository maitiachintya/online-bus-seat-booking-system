// src/components/Dashboard.js

import React from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useUserContext } from '../users/UserContext'; // Import the User Context

const Dashboard = () => {
    const user = useUserContext(); // Get user data from context

    return (
        <div
            style={{
                background: 'linear-gradient(135deg, #ff7e5f 0%, #feb47b 25%, #ffcc00 50%, #ff5722 75%, #673ab7 100%)',
                minHeight: '100vh',
                color: 'black',
                padding: '50px 0',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }}
        >
            <Container>
                <Row className="text-center mb-5">
                    <Col>
                        <h1 style={{ fontSize: '3rem', fontWeight: 'bold', marginTop: 30 }}>
                            Hello {user?.firstName || 'Passengers'}, Welcome to Your Dashboard!
                        </h1> {/* Personalized greeting */}
                        <p style={{ fontSize: '1.25rem' }}>
                            Here you can manage your bus reservations easily.
                        </p>
                    </Col>
                </Row>

                <Row className="justify-content-center">
                    <Col md={4} className="mb-4">
                        <Card style={{ backgroundColor: '#ffffff', borderRadius: '10px', boxShadow: '0 4px 20px rgba(0,0,0,0.1)' }}>
                            <Card.Body>
                                <Card.Title style={{ fontWeight: 'bold', color: '#0072ff' }}>Your Reservations</Card.Title>
                                <Card.Text>
                                    View and manage your bus reservations.
                                </Card.Text>
                                <Button as={Link} to="/view-reservations" variant="primary" style={{ width: '100%' }}>
                                    View Reservations
                                </Button>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col md={4} className="mb-4">
                        <Card style={{ backgroundColor: '#ffffff', borderRadius: '10px', boxShadow: '0 4px 20px rgba(0,0,0,0.1)' }}>
                            <Card.Body>
                                <Card.Title style={{ fontWeight: 'bold', color: '#ff5722' }}>Book a Bus</Card.Title>
                                <Card.Text>
                                    Find and book a bus for your next trip.
                                </Card.Text>
                                <Button as={Link} to="/book-bus" variant="danger" style={{ width: '100%' }}>
                                    Book Now
                                </Button>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col md={4} className="mb-4">
                        <Card style={{ backgroundColor: '#ffffff', borderRadius: '10px', boxShadow: '0 4px 20px rgba(0,0,0,0.1)' }}>
                            <Card.Body>
                                <Card.Title style={{ fontWeight: 'bold', color: '#4CAF50' }}>Help & Support</Card.Title>
                                <Card.Text>
                                    Need assistance? Get in touch with our support team.
                                </Card.Text>
                                <Button as={Link} to="/support" variant="success" style={{ width: '100%' }}>
                                    Get Support
                                </Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>

                <Row className="text-center mt-5">
                    <Col>
                        <h2 style={{ fontSize: '2rem', fontWeight: 'bold', color: '#ffffff' }}>Quick Links</h2>
                        <p style={{ fontSize: '1rem', color: '#ffffff' }}>
                            Access important sections of the system with one click.
                        </p>
                        <Button as={Link} to="/profile" style={{ margin: '10px', backgroundColor: '#673ab7', color: '#fff' }}>
                            Your Profile
                        </Button>
                        <Button as={Link} to="/feedback" style={{ margin: '10px', backgroundColor: '#009688', color: '#fff' }}>
                            Feedback
                        </Button>
                        <Button as={Link} to="/logout" style={{ margin: '10px', backgroundColor: '#f44336', color: '#fff' }}>
                            Logout
                        </Button>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Dashboard;
