// src/components/UserProfile.js

import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Form, Button, Alert, Spinner } from 'react-bootstrap';
import AxiosInstance from '../../api/AxiosInstance';
import { API_ENDPOINTS } from '../../api/Url_Api';

const UserProfile = () => {
    const userId = '1'; // Replace with actual user ID
    const [user, setUser] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
    });
    const [isEditing, setIsEditing] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchUserData = async () => {
            setLoading(true);
            setError('');
            try {
                // Temporary hardcoded data for testing
                const hardcodedUser = {
                    firstName: 'John',
                    lastName: 'Doe',
                    email: 'john.doe@example.com',
                    password: 'password123', // Avoid hardcoding sensitive data in production
                };
                setUser(hardcodedUser);
            } catch (error) {
                console.error('Error fetching user data:', error.response ? error.response.data : error.message);
                setError('Failed to load user data. Please try again later.');
            } finally {
                setLoading(false);
            }
        };

        fetchUserData();
    }, []);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value });
    };

    const handleSave = async () => {
        try {
            await AxiosInstance.put(`${API_ENDPOINTS.users}/${userId}`, user);
            setIsEditing(false);
        } catch (error) {
            console.error('Error updating user data:', error.response ? error.response.data : error.message);
            setError('Failed to update user data. Please try again later.');
        }
    };

    return (
        <Container style={{ marginTop: '50px' }}>
            <h1 style={{ textAlign: 'center', marginBottom: '20px' }}>User Profile</h1>
            <Row className="justify-content-center">
                <Col md={6}>
                    {loading ? (
                        <div className="text-center">
                            <Spinner animation="border" />
                        </div>
                    ) : error ? (
                        <Alert variant="danger">{error}</Alert>
                    ) : (
                        <Form>
                            <Form.Group controlId="firstName">
                                <Form.Label>First Name</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="firstName"
                                    value={user.firstName}
                                    onChange={handleInputChange}
                                    readOnly={!isEditing}
                                    required
                                />
                            </Form.Group>
                            <Form.Group controlId="lastName">
                                <Form.Label>Last Name</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="lastName"
                                    value={user.lastName}
                                    onChange={handleInputChange}
                                    readOnly={!isEditing}
                                    required
                                />
                            </Form.Group>
                            <Form.Group controlId="email">
                                <Form.Label>Email</Form.Label>
                                <Form.Control
                                    type="email"
                                    name="email"
                                    value={user.email}
                                    onChange={handleInputChange}
                                    readOnly={!isEditing}
                                    required
                                />
                            </Form.Group>
                            <Form.Group controlId="password">
                                <Form.Label>Password</Form.Label>
                                <Form.Control
                                    type="password"
                                    name="password"
                                    value={user.password}
                                    onChange={handleInputChange}
                                    readOnly={!isEditing}
                                    required
                                />
                            </Form.Group>
                            <div className="text-center">
                                {isEditing ? (
                                    <Button variant="success" onClick={handleSave}>
                                        Save Changes
                                    </Button>
                                ) : (
                                    <Button variant="primary" onClick={() => setIsEditing(true)}>
                                        Edit Profile
                                    </Button>
                                )}
                            </div>
                        </Form>
                    )}
                </Col>
            </Row>
        </Container>
    );
};

export default UserProfile;
