import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Event = ({ event }) => {
    const { _id, image, title, date, place } = event;
    console.log(event)

    return (
        <Col>
            <Card className="h-100 rounded">
                <Card.Img variant="top" src={image} height="200" className="rounded-top" />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>Event Date: {date}</Card.Text>
                    <Card.Text>Event Place: {place}</Card.Text>
                </Card.Body>

                <Card.Footer>
                    <Link to={`/eventDetail/${_id}`}>
                        <Button variant="success " >Detail</Button>
                    </Link>
                </Card.Footer>
            </Card>
        </Col>
    );
};

export default Event;