import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';
import Footer from '../Shared/Footer/Footer';
import Header from '../Shared/Header/Header';

const Profile = () => {
    const [profile, setProfile] = useState({});
    const { user } = useAuth()
    useEffect(() => {
        fetch(`https://serene-bastion-42312.herokuapp.com/joinedEvents/${user?.email}`)
            .then((res) => res.json())
            .then((data) => {
                setProfile(data)
            });
    }, [user?.email]);
    console.log(profile)
    return (
        <div>
            <Header />

            <div className='container text-center p-5 my-5'>
                <h2 className='text-color mb-3'>My Profile</h2>
                <div style={{ fontFamily: "poppins"}}>
                    <h4>{profile?.displayName}</h4>
                    <p className='m-0'>Role: {profile?.role}</p>
                    <p className='m-0'>Email: {profile?.email}</p>
                    <h4 className='my-3'>My Participant List in these events</h4>
                    {profile?.events?.map(event => <ul>
                        <li style={{listStyleType: "none"}}>{event}</li>
                    </ul>)}
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default Profile;