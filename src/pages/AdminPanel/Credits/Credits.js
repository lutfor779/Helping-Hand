import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import image1 from '../../../images/lutfor2.png';
import image2 from '../../../images/nahar.png';
import image3 from '../../../images/rimon.png';
import image4 from '../../../images/tanvir.png';

const Credits = () => {
    return (
        <Container>
            <h2 className='text-center text-color fw-bold mt-5'>
                Project Contributors
            </h2>
            <Row xs={1} md={2} lg={4} className="g-5 p3-5 p-3 text-center">
                <Col>
                    <Card className="h-100 rounded custom-shadow">
                        <Card.Img variant="top" src={image1} className="rounded-top" style={{ backgroundColor: "#080726" }} />
                        <Card.Body>
                            <Card.Title>Md. Lutfor Rahman</Card.Title>
                            <Card.Text>  Leader & Full Stack Developer</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card className="h-100 rounded custom-shadow">
                        <Card.Img variant="top" src={image4} className="rounded-top" style={{ backgroundColor: "#080726" }} />
                        <Card.Body>
                            <Card.Title>Nurul Islam</Card.Title>
                            <Card.Text> Co-Leader & Backend Developer</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card className="h-100 rounded custom-shadow">
                        <Card.Img variant="top" src={image2} className="rounded-top" style={{ backgroundColor: "#080726" }} />
                        <Card.Body>
                            <Card.Title>Nurar Nahar </Card.Title>
                            <Card.Text>  Frontend Developer</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card className="h-100 rounded custom-shadow">
                        <Card.Img variant="top" src={image3} className="rounded-top" style={{ backgroundColor: "#080726" }} />
                        <Card.Body>
                            <Card.Title>Imam Hassan Rimon</Card.Title>
                            <Card.Text>Frontend & UI Developer</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default Credits;
