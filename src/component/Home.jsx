import React, { useState } from 'react';
import { Container, Row, Col, Button, Carousel } from 'react-bootstrap';
import LoginModal from '../component/users/Login';
import Service from './Service';

const HomePage = () => {
    const [showLoginModal, setShowLoginModal] = useState(false);
    const [buttonColor] = useState('#ffcc00');
    const [showService, setShowService] = useState(false);
    const [hoveringBookNow, setHoveringBookNow] = useState(false);
    const [hoveringExploreServices, setHoveringExploreServices] = useState(false);

    const handleBookNowClick = () => {
        const loginSection = document.getElementById('login-section');
        if (loginSection) {
            loginSection.scrollIntoView({ behavior: 'smooth' });
        }
        setShowLoginModal(true);
    };

    const handleCloseModal = () => {
        setShowLoginModal(false);
    };

    const handleButtonClick = () => {
        setShowService(true);
    };

    return (
        <div
            style={{
                backgroundImage: 'url("/busbackground.webp")', // replace with your image URL
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundAttachment: 'fixed',
                minHeight: '100vh',
                color: '#fff',
                paddingTop: '120px',
                fontFamily: "'Poppins', sans-serif",
            }}
        >
            <Container
                style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.9)',
                    borderRadius: '20px',
                    padding: '50px',
                    boxShadow: '0 8px 20px rgba(0, 0, 0, 0.5)',
                    transition: 'transform 0.3s ease',
                    marginTop: '20px',
                }}
            >
                <Row className="text-center mb-5">
                    <Col>
                        <h1 style={{ fontSize: '4rem', fontWeight: '700', marginBottom: '20px', color: '#333' }}>
                            Welcome to BUS Ticket Booking
                        </h1>
                        <p style={{ fontSize: '1.8rem', marginBottom: '40px', color: '#555' }}>
                            Book your bus tickets quickly and securely from the comfort of your home.
                        </p>

                        <Button
                            onClick={handleBookNowClick}
                            onMouseEnter={() => setHoveringBookNow(true)}
                            onMouseLeave={() => setHoveringBookNow(false)}
                            style={{
                                backgroundColor: hoveringBookNow ? '#ffaa00' : buttonColor,
                                border: 'none',
                                color: '#333',
                                fontSize: '1.6rem',
                                fontWeight: '600',
                                padding: '15px 35px',
                                borderRadius: '50px',
                                transition: 'background-color 0.3s ease, transform 0.3s ease',
                                transform: hoveringBookNow ? 'scale(1.1)' : 'scale(1)',
                                boxShadow: '0 6px 15px rgba(0, 0, 0, 0.4)',
                                marginBottom: '30px',
                            }}
                        >
                            Book Now
                        </Button>
                    </Col>
                </Row>

                <Row className="mb-5">
                    <Col>
                        <Carousel fade>
                            <Carousel.Item interval={3000}>
                                <img
                                    className="d-block w-100"
                                    height="800px"
                                    src="https://thumbs.dreamstime.com/b/bus-view-chinese-beijing-china%C3%A3%E2%82%AC%E2%80%9A-39380590.jpg"
                                    alt="Comfortable Journeys"
                                    style={{ filter: 'brightness(90%)', borderRadius: '15px' }}
                                />
                                <Carousel.Caption>
                                    <h3 style={{ fontSize: '3rem', color: '#fff', textShadow: '2px 2px 8px rgba(0, 0, 0, 0.8)' }}>
                                        Comfortable Journeys
                                    </h3>
                                    <p style={{ fontSize: '1.5rem', color: '#ddd', textShadow: '1px 1px 5px rgba(0, 0, 0, 0.7)' }}>
                                        Experience safe and relaxing rides with our premium buses.
                                    </p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item interval={3000}>
                                <img
                                    className="d-block w-100"
                                    height="800px"
                                    src="https://img.freepik.com/premium-photo/travel-summer-vacation-with-beach_770123-11023.jpg"
                                    alt="Quick and Easy Bookings"
                                    style={{ filter: 'brightness(90%)', borderRadius: '15px' }}
                                />
                                <Carousel.Caption>
                                    <h3 style={{ fontSize: '3rem', color: '#fff', textShadow: '2px 2px 8px rgba(0, 0, 0, 0.8)' }}>
                                        Quick and Easy Bookings
                                    </h3>
                                    <p style={{ fontSize: '1.5rem', color: '#ddd', textShadow: '1px 1px 5px rgba(0, 0, 0, 0.7)' }}>
                                        Book your tickets in just a few clicks, anytime and anywhere.
                                    </p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item interval={3000}>
                                <img
                                    className="d-block w-100"
                                    height="800px"
                                    src="https://www.granitenet.com/wp-content/uploads/2023/11/Benefits-CustomerService-Photo.jpg"
                                    alt="24/7 Customer Support"
                                    style={{ filter: 'brightness(90%)', borderRadius: '15px' }}
                                />
                                <Carousel.Caption>
                                    <h3 style={{ fontSize: '3rem', color: '#fff', textShadow: '2px 2px 8px rgba(0, 0, 0, 0.8)' }}>
                                        24/7 Customer Support
                                    </h3>
                                    <p style={{ fontSize: '1.5rem', color: '#ddd', textShadow: '1px 1px 5px rgba(0, 0, 0, 0.7)' }}>
                                        Our team is here to help you at any time, day or night.
                                    </p>
                                </Carousel.Caption>
                            </Carousel.Item>
                        </Carousel>
                    </Col>
                </Row>

                <Row className="text-center mt-5">
                    <Col>
                        <h2 style={{ fontSize: '3rem', fontWeight: '700', marginBottom: '20px', color: '#333' }}>
                            Ready for Your Next Journey?
                        </h2>
                        <p style={{ fontSize: '1.5rem', marginBottom: '30px', color: '#555' }}>
                            Explore our services and book your next bus ride with us today!
                        </p>
                        <Button
                            onClick={handleButtonClick}
                            onMouseEnter={() => setHoveringExploreServices(true)}
                            onMouseLeave={() => setHoveringExploreServices(false)}
                            style={{
                                backgroundColor: hoveringExploreServices ? '#ffaa00' : buttonColor,
                                border: 'none',
                                color: '#333',
                                fontSize: '1.6rem',
                                fontWeight: '600',
                                padding: '15px 35px',
                                borderRadius: '50px',
                                transition: 'background-color 0.3s ease, transform 0.3s ease',
                                transform: hoveringExploreServices ? 'scale(1.1)' : 'scale(1)',
                                boxShadow: '0 6px 15px rgba(0, 0, 0, 0.4)',
                            }}
                        >
                            Explore Services
                        </Button>
                    </Col>
                </Row>

                {showService && (
                    <Row className="mt-5">
                        <Col>
                            <Service />
                        </Col>
                    </Row>
                )}

                <div id="login-section">
                    <LoginModal show={showLoginModal} handleClose={handleCloseModal} />
                </div>
            </Container>
        </div>
    );
};

export default HomePage;
