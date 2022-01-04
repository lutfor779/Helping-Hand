import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import HelpPeople from '../HelpPeople/HelpPeople';
import Services from '../Services/Services';
import Header from '../../Shared/Header/Header';
import AboutUs from '../AboutUs/AboutUs';
import Activity from '../Activity/Activity';
import ChooseUs from '../ChooseUs/ChooseUs';
import ServiceBanner from '../ServiceBanner/ServiceBanner';

const ServiceHome = () => {
    return (
        <div>
            <Header />
            <ServiceBanner />
            <AboutUs />
            <Services />
            <ChooseUs />
            <Activity />
            <HelpPeople />
            <Footer />
        </div>
    );
};
export default ServiceHome;

