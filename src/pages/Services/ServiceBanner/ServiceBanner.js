import React from 'react';
import './ServiceBanner.css';

const ServiceBanner = () => {
    return (
        <div className="service-banner">
            <div className="container bg-color-sm text-center">
                <div className='row align-items-center'>
                    <div className="text-light">
                        <h3 className="mt-3 text-color" >Helping Hand</h3>
                        <h1 className="mt-3 text-size" >Mission To Hopeless People</h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceBanner;