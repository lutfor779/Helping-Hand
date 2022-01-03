import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';
import AllEvents from '../AllEvents/AllEvents';

const EventsHome = () => {
    return (
        <div>
            <Header />
            <AllEvents />
            <Footer />
        </div>
    );
};

export default EventsHome;