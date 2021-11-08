import React from 'react';
import AppointmentBanner from '../Components/Appointment/AppointmentBanner';
import AvailableAppointment from '../Components/Appointment/AvailableAppointment';
import Navigation from '../Components/Shared/Navigation';

const Appointment = () => {
    const [date, setDate] = React.useState(new Date());
    return (
        <div>
            <Navigation />
            <AppointmentBanner date={date} setDate={setDate} />
            <AvailableAppointment date={date} />
        </div>
    );
};

export default Appointment;