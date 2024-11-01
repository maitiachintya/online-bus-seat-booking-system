import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const Service = () => {
    const [hoveredCard, setHoveredCard] = useState(null);
    const [backgroundColor, setBackgroundColor] = useState(0);

    const handleMouseEnter = (index) => {
        setHoveredCard(index);
    };

    const handleMouseLeave = () => {
        setHoveredCard(null);
    };

    // Array of background gradient colors for animation
    const colors = [
        'linear-gradient(135deg, #FF7E5F 0%, #feb47b 100%)',
        'linear-gradient(135deg, #FFB74D 0%, #FF8A65 100%)',
        'linear-gradient(135deg, #64B5F6 0%, #42A5F5 100%)',
        'linear-gradient(135deg, #81C784 0%, #4CAF50 100%)',
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setBackgroundColor((prev) => (prev + 1) % colors.length);
        }, 3000); // Change color every 3 seconds
        return () => clearInterval(interval);
    }, [colors.length]);

    return (
        <div
            style={{
                padding: '50px 0',
                minHeight: '100vh',
                background: colors[backgroundColor], // Set animated background
                transition: 'background 1s ease', // Smooth transition for background change
            }}
        >
            <Container>
                {/* Title Section */}
                <Row className="text-center mb-5">
                    <Col>
                        <h1
                            style={{
                                fontSize: '3rem',
                                fontWeight: 'bold',
                                marginTop: 25,
                                color: '#fff',
                                textShadow: '3px 3px 5px rgba(0, 0, 0, 0.5)',
                            }}
                        >
                            Our Services
                        </h1>
                        <p style={{ fontSize: '1.25rem', color: '#fff' }}>
                            Explore the range of services we offer for a convenient and comfortable journey.
                        </p>
                    </Col>
                </Row>

                {/* Service Cards Section */}
                <Row>
                    {[ // Array of card details
                        {
                            imgSrc: 'https://static.vecteezy.com/system/resources/thumbnails/029/305/778/small/moving-forward-bus-travels-on-road-embracing-travel-time-ambiance-ai-generated-photo.jpg',
                            title: 'Luxury Buses',
                            text: 'Travel in comfort with our luxury buses that offer premium seating and amenities.',
                        },
                        {
                            imgSrc: 'https://previews.123rf.com/images/dumrongsak/dumrongsak1911/dumrongsak191100008/134714771-back-view-on-the-local-economy-bus-in-bangkok-city-of-thailand-with-passengers-with-selective-focus.jpg',
                            title: 'Economy Trips',
                            text: 'Affordable travel options for everyone without compromising on safety and comfort.',
                        },
                        {
                            imgSrc: 'https://t4.ftcdn.net/jpg/05/77/35/35/360_F_577353550_XtTkubilmXg6sjBnKSDNeAiQoLuxS3Fm.jpg',
                            title: '24/7 Support',
                            text: 'Our customer service is available around the clock to assist with your travel needs.',
                        },
                    ].map((card, index) => (
                        <Col md={4} key={index}>
                            <Card
                                style={{
                                    border: 'none',
                                    borderRadius: '20px',
                                    overflow: 'hidden',
                                    boxShadow: '0 12px 30px rgba(0, 0, 0, 0.4)', // Enhanced shadow
                                    backgroundColor: '#fff',
                                    transition: 'transform 0.3s ease, box-shadow 0.3s ease', // Smooth transition for hover
                                    transform: hoveredCard === index ? 'scale(1.05)' : 'scale(1)',
                                    filter: hoveredCard === index ? 'brightness(1.1)' : 'none', // Brightness effect on hover
                                }}
                                onMouseEnter={() => handleMouseEnter(index)}
                                onMouseLeave={handleMouseLeave}
                            >
                                <Card.Img
                                    variant="top"
                                    height="200px"
                                    src={card.imgSrc}
                                    style={{
                                        objectFit: 'cover',
                                        height: '200px',
                                        transition: 'transform 0.3s ease', // Smooth transition for image
                                        transform: hoveredCard === index ? 'scale(1.1)' : 'scale(1)', // Image zoom effect on hover
                                    }}
                                />
                                <Card.Body
                                    style={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        textAlign: 'center',
                                        height: '200px',
                                        padding: '20px',
                                        backgroundColor: hoveredCard === index ? '#FFFAE3' : '#fff', // Change background on hover
                                        borderRadius: '20px',
                                    }}
                                >
                                    <Card.Title style={{ fontWeight: 'bold', fontSize: '1.5rem', color: '#FF5722' }}>
                                        {card.title}
                                    </Card.Title>
                                    <Card.Text style={{ color: '#555', fontSize: '1rem' }}>
                                        {card.text}
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    );
};

export default Service;
