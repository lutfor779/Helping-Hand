import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';
import DonateBanner from '../DonateBanner/DonateBanner';
import Donation from '../Donation';
import DonationPartners from '../DonationPartners/DonationPartners';

const DonationHome = () => {
    return (
        <div>
            <Header />
            <DonateBanner />
            <Donation />
            <DonationPartners />
            <Footer />
        </div>
    );
};

export default DonationHome;