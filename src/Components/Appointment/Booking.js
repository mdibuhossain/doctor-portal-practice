import { Button, Grid, Paper, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import BookingModal from './BookingModal';

const Booking = ({ appointment, date }) => {
    const [openBooking, setOpenBooking] = React.useState(false);
    const handleOpen = () => setOpenBooking(true);
    const handleClose = () => setOpenBooking(false);
    return (
        <>
            <Grid item xm={12} sm={6} md={4}>
                <Paper elevation={3} sx={{ padding: '20px 0', color: 'rgb(170, 170, 170)', width: '100%' }}>
                    <Box sx={{ marginBottom: '10px' }}>
                        <Typography variant="h4" sx={{ fontWeight: '500' }}>
                            {appointment.name}
                        </Typography>
                        <Typography variant="h6" sx={{ color: 'black' }}>
                            {appointment.start} - {appointment.end}
                        </Typography>
                        <Typography variant="body2">
                            {appointment.space} Space availabe
                        </Typography>
                    </Box>
                    <Button onClick={handleOpen} variant="contained">BOOK APPOINTMENT</Button>
                </Paper>
            </Grid>
            <BookingModal
                appointment={appointment}
                date={date}
                handleOpen={handleOpen}
                handleClose={handleClose}
                openBooking={openBooking}
            />
        </>
    );
};

export default Booking;