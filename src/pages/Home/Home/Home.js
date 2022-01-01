import React from 'react';
import Header from '../../Shared/Header/Header';
import About from '../About/About';
import LatestNews from '../LatestNews/LatestNews';

const Home = () => {
    return (
        <div>
            <Header />
            <About />
            <LatestNews />
        </div>
    );
};

export default Home;