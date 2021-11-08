import { Button, Container, Grid, Paper, Typography, Alert } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import Booking from './Booking';

const AvailableAppointment = ({ date }) => {

    const [bookingSuccesful, setBookingSuccesful] = useState(false);

    const appointmentList = [
        {
            name: "Teeth Orthodontics",
            start: "8:00 AM",
            end: "9:00 AM",
            space: "10"
        },
        {
            name: "Cosmetic Dentistry",
            start: "10:05 AM",
            end: "11:30 AM",
            space: "10"
        },
        {
            name: "Teeth Cleaning",
            start: "5:00 PM",
            end: "6:30 PM",
            space: "10"
        },
        {
            name: "Cavity Protection",
            start: "7:00 AM",
            end: "8:30 AM",
            space: "10"
        },
        {
            name: "Teeth Orthodontics",
            start: "8:00 AM",
            end: "9:00 AM",
            space: "10"
        },
        {
            name: "Cosmetic Dentistry",
            start: "10:05 AM",
            end: "11:30 AM",
            space: "10"
        }
    ]


    return (
        <Box sx={{ textAlign: 'center' }}>
            <Container>
                <Typography variant="h4" sx={{ fontWeight: '500', color: 'rgb(170, 170, 170)' }}>
                    Available Appointment on {date.toDateString()}
                </Typography>
                {bookingSuccesful && <Alert severity="success">Appointment booked successfully!</Alert>}
                <Grid container spacing={5}>
                    {
                        appointmentList.map((appointment, index) => <Booking
                            key={index}
                            date={date}
                            appointment={appointment}
                            setBookingSuccesful={setBookingSuccesful}
                        />)
                    }
                </Grid>
            </Container>
        </Box>
    );
};

export default AvailableAppointment;