import React, { useEffect } from 'react';
import { Container, Row } from 'react-bootstrap';
import Event from '../Event/Event';
import { useDispatch, useSelector } from 'react-redux';
import { fetchEvents } from '../../../redux/slices/eventsSlice';

const AllEvents = () => {
<<<<<<< HEAD
    const { setIsLoading } = useAuth();


    // here we will use redux 
=======
>>>>>>> 0022485914730076fabe0bf2c80c2411247cab3d
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchEvents());
    }, [dispatch]);
<<<<<<< HEAD
    const allEvents = useSelector((state) => state.events.services)
    console.log()



=======
>>>>>>> 0022485914730076fabe0bf2c80c2411247cab3d

    const allEvents = useSelector((state) => state.events.services)

    return (

        <Container>
            <h1 className='text-center text-warning bg-light p-3 rounded'>Upcoming Events</h1>
            <Row xs={1} md={2} lg={4} className="g-4 pt-5 bg-light p-3">
                {
                    allEvents.length !== 0 && allEvents.map(event => <Event key={event._id} event={event} />)
                }
            </Row>

<<<<<<< HEAD
                    {
                        allEvents.length !== 0 && allEvents.map(event => <Event key={event._id} event={event} />)
                    }
                </Row>
=======
        </Container>
>>>>>>> 0022485914730076fabe0bf2c80c2411247cab3d


    );
};

export default AllEvents;