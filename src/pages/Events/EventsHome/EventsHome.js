import React from 'react';
import Activity from '../../Services/Activity/Activity';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';
import AllEvents from '../AllEvents/AllEvents';

const EventsHome = () => {
    return (
        <div>
            <Header />
            <AllEvents />
            <Activity />
            <Footer />
        </div>
    );
};

export default EventsHome;