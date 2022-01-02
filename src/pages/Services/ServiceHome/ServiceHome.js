import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';
import HelpPeople from '../HelpPeople/HelpPeople';
import ServiceBanner from '../ServiceBanner/ServiceBanner';
import Services from '../Services/Services';

const ServiceHome = () => {
    return (
        <div>
            <Navigation />
            <ServiceBanner />
            <Services />
            <HelpPeople />
            <Footer />
        </div>
    );
};

export default ServiceHome;