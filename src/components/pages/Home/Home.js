import React from 'react';
import Navbar from '../Navbar/Navbar';
import Banner from './Banner';
import BusinessSummery from './BusinessSummery';
import PartsAll from './PartsAll';
import Reviews from './Reviews';
import TopBanner from './TopBanner';
import UpComing from './UpComing';

const Home = () => {
    return (
        <div style={{ backgroundColor: '#f0ece4' }}>
            <TopBanner/>
            <PartsAll/>
            <Reviews/>
            <BusinessSummery/>
            <UpComing></UpComing>
        </div>
    );
};

export default Home;