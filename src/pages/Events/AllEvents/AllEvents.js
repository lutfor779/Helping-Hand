import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';
import Event from '../Event/Event';
import { useDispatch, useSelector } from 'react-redux';
import { fetchEvents } from '../../../redux/slices/eventsSlice';

const AllEvents = () => {
    const { setIsLoading } = useAuth();


    // here we will use redux 
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchEvents());
    }, [dispatch]);
    const allEvents = useSelector((state) => state.events.services)
    console.log()





    return (
        <div>
            <Container>
                <h1 className='text-center my-5'>Upcoming Events</h1>

                <Row xs={1} md={2} lg={3} className="g-4">

                    {
                        allEvents.length !== 0 && allEvents.map(event => <Event key={event._id} event={event} />)
                    }
                </Row>

            </Container>
        </div>

    );
};

export default AllEvents;