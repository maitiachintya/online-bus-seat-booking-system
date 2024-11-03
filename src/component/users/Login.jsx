import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { API_ENDPOINTS } from '../../api/Url_Api';
import AxiosInstance from '../../api/AxiosInstance';
import { FaGoogle, FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa';

const Login = () => {
    const navigate = useNavigate();
    const login_api = API_ENDPOINTS.users;
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const [registeredUsers, setRegisteredUsers] = useState([]);

    useEffect(() => {
        const fetchRegisteredUsers = async () => {
            try {
                const response = await AxiosInstance.get(login_api);
                setRegisteredUsers(response.data);
            } catch (err) {
                console.error('Failed to fetch registered users:', err);
            }
        };

        fetchRegisteredUsers();
    }, [login_api]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        setError(null);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(null);
        setLoading(true);

        // Check if the user is registered
        const registeredUser = registeredUsers.find(user => user.email === formData.email && user.password === formData.password);
        if (!registeredUser) {
            setLoading(false);
            setError("Invalid email or password. Please check your credentials.");
            return;
        }

        // If user is found, navigate to dashboard with the user's name
        navigate('/dashboard', { state: { userName: registeredUser.name } }); // Assuming `name` is a property of the user object

        setLoading(false);
    };

    return (
        <div
            style={{
                background: 'linear-gradient(135deg, #ffafbd 0%, #ffc3a0 100%)',
                minHeight: '100vh',
                color: 'black',
                padding: '50px 0',
                transition: 'background 0.5s ease',
            }}
        >
            <Container>
                <Row className="text-center mb-5">
                    <Col>
                        <h1
                            style={{
                                fontSize: '3rem',
                                marginTop: 70,
                                fontWeight: 'bold',
                                color: '#4a4e69',
                                textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)',
                            }}
                        >
                            Welcome Back!
                        </h1>
                        <p
                            style={{
                                fontSize: '1.25rem',
                                fontWeight: '300',
                                color: '#ff6b6b',
                            }}
                        >
                            Please log in to your account.
                        </p>
                    </Col>
                </Row>

                <Row className="justify-content-center">
                    <Col md={6}>
                        {error && (
                            <div style={{ color: 'red', textAlign: 'center', marginBottom: '20px' }}>{error}</div>
                        )}

                        <Form
                            onSubmit={handleSubmit}
                            style={{
                                backgroundColor: '#ffffff',
                                borderRadius: '15px',
                                padding: '30px',
                                boxShadow: '0 4px 10px rgba(0, 0, 0, 0.3)',
                                transition: 'box-shadow 0.5s',
                            }}
                        >
                            <Form.Group controlId="email">
                                <Form.Label style={{ color: '#333', fontWeight: 'bold' }}>Email</Form.Label>
                                <Form.Control
                                    type="email"
                                    name="email"
                                    placeholder="Enter your email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    style={{ borderRadius: '5px', border: '1px solid #ccc' }}
                                />
                            </Form.Group>

                            <Form.Group controlId="password">
                                <Form.Label style={{ color: '#333', fontWeight: 'bold' }}>Password</Form.Label>
                                <Form.Control
                                    type="password"
                                    name="password"
                                    placeholder="Enter your password"
                                    value={formData.password}
                                    onChange={handleChange}
                                    required
                                    style={{ borderRadius: '5px', border: '1px solid #ccc' }}
                                />
                            </Form.Group>

                            <div style={{ textAlign: 'center', marginTop: '20px' }}>
                                <Button
                                    type="submit"
                                    disabled={loading}
                                    style={{
                                        backgroundColor: '#e43f5a',
                                        border: 'none',
                                        color: '#fff',
                                        fontSize: '1.25rem',
                                        fontWeight: 'bold',
                                        padding: '10px 20px',
                                        borderRadius: '25px',
                                        transition: 'background-color 0.3s, transform 0.3s',
                                        boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
                                    }}
                                >
                                    {loading ? 'Logging in...' : 'Login'}
                                </Button>
                                <p className="text-center mt-3">
                                    Don't have an account?{' '}
                                    <Link to="/register" style={{ color: '#f67280', fontWeight: 'bold' }}>
                                        Register here
                                    </Link>
                                </p>
                            </div>

                            <div style={{ textAlign: 'center', marginTop: '20px' }}>
                                <p style={{ color: '#333', fontWeight: 'bold' }}>Or log in with</p>
                                <div style={{ display: 'flex', justifyContent: 'center', gap: '20px' }}>
                                    <Button
                                        style={{
                                            backgroundColor: '#DB4437',
                                            border: 'none',
                                            padding: '10px',
                                            borderRadius: '50%',
                                            transition: 'transform 0.3s',
                                        }}
                                        onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.1)')}
                                        onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                                    >
                                        <FaGoogle size={25} color="#fff" />
                                    </Button>
                                    <Button
                                        style={{
                                            backgroundColor: '#4267B2',
                                            border: 'none',
                                            padding: '10px',
                                            borderRadius: '50%',
                                            transition: 'transform 0.3s',
                                        }}
                                        onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.1)')}
                                        onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                                    >
                                        <FaFacebookF size={25} color="#fff" />
                                    </Button>
                                    <Button
                                        style={{
                                            backgroundColor: '#1DA1F2',
                                            border: 'none',
                                            padding: '10px',
                                            borderRadius: '50%',
                                            transition: 'transform 0.3s',
                                        }}
                                        onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.1)')}
                                        onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                                    >
                                        <FaTwitter size={25} color="#fff" />
                                    </Button>
                                    <Button
                                        style={{
                                            backgroundColor: '#0077B5',
                                            border: 'none',
                                            padding: '10px',
                                            borderRadius: '50%',
                                            transition: 'transform 0.3s',
                                        }}
                                        onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.1)')}
                                        onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                                    >
                                        <FaLinkedinIn size={25} color="#fff" />
                                    </Button>
                                </div>
                            </div>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Login;
