import React from 'react';
import Banner from './Banner';
import BusinessSummery from './BusinessSummery';
import PartsAll from './PartsAll';
import Reviews from './Reviews';

const Home = () => {
    return (
        <div>
            <Banner/>
            <PartsAll/>
            <Reviews/>
            <BusinessSummery/>
        </div>
    );
};

export default Home;