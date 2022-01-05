import React, { useEffect } from 'react';
import { Container, Row } from 'react-bootstrap';
import Event from '../Event/Event';
import { useDispatch, useSelector } from 'react-redux';
import { fetchEvents } from '../../../redux/slices/eventsSlice';
import useAuth from '../../../hooks/useAuth';

const AllEvents = () => {


    const { setIsLoading } = useAuth();


    // here we will use redux 



    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchEvents());
    }, [dispatch]);

    const allEvents = useSelector((state) => state.events.services)


    return (
        <Container>
            <h1 className='text-center text-warning bg-light p-3 rounded'>Upcoming Events</h1>
            <Row xs={1} md={2} lg={4} className="g-4 pt-5 bg-light p-3">
                {
                    allEvents.length !== 0 && allEvents.map(event => <Event key={event._id} event={event} />)
                }
            </Row>
        </Container>


    );
};

export default AllEvents;