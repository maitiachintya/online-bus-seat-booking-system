import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const AboutPage = () => {
    const [hoveredImage, setHoveredImage] = useState(null);

    const handleMouseEnter = (image) => {
        setHoveredImage(image);
    };

    const handleMouseLeave = () => {
        setHoveredImage(null);
    };

    const zoomStyle = {
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        transform: hoveredImage ? 'scale(1.05)' : 'scale(1)',
        boxShadow: hoveredImage ? '0 8px 20px rgba(0, 0, 0, 0.6)' : '0 4px 10px rgba(0, 0, 0, 0.3)',
        borderRadius: '10px',
    };

    return (
        <div
            style={{
                padding: '50px 0',
                background: 'linear-gradient(135deg, #ff9800 0%, #ff5722 100%)',
                minHeight: '100vh',
                color: '#fff',
            }}
        >
            <Container>
                {/* Title Section */}
                <Row className="text-center mb-5">
                    <Col>
                        <h1
                            style={{
                                fontSize: '4rem',
                                fontWeight: 'bold',
                                marginTop: 25,
                                textShadow: '3px 3px 6px rgba(0, 0, 0, 0.6)',
                                color: '#ffeb3b',
                                background: '-webkit-linear-gradient(#ffeb3b, #ffca28)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                            }}
                        >
                            About Us
                        </h1>
                        <p
                            style={{
                                fontSize: '1.5rem',
                                textShadow: '2px 2px 5px rgba(0, 0, 0, 0.5)',
                                color: '#fffde7',
                            }}
                        >
                            We are dedicated to providing the best bus travel experience for our customers.
                        </p>
                    </Col>
                </Row>

                {/* Our Mission and Vision with Images */}
                <Row className="mb-4">
                    <Col md={6}>
                        <h2 style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#ffeb3b' }}>Our Mission</h2>
                        <p style={{ color: '#fffde7' }}>
                            To offer safe, reliable, and affordable bus travel options for everyone.
                        </p>
                        <img
                            src="https://static.vecteezy.com/system/resources/thumbnails/016/063/048/small/mission-vision-values-concept-vector.jpg"
                            alt="Mission"
                            height="400px"
                            style={{
                                width: '100%',
                                ...zoomStyle,
                            }}
                            onMouseEnter={() => handleMouseEnter('mission')}
                            onMouseLeave={handleMouseLeave}
                        />
                    </Col>
                    <Col md={6}>
                        <h2 style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#ffeb3b' }}>Our Vision</h2>
                        <p style={{ color: '#fffde7' }}>
                            To be the leading bus service provider, known for our commitment to customer satisfaction.
                        </p>
                        <img
                            src="https://img.freepik.com/premium-photo/clicks-our-vision_218381-12766.jpg"
                            alt="Vision"
                            height="350px"
                            style={{
                                width: '100%',
                                ...zoomStyle,
                            }}
                            onMouseEnter={() => handleMouseEnter('vision')}
                            onMouseLeave={handleMouseLeave}
                        />
                    </Col>
                </Row>

                {/* Values Section with Images */}
                <Row>
                    <Col>
                        <h2 style={{ fontSize: '2.5rem', fontWeight: 'bold', textAlign: 'center', color: '#ffeb3b' }}>Our Values</h2>
                        <ul style={{ listStyle: 'none', padding: 0, textAlign: 'center' }}>
                            <li style={{ fontSize: '1.5rem', margin: '15px 0', color: '#fffde7' }}>
                                <img
                                    src="https://thumbs.dreamstime.com/b/safety-first-message-road-concept-safe-driving-preventing-traffic-accident-40631947.jpg"
                                    alt="Safety First"
                                    height="80px"
                                    width="80px"
                                    style={{
                                        marginRight: '10px',
                                        ...zoomStyle,
                                    }}
                                    onMouseEnter={() => handleMouseEnter('safety')}
                                    onMouseLeave={handleMouseLeave}
                                />
                                Safety First
                            </li>
                            <li style={{ fontSize: '1.5rem', margin: '15px 0', color: '#fffde7' }}>
                                <img
                                    src="https://t3.ftcdn.net/jpg/01/70/90/50/360_F_170905055_gT0XbrjbvOEH8rgToNJIufR6RNzAdORA.jpg"
                                    alt="Sustainability"
                                    height="80px"
                                    width="80px"
                                    style={{
                                        marginRight: '10px',
                                        ...zoomStyle,
                                    }}
                                    onMouseEnter={() => handleMouseEnter('sustainability')}
                                    onMouseLeave={handleMouseLeave}
                                />
                                Sustainability
                            </li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default AboutPage;
