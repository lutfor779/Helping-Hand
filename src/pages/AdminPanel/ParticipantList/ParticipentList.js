import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Outlet } from 'react-router-dom';
import { fetchEvents } from '../../../redux/slices/eventsSlice';


const ParticipentList = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchEvents());
    }, [dispatch]);
    const allEvents = useSelector((state) => state.events.services)
    return (
        <div className='row m-0'>
            <div className="col-md-7">
                {allEvents?.map(event => <div >
                    <h3>{event?.title}</h3>
                    <Link to={`list/${event?.title}`}>  see registered list</Link>


                </div>
                )}
            </div>
            <div className="col-md-5">
                <Outlet />
            </div>


        </div>
    );
};

export default ParticipentList;