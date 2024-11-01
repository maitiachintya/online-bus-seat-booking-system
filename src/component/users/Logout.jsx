// src/component/Logout.js

import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
    const navigate = useNavigate();

    // Function to handle logout
    const handleLogout = () => {
        // Clear token from local storage
        localStorage.removeItem('token');
        alert('You have successfully logged out.');
        navigate('/login'); // Redirect to login page
    };

    return (
        <div
            style={{
                background: 'linear-gradient(135deg, #ff7e5f 0%, #feb47b 100%)',
                minHeight: '100vh',
                color: 'black',
                padding: '50px 0',
            }}
        >
            <Container>
                <Row className="text-center mb-5">
                    <Col>
                        <h1 style={{
                            fontSize: '3rem', fontWeight: 'bold',
                            marginTop: 70
                        }}>Logout</h1>
                        <p style={{ fontSize: '1.25rem' }}>
                            Are you sure you want to log out?
                        </p>
                    </Col>
                </Row>

                <Row className="justify-content-center">
                    <Col md={6} className="text-center">
                        <Button
                            onClick={handleLogout}
                            style={{
                                backgroundColor: '#f44336',
                                border: 'none',
                                color: '#fff',
                                fontSize: '1.5rem',
                                fontWeight: 'bold',
                                padding: '15px 30px',
                                borderRadius: '5px',
                                marginRight: '10px'
                            }}
                        >
                            Yes, Logout
                        </Button>
                        <Button
                            onClick={() => navigate('/')}
                            style={{
                                backgroundColor: '#0072ff',
                                border: 'none',
                                color: '#fff',
                                fontSize: '1.5rem',
                                fontWeight: 'bold',
                                padding: '15px 30px',
                                borderRadius: '5px'
                            }}
                        >
                            No, Stay Logged In
                        </Button>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Logout;
