import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { API_ENDPOINTS } from '../../api/Url_Api';
import AxiosInstance from '../../api/AxiosInstance';

const RegistrationPage = () => {
    const navigate = useNavigate();
    const reg_api = API_ENDPOINTS.users;

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
    });
    const [error, setError] = useState(null);
    const [successMessage, setSuccessMessage] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        setError(null); // Clear error on change
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (formData.password !== formData.confirmPassword) {
            setError("Passwords do not match!");
            return;
        }

        try {
            const checkUser = await AxiosInstance.get(`${reg_api}?email=${formData.email}`);
            if (checkUser.data.length > 0) {
                setError("This email is already registered. Please use a different email.");
            } else {
                await AxiosInstance.post(reg_api, formData);
                setSuccessMessage('Registration successful! Please log in.');
                setTimeout(() => {
                    navigate('/login');
                }, 2000);
            }
        } catch (err) {
            setError("Registration failed. Please try again.");
        }
    };

    return (
        <div
            style={{
                background: 'white',
                minHeight: '100vh',
                color: 'black',
                padding: '50px 0',
            }}
        >
            <Container>
                <Row className="text-center mb-5">
                    <Col>
                        <h1 style={{ fontSize: '3.5rem', marginTop: 50, fontWeight: 'bold' }}>Register</h1>
                        <p>Create your account to get started.</p>
                    </Col>
                </Row>

                <Row className="justify-content-center">
                    <Col md={6}>
                        {error && <div style={{ color: 'red', textAlign: 'center', marginBottom: '20px' }}>{error}</div>}
                        {successMessage && <div style={{ color: 'green', textAlign: 'center', marginBottom: '20px' }}>{successMessage}</div>}
                        <Form onSubmit={handleSubmit} style={{ backgroundColor: '#f7f7f7', padding: '30px', borderRadius: '10px' }}>
                            {['firstName', 'lastName', 'email', 'password', 'confirmPassword'].map((field, index) => (
                                <Form.Group controlId={field} key={index}>
                                    <Form.Label>{field.charAt(0).toUpperCase() + field.slice(1)}</Form.Label>
                                    <Form.Control
                                        type={field.includes('password') ? 'password' : 'text'}
                                        name={field}
                                        placeholder={`Enter your ${field}`}
                                        value={formData[field]}
                                        onChange={handleChange}
                                        required
                                    />
                                </Form.Group>
                            ))}

                            <div style={{ textAlign: 'center', marginTop: '20px' }}>
                                <Button type="submit" variant="dark">
                                    Register
                                </Button>
                                <p className="text-center mt-3">
                                    Already Have an Account? <Link to="/login">Sign In here</Link>
                                </p>
                            </div>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default RegistrationPage;
