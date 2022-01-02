import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';

const EventDetail = () => {
    const { id } = useParams();

    const [event, setEvent] = useState({});   //use redux for store data
    console.log(event)
    useEffect(() => {

        fetch(`http://localhost:5000/events/${id}`)
            .then(res => res.json())
            .then(data => {
                setEvent(data);

            })
    }, [id]);

    // console.log(event);

    return (
        <>
            <Header />
            <div className='row'>
                <div className="col-md-6">
                    <img style={{ width: '90%', height: '50vh' }} src={event?.image} alt="" />
                </div>
                <div className="col-md-6">
                    <h1>Event name {event.title}</h1>
                    <p> {event.description}</p>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default EventDetail;