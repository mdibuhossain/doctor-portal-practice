import React from 'react';
import AppointmentSection from '../Components/Home/AppointmentSection';
import Care from '../Components/Home/Care';
import Services from '../Components/Home/Services';

const Home = () => {
    return (
        <div>
            <Services />
            <Care />
            <AppointmentSection />
        </div>
    );
};

export default Home;