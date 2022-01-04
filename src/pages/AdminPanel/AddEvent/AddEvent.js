import React, { useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';

const AddEvent = () => {
    const { admin } = useAuth();
    const [eventData, setEventData] = useState({});

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLogInData = { ...eventData };
        newLogInData[field] = value;

        setEventData(newLogInData);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (admin) {
            fetch(`https://serene-bastion-42312.herokuapp.com/events`, {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(eventData)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.insertedId) {
                        alert('Event Added Successfully');
                        e.target.reset();
                    }
                })
        }
    }


    return (
        <Container>
            <div className='row justify-content-center pt-5'>
                <Form onSubmit={handleSubmit} style={{ fontFamily: "poppins" }} className='col-md-6 bg-light p-5 w-sm-100 custom-shadow border rounded-3'>
                    <h2 className='text-center text-danger fw-bold'>Add Event</h2>
                    <Form.Group className="mb-3">
                        <Form.Label>Event Title</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Helping people"
                            name="title"
                            required
                            onBlur={handleOnBlur} />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Description</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Details of the event"
                            name="description"
                            required
                            onBlur={handleOnBlur} />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Image Link</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter the link of the event lorem simsdflk sdflsdf "
                            name='image'
                            required
                            onBlur={handleOnBlur} />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Start Date</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="dd-mm-yy"
                            name="date"
                            required
                            onBlur={handleOnBlur} />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Event Location</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Address"
                            name="place"
                            required
                            onBlur={handleOnBlur} />
                    </Form.Group>

                    <Button className='button-color px-5 border-0 text-center' type="submit">
                        Submit
                    </Button>
                </Form>
            </div>
        </Container>
    );
};

export default AddEvent;