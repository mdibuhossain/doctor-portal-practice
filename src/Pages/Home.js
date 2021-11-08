import React from 'react';
import AppointmentSection from '../Components/Home/AppointmentSection';
import Care from '../Components/Home/Care';
import Services from '../Components/Home/Services';
import Navigation from '../Components/Shared/Navigation';

const Home = () => {
    return (
        <div>
            <Navigation />
            <Services />
            <Care />
            <AppointmentSection />
        </div>
    );
};

export default Home;