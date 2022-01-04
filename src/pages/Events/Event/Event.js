import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Event = ({ event }) => {
    const { _id, image, title, date } = event;

    return (
        <Col>
            <Card className="h-100 rounded">
                <Card.Img variant="top" src={image} height="200" className="rounded-top" />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>Date: {date}</Card.Text>
                </Card.Body>

                <Card.Footer>
                    <Link to={`/eventDetail/${_id}`}>

                        <Button variant="success " >Detail</Button>
                    </Link>




                    <Link to=''>
                        <Button variant="success px-5 " >Detail</Button>
                    </Link>
                </Card.Footer>

                <Link to=''>
                    <Button variant="success " >Detail</Button>
                </Link>

            </Card>
        </Col>
    );
};

export default Event;