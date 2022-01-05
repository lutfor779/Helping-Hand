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
            <Row className='g-0'>
                <Col md={7}>


                    {allEvents?.map(event => <div >
                        <h3>{event?.title}</h3>
                        <Link to={`list/${event?.title}`}>  see registered list</Link>


                    </div>
                    )}
                </Col>
                <Col md={5}>
                    <Outlet />
                </Col >


            </Row>
        </Container>
    );
};

export default ParticipentList;