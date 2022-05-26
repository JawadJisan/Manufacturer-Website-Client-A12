import React from 'react';
import Navbar from '../Navbar/Navbar';
import Banner from './Banner';
import BusinessSummery from './BusinessSummery';
import Footer from './Footer';
import New from './New';
import PartsAll from './PartsAll';
import Reviews from './Reviews';
import Section from './Section';
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
            <New></New>
            <Section></Section>
            <Footer></Footer>
        </div>
    );
};

export default Home;