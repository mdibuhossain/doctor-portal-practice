import React from 'react';
import AppointmentBanner from '../Components/Appointment/AppointmentBanner';
import AvailableAppointment from '../Components/Appointment/AvailableAppointment';

const Appointment = () => {
    return (
        <div>
            <AppointmentBanner />
            <AvailableAppointment />
        </div>
    );
};

export default Appointment;