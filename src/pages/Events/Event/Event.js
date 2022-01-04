import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Event = ({ event }) => {
    const { _id, image, title, date } = event;

    return (
        <Col>
            <Card className="h-100 rounded">
                <Card.Img variant="top" src={image} height="250" className="rounded-top" />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>

                    <Card.Text>Date: {date}</Card.Text>

                    <Link to={`/eventDetail/${_id}`}>
                        <Button variant="success " >Detail</Button>
                    </Link>



                </Card.Body>
            </Card>
        </Col>
    );
};

export default Event;