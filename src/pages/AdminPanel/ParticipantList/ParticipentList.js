import React, { useEffect } from 'react';
import { BsEye } from 'react-icons/bs';
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
        <div className='container bg-light p-5 my-5'>
            <div className='row'>
                <h2 className='text-color text-center mb-3'>All Participant List</h2>
                <div className="col-md-7">
                    {allEvents?.map(event => <div >
                        <h5>{event?.title}</h5>
                        <Link to={`list/${event?.title}`} style={{textDecoration: "none",}} > <BsEye /> See Registered List</Link>
                    </div>
                    )}
                </div>
                <div className="col-md-5">
                    <Outlet />
                </div>
            </div>


        </div>
    );
};

export default ParticipentList;