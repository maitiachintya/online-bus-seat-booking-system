// src/components/ViewDescription.js
import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { useParams, useNavigate } from 'react-router-dom';
import AxiosInstance from '../../api/AxiosInstance';
import { API_ENDPOINTS } from '../../api/Url_Api';

const ViewDescription = () => {
    const { id } = useParams(); // Get reservation ID from URL parameters
    const [reservation, setReservation] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        fetchReservationDetails();
    }, [id]);

    const fetchReservationDetails = async () => {
        try {
            const response = await AxiosInstance.get(`${API_ENDPOINTS.bookings}/${id}`);
            setReservation(response.data);
        } catch (error) {
            console.error('Error fetching reservation details:', error);
        }
    };

    return (
        <Container
            style={{
                background: 'linear-gradient(135deg, #ff7e5f 0%, #feb47b 100%)',
                padding: '40px',
                borderRadius: '15px',
                boxShadow: '0px 10px 30px rgba(0, 0, 0, 0.3)',
                marginTop: '50px',
                color: '#333',
                minHeight: '60vh',
            }}
        >
            <Row className="justify-content-center">
                <Col md={8}>
                    {reservation ? (
                        <Card
                            style={{
                                backgroundColor: '#fff',
                                borderRadius: '10px',
                                padding: '20px',
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                boxShadow: '0px 5px 15px rgba(0, 0, 0, 0.2)',
                            }}
                        >
                            <Card.Body>
                                <Card.Title
                                    style={{
                                        fontSize: '2rem',
                                        fontWeight: 'bold',
                                        color: '#333',
                                        textShadow: '1px 1px 2px #999',
                                    }}
                                >
                                    Reservation Details
                                </Card.Title>
                                <Card.Text><strong>Bus Number:</strong> {reservation.busNumber}</Card.Text>
                                <Card.Text><strong>Route:</strong> {reservation.route}</Card.Text>
                                <Card.Text><strong>Booking Date:</strong> {reservation.bookingDate}</Card.Text>
                                <Card.Text><strong>Seats Booked:</strong> {reservation.seatsBooked}</Card.Text>
                                <Card.Text><strong>Total Price:</strong> ${reservation.totalPrice}</Card.Text>
                                <Button
                                    variant="primary"
                                    onClick={() => navigate(-1)}
                                    style={{
                                        marginTop: '20px',
                                        padding: '10px 20px',
                                        fontSize: '1rem',
                                    }}
                                >
                                    Go Back
                                </Button>
                            </Card.Body>
                        </Card>
                    ) : (
                        <h4 style={{ color: '#fff', textAlign: 'center' }}>Loading reservation details...</h4>
                    )}
                </Col>
            </Row>
        </Container>
    );
};

export default ViewDescription;
