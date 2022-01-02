import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import HelpPeople from '../HelpPeople/HelpPeople';
import ServiceBanner from '../ServiceBanner/ServiceBanner';
import Services from '../Services/Services';
import Header from '../../Shared/Header/Header';

const ServiceHome = () => {
    return (
        <div>
            <Header />
            <ServiceBanner />
            <Services />
            <HelpPeople />
            <Footer />
        </div>
    );
};

export default ServiceHome;