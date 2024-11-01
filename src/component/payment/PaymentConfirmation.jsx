import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';

const PaymentConfirmation = () => {
    const location = useLocation();
    const { reservation, paymentStatus } = location.state || {};

    return (
        <Container
            style={{
                marginTop: '50px',
                background: 'linear-gradient(135deg, #ffcc00 0%, #ff6699 100%)',
                borderRadius: '15px',
                padding: '40px',
                boxShadow: '0px 10px 30px rgba(0, 0, 0, 0.3)',
            }}
        >
            <h1
                style={{
                    textAlign: 'center',
                    marginBottom: '20px',
                    color: '#ffffff',
                    textShadow: '2px 2px 5px rgba(0, 0, 0, 0.5)',
                }}
            >
                Payment Confirmation
            </h1>
            <Row className="justify-content-center">
                <Col md={8}>
                    <Card
                        style={{
                            backgroundColor: '#ffffff',
                            borderRadius: '10px',
                            boxShadow: '0px 5px 25px rgba(0, 0, 0, 0.15)',
                        }}
                    >
                        <Card.Body>
                            <h2 style={{ textAlign: 'center', color: '#ff4081' }}>Booking Details</h2>
                            <p><strong>Bus Number:</strong> {reservation.busNumber}</p>
                            <p><strong>Route:</strong> {reservation.route}</p>
                            <p><strong>Booking Date:</strong> {reservation.bookingDate}</p>
                            <p><strong>Seats Booked:</strong> {reservation.seatsBooked}</p>
                            <p><strong>Total Price:</strong> ${reservation.totalPrice}</p>
                            <p style={{ color: paymentStatus ? '#28a745' : '#dc3545' }}>
                                <strong>Payment Status:</strong> {paymentStatus ? 'Successful' : 'Failed'}
                            </p>
                            <Button
                                variant="primary"
                                style={{
                                    backgroundColor: '#ff4081',
                                    border: 'none',
                                    fontSize: '1.2rem',
                                    padding: '10px 20px',
                                    borderRadius: '5px',
                                    boxShadow: '0px 5px 20px rgba(0, 0, 0, 0.2)',
                                    width: '100%',
                                }}
                                onClick={() => (window.location.href = '/view-reservations')}
                            >
                                Go to Reservations
                            </Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default PaymentConfirmation;
