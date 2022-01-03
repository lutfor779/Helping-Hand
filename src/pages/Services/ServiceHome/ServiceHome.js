import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import HelpPeople from '../HelpPeople/HelpPeople';
// import ServiceBanner from '../ServiceBanner/ServiceBanner';
import Services from '../Services/Services';
import { Breadcrumb } from 'react-bootstrap';
import Header from '../../Shared/Header/Header';
import AboutUs from '../AboutUs/AboutUs';
import Activity from '../Activity/Activity';
import ChooseUs from '../ChooseUs/ChooseUs';

const ServiceHome = () => {
    return (
        <div>
            <Header />
            <div className="section-header mb-5">
                <div className="container">
                    <div className="row text-center py-5">
                        <div className="col text-center">
                            <h2 className="text-white">Services</h2>
                            <Breadcrumb>
                                <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
                                <Breadcrumb.Item href="" active>
                                Services
                                </Breadcrumb.Item>
                            </Breadcrumb>
                        </div>
                    </div>
                </div>
            </div>
            {/* <ServiceBanner /> */}
            <Services />
            <HelpPeople />
            
            <Activity />
            <ChooseUs />
            <AboutUs />
            <Footer />
        </div>
    );
};
export default ServiceHome;

