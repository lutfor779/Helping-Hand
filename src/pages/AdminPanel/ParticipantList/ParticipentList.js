import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchEvents } from '../../../redux/slices/eventsSlice';


const ParticipentList = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchEvents());
    }, [dispatch]);
    const allEvents = useSelector((state) => state.events.services)
    return (
        <div className='row m-0'>
            {allEvents?.map(event => <div className="col-md-4">
                <h3>{event?.title}</h3>
                <Link to={`list/${event?.title}`}>  see registered list</Link>

            </div>
            )}

        </div>
    );
};

export default ParticipentList;