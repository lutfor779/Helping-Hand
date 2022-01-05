import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Outlet } from 'react-router-dom';
import { fetchEvents } from '../../../redux/slices/eventsSlice';
import { Container, Row, Col } from 'react-bootstrap';


const ParticipentList = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchEvents());
    }, [dispatch]);
    const allEvents = useSelector((state) => state.events.services)
    return (
        <Container>
            <Row className='g-0 p-3 bg-light'>
                <Col md={7}>


                    {allEvents?.map(event => <div key={event._id} className='border m-1 p-3' >
                        <h3 className='text-success fw-bold'>{event?.title}</h3>
                        <Link to={`list/${event?.title}`}
                            style={{ textDecoration: "none" }}>See registered list</Link>

                    </div>
                    )}
                </Col>
                <Col md={5} className='border p-5'>
                    <Outlet />
                </Col >
            </Row>
        </Container>
    );
};

export default ParticipentList;