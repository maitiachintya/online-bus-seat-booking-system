// src/components/BookingForm.js

import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import AxiosInstance from '../../api/AxiosInstance';
import { API_ENDPOINTS } from '../../api/Url_Api';

const BookingForm = () => {
    const [formData, setFormData] = useState({
        busNumber: '',
        route: '',
        bookingDate: '',
        seatsBooked: '',
        totalPrice: '',
    });

    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const userId = 1; // Replace with the logged-in user's ID
            const newReservation = { ...formData, userId };
            const response = await AxiosInstance.post(API_ENDPOINTS.bookings, newReservation);
            console.log('Reservation created:', response.data);
            alert('Your seat is reserved!');
            resetForm();
        } catch (error) {
            console.error('Error creating reservation:', error);
        }
    };

    const resetForm = () => {
        setFormData({
            busNumber: '',
            route: '',
            bookingDate: '',
            seatsBooked: '',
            totalPrice: '',
        });
    };

    return (
        <Container
            style={{
                background: 'linear-gradient(135deg, #FF6F61, #6A82FB)',
                padding: '40px',
                borderRadius: '15px',
                boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.2)',
                marginTop: '50px',
                minHeight: '80vh',
            }}
        >
            <h1 style={{ textAlign: 'center', color: '#fff', marginBottom: '30px' }}>Book a Reservation</h1>
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formBusNumber">
                    <Form.Label style={{ color: '#fff' }}>Bus Number</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter Bus Number"
                        name="busNumber"
                        value={formData.busNumber}
                        onChange={handleInputChange}
                        required
                    />
                </Form.Group>
                <Form.Group controlId="formRoute">
                    <Form.Label style={{ color: '#fff' }}>Route</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter Route"
                        name="route"
                        value={formData.route}
                        onChange={handleInputChange}
                        required
                    />
                </Form.Group>
                <Form.Group controlId="formBookingDate">
                    <Form.Label style={{ color: '#fff' }}>Booking Date</Form.Label>
                    <Form.Control
                        type="date"
                        name="bookingDate"
                        value={formData.bookingDate}
                        onChange={handleInputChange}
                        required
                    />
                </Form.Group>
                <Form.Group controlId="formSeatsBooked">
                    <Form.Label style={{ color: '#fff' }}>Seats Booked</Form.Label>
                    <Form.Control
                        type="number"
                        placeholder="Enter Number of Seats"
                        name="seatsBooked"
                        value={formData.seatsBooked}
                        onChange={handleInputChange}
                        required
                    />
                </Form.Group>
                <Form.Group controlId="formTotalPrice">
                    <Form.Label style={{ color: '#fff' }}>Total Price</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter Total Price"
                        name="totalPrice"
                        value={formData.totalPrice}
                        onChange={handleInputChange}
                        required
                    />
                </Form.Group>
                <div style={{ textAlign: 'center', marginTop: '20px' }}>
                    <Button
                        type="submit"
                        style={{
                            backgroundColor: '#ff4081',
                            border: 'none',
                            padding: '10px 20px',
                            fontSize: '1.2rem',
                            borderRadius: '5px',
                            color: '#fff',
                            transition: 'background-color 0.3s, transform 0.3s',
                        }}
                        onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#e91e63')}
                        onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#ff4081')}
                    >
                        Submit Reservation
                    </Button>
                </div>
            </Form>
        </Container>
    );
};

export default BookingForm;
