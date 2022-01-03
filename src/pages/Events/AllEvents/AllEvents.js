import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';
import Event from '../Event/Event';
import { useDispatch, useSelector } from 'react-redux';
import { fetchEvents } from '../../../redux/slices/eventsSlice';

const AllEvents = () => {
    const { setIsLoading } = useAuth();
    const [events, setEvents] = useState([]);

    // here we will use redux replace of useState
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchEvents());
    }, []);
    const books = useSelector((state) => state.events.services)
    console.log(books)


    useEffect(() => {
        setIsLoading(true);
        fetch(`http://localhost:5000/events`)
            .then(res => res.json())
            .then(data => {
                setEvents(data);
                setIsLoading(false);
            });
    }, [setIsLoading]);


    return (
        <div>
            <Container>
                <h1 className='text-center my-5'>Upcoming Events</h1>

                <Row xs={1} md={2} lg={3} className="g-4">

                    {
                        events.length !== 0 && events.map(event => <Event key={event._id} event={event} />)
                    }
                </Row>

            </Container>
        </div>

    );
};

export default AllEvents;