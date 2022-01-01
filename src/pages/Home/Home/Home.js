import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';
import About from '../About/About';
import Banner from '../Banner/Banner';
import LatestNews from '../LatestNews/LatestNews';

const Home = () => {
    return (
        <div>
            <Header />
            <Banner />
            <About />
            <LatestNews />
            <Footer />
        </div>
    );
};

export default Home;