import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import image1 from '../../../images/lutfor2.png';
import image2 from '../../../images/nahar.png';
import image3 from '../../../images/rimon.png';
import image4 from '../../../images/tanvir.png';

const Credits = () => {
    return (
        <Container>
            <h2 className='text-center text-danger fw-bold pt-4'>
                Team Contributors
            </h2>
            <Row xs={1} md={2} lg={4} className="g-5 pt-5 bg-light p-3 text-center">
                <Col>
                    <Card className="h-100 rounded">
                        <Card.Img variant="top" src={image1} className="rounded-top" style={{ backgroundColor: "#080726" }} />
                        <Card.Body>
                            <Card.Title>Md. Lutfor Rahman</Card.Title>
                            <Card.Text>  Team Leader</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card className="h-100 rounded">
                        <Card.Img variant="top" src={image2} className="rounded-top" style={{ backgroundColor: "#080726" }} />
                        <Card.Body>
                            <Card.Title>Nurar Nahar </Card.Title>
                            <Card.Text>  Frontend Developer</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card className="h-100 rounded">
                        <Card.Img variant="top" src={image4} className="rounded-top" style={{ backgroundColor: "#080726" }} />
                        <Card.Body>
                            <Card.Title>Nurul Islam</Card.Title>
                            <Card.Text>  Backend Developer</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card className="h-100 rounded">
                        <Card.Img variant="top" src={image3} className="rounded-top" style={{ backgroundColor: "#080726" }} />
                        <Card.Body>
                            <Card.Title>Imam Hassan Rimon</Card.Title>
                            <Card.Text>  UI designer</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default Credits;