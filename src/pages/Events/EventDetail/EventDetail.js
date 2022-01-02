import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const EventDetail = () => {
    const { id } = useParams();

    const [event, setEvent] = useState({});   //use redux for store data

    useEffect(() => {

        fetch(`http://localhost:5000/events/${id}`)
            .then(res => res.json())
            .then(data => {
                setEvent(data);

            })
    }, [id]);

    // console.log(event);

    return (
        <div>
            <h1>Event Detail of {id}</h1>
            <h1>Event name {event.title}</h1>
        </div>
    );
};

export default EventDetail;