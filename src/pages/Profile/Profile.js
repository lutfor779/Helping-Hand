import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';
import Footer from '../Shared/Footer/Footer';
import Header from '../Shared/Header/Header';


const Profile = () => {
    const [profile, setProfile] = useState({});
    const { user } = useAuth()
    useEffect(() => {
        fetch(`http://localhost:5000/joinedEvents/${user?.email}`)
            .then((res) => res.json())
            .then((data) => {
                setProfile(data)
            });
    }, [user?.email]);
    console.log(profile)
    return (
        <div className='row'>
            <Header />
            <div className="col-md-6">
                <h3>Name: {profile?.displayName}</h3>
                <p>Role: {profile?.role}</p>
                <p>Email: {profile?.email}</p>
            </div>
            <div className="col-md-6">
                <h3>You participate in these events</h3>
                {profile?.events?.map(event => <ul>
                    <li>{event}</li>
                </ul>)}
            </div>

            <Footer />
        </div>
    );
};

export default Profile;