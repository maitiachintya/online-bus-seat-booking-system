// src/components/ViewReservations.js

import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Table, Button, Modal, Form } from 'react-bootstrap';
import AxiosInstance from '../../api/AxiosInstance';
import { API_ENDPOINTS } from '../../api/Url_Api';
import { loadStripe } from '@stripe/stripe-js';
import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

const stripePromise = loadStripe('your_public_stripe_key'); // Replace with your Stripe public key

const ViewReservations = () => {
    const [reservations, setReservations] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [newReservation, setNewReservation] = useState({
        id: '',
        busNumber: '',
        route: '',
        bookingDate: '',
        seatsBooked: '',
        totalPrice: '',
    });
    const [isEditing, setIsEditing] = useState(false);
    const [paymentModalShow, setPaymentModalShow] = useState(false);
    const [currentReservation, setCurrentReservation] = useState(null);

    useEffect(() => {
        fetchReservations();
    }, []);

    const fetchReservations = async () => {
        try {
            const response = await AxiosInstance.get(API_ENDPOINTS.bookings);
            const userId = 1; // Replace with the actual logged-in user's ID
            const userReservations = response.data.filter(booking => booking.userId === userId);
            setReservations(userReservations);
        } catch (error) {
            console.error('Error fetching reservations:', error);
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewReservation({ ...newReservation, [name]: value });
    };

    const handleAddReservation = async () => {
        try {
            const response = await AxiosInstance.post(API_ENDPOINTS.bookings, newReservation);
            setReservations((prev) => [...prev, response.data]);
            resetForm();
        } catch (error) {
            console.error('Error adding reservation:', error);
        }
    };

    const handleUpdateReservation = async () => {
        try {
            const response = await AxiosInstance.put(`${API_ENDPOINTS.bookings}/${newReservation.id}`, newReservation);
            setReservations((prev) =>
                prev.map(reservation =>
                    reservation.id === newReservation.id ? response.data : reservation
                )
            );
            resetForm();
        } catch (error) {
            console.error('Error updating reservation:', error);
        }
    };

    const handleEditReservation = (reservation) => {
        setNewReservation(reservation);
        setIsEditing(true);
        setShowModal(true);
    };

    const handleCancelReservation = async (id) => {
        try {
            await AxiosInstance.delete(`${API_ENDPOINTS.bookings}/${id}`);
            fetchReservations();
        } catch (error) {
            console.error('Error canceling reservation:', error);
        }
    };

    const resetForm = () => {
        setNewReservation({ id: '', busNumber: '', route: '', bookingDate: '', seatsBooked: '', totalPrice: '' });
        setIsEditing(false);
        setShowModal(false);
    };

    const handlePayment = (reservation) => {
        setCurrentReservation(reservation);
        setPaymentModalShow(true);
    };

    const PaymentForm = () => {
        const stripe = useStripe();
        const elements = useElements();

        const handleSubmit = async (event) => {
            event.preventDefault();

            if (!stripe || !elements) {
                return;
            }

            const cardElement = elements.getElement(CardElement);

            const { error, paymentMethod } = await stripe.createPaymentMethod({
                type: 'card',
                card: cardElement,
            });

            if (error) {
                console.error('Error:', error);
            } else {
                console.log('Payment Method:', paymentMethod);
                alert(`Payment successful for reservation ${currentReservation.id}`);
                setPaymentModalShow(false);
            }
        };

        return (
            <Form onSubmit={handleSubmit}>
                <CardElement />
                <Button type="submit" disabled={!stripe} variant="primary" className="mt-3">
                    Pay {currentReservation?.totalPrice} USD
                </Button>
            </Form>
        );
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
                minHeight: '80vh',
            }}
        >
            <h1 style={{
                fontSize: '2.5rem',
                textAlign: 'center',
                color: '#fff',
                marginBottom: '30px',
                textShadow: '2px 2px 4px #333'
            }}>View Reservations</h1>

            <Row className="justify-content-center mb-4">
                <Button
                    variant="success"
                    onClick={() => setShowModal(true)}
                    style={{ padding: '10px 20px', fontSize: '1.2rem', borderRadius: '5px' }}
                >
                    Add Reservation
                </Button>
            </Row>

            <Row>
                <Col>
                    <Table striped bordered hover variant="light">
                        <thead>
                            <tr>
                                <th>Bus Number</th>
                                <th>Route</th>
                                <th>Booking Date</th>
                                <th>Seats Booked</th>
                                <th>Total Price</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {reservations.map((reservation) => (
                                <tr key={reservation.id}>
                                    <td>{reservation.busNumber}</td>
                                    <td>{reservation.route}</td>
                                    <td>{reservation.bookingDate}</td>
                                    <td>{reservation.seatsBooked}</td>
                                    <td>${reservation.totalPrice}</td>
                                    <td>
                                        <Button
                                            variant="info"
                                            onClick={() => handleEditReservation(reservation)}
                                            style={{ marginRight: '10px' }}
                                        >
                                            Edit
                                        </Button>
                                        <Button
                                            variant="danger"
                                            onClick={() => handleCancelReservation(reservation.id)}
                                            style={{ marginRight: '10px' }}
                                        >
                                            Cancel
                                        </Button>
                                        <Button
                                            variant="warning"
                                            onClick={() => handlePayment(reservation)}
                                            style={{ marginRight: '10px' }}
                                        >
                                            Pay Now
                                        </Button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </Col>
            </Row>

            <Modal show={showModal} onHide={resetForm}>
                <Modal.Header closeButton>
                    <Modal.Title>{isEditing ? 'Edit Reservation' : 'Add New Reservation'}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group controlId="modalBusNumber">
                            <Form.Label>Bus Number</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter Bus Number"
                                name="busNumber"
                                value={newReservation.busNumber}
                                onChange={handleInputChange}
                                required
                            />
                        </Form.Group>
                        <Form.Group controlId="modalRoute">
                            <Form.Label>Route</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter Route"
                                name="route"
                                value={newReservation.route}
                                onChange={handleInputChange}
                                required
                            />
                        </Form.Group>
                        <Form.Group controlId="modalBookingDate">
                            <Form.Label>Booking Date</Form.Label>
                            <Form.Control
                                type="date"
                                name="bookingDate"
                                value={newReservation.bookingDate}
                                onChange={handleInputChange}
                                required
                            />
                        </Form.Group>
                        <Form.Group controlId="modalSeatsBooked">
                            <Form.Label>Seats Booked</Form.Label>
                            <Form.Control
                                type="number"
                                placeholder="Enter Number of Seats"
                                name="seatsBooked"
                                value={newReservation.seatsBooked}
                                onChange={handleInputChange}
                                required
                            />
                        </Form.Group>
                        <Form.Group controlId="modalTotalPrice">
                            <Form.Label>Total Price</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter Total Price"
                                name="totalPrice"
                                value={newReservation.totalPrice}
                                onChange={handleInputChange}
                                required
                            />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={resetForm}>
                        Cancel
                    </Button>
                    <Button variant="primary" onClick={isEditing ? handleUpdateReservation : handleAddReservation}>
                        {isEditing ? 'Update Reservation' : 'Add Reservation'}
                    </Button>
                </Modal.Footer>
            </Modal>

            {/* Payment Modal */}
            <Modal show={paymentModalShow} onHide={() => setPaymentModalShow(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Payment</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Elements stripe={stripePromise}>
                        <PaymentForm />
                    </Elements>
                </Modal.Body>
            </Modal>
        </Container>
    );
};

export default ViewReservations;
