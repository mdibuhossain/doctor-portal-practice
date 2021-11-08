import React, { useState } from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { TextField } from '@mui/material';
import { useAuth } from '../../Hooks/useAuth';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const BookingModal = ({ openBooking, handleClose, handleOpen, date, appointment, setBookingSuccesful }) => {
    const { start, end, name } = appointment;
    const { user } = useAuth();
    const initUserData = {
        patientName: user.displayName,
        email: user.email,
        phone: ''
    }
    const [userData, setUserData] = useState(initUserData);
    const handleOnBlur = (e) => {
        const field = e.target.name;
        const value = e.target.value;
        const updateUserData = { ...userData };
        updateUserData[field] = value;
        setUserData(updateUserData);
    }

    const handleBookingSubmit = (e) => {
        const appointmentInfo = {
            ...userData,
            start: start,
            end: end,
            serviceName: name,
            date: date.toLocaleDateString()
        }
        fetch('http://localhost:5000/appointments', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(appointmentInfo)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    setBookingSuccesful(true);
                }
                handleClose();
            })
        e.preventDefault();
    }
    return (
        <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            open={openBooking}
            onClose={handleClose}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
                timeout: 500,
            }}
        >
            <Fade in={openBooking}>
                <Box sx={style}>
                    <Typography id="transition-modal-title" variant="h6" component="h2">
                        {appointment.name}
                    </Typography>
                    <form onSubmit={handleBookingSubmit}>
                        <TextField
                            disabled
                            sx={{ width: '100%', mb: 1 }}
                            id="outlined-size-small"
                            defaultValue={appointment.start + ' - ' + appointment.end}
                            size="small"
                        />
                        <TextField
                            sx={{ width: '100%', mb: 1 }}
                            id="outlined-size-small"
                            name="patientName"
                            defaultValue={user.displayName}
                            onBlur={handleOnBlur}
                            size="small"
                        />
                        <TextField
                            sx={{ width: '100%', mb: 1 }}
                            id="outlined-size-small"
                            name="email"
                            defaultValue={user.email}
                            onBlur={handleOnBlur}
                            size="small"
                        />
                        <TextField
                            sx={{ width: '100%', mb: 1 }}
                            id="outlined-size-small"
                            name="phone"
                            defaultValue="Phone Number"
                            onBlur={handleOnBlur}
                            size="small"
                        />
                        <TextField
                            disabled
                            sx={{ width: '100%', mb: 1 }}
                            id="outlined-size-small"
                            defaultValue={date.toDateString()}
                            size="small"
                        />
                        <Button type="submit" variant="contained">Submit</Button>
                    </form>
                </Box>
            </Fade>
        </Modal>
    );
};

export default BookingModal;