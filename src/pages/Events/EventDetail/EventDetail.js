import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import './EventDetails.css';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';

const EventDetail = () => {
    const { id } = useParams();
    const { user } = useAuth();
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');
    const [rating, setRating] = useState('');

    const [event, setEvent] = useState({});   //use redux for store data
    console.log(event)
    useEffect(() => {

        fetch(`http://localhost:5000/events/${id}`)
            .then(res => res.json())
            .then(data => {
                setEvent(data);

            })
    }, [id]);

    const review = {
        name: name,
        email: email,
        message: message,
        rating: rating,
        event: event?.title
    }
    console.log(review)
    const handleReview = (e) => {
        e.preventDefault()
        fetch(`http://localhost:5000/review`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert(' Added Successfully');
                    e.target.reset();
                }
            })
    }
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
                    <p> {event?.description}</p>
                    <p> {event?.place}</p>
                    <p> {event?.date}</p>
                    <button>Join in the event as a volunteer</button>
                </div>


            </div>
            <div className='row m-0 p-4 review'>
                <h2>Give your review about {event?.title}</h2>
                <form onSubmit={handleReview}>
                    <input required onBlur={e => setName(e.target.value)} defaultValue={user?.displayName} placeholder='Name' type="text" /> <br />
                    <input required onBlur={e => setEmail(e.target.value)} defaultValue={user?.email} placeholder='email' type="email" /> <br />
                    <input required onBlur={e => setRating(e.target.value)} placeholder='Rate between 1-5' type="number" max={5} min={1} /> <br />
                    <textarea required onBlur={e => setMessage(e.target.value)} placeholder='Your Message' type="text" /> <br />
                    <button type="submit"> Submit</button>
                </form>

            </div>



            <Footer />
        </>
    );
};

export default EventDetail;