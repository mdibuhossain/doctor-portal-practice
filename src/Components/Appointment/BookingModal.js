import React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { TextField } from '@mui/material';

const BookingModal = ({ openBooking, handleClose, handleOpen, date, appointment }) => {
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

    const handleBookingSubmit = (e) => {
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
                            // onBlur={handleOnBlur}
                            // defaultValue={user.displayName}
                            size="small"
                        />
                        <TextField
                            sx={{ width: '100%', mb: 1 }}
                            id="outlined-size-small"
                            name="email"
                            // onBlur={handleOnBlur}
                            // defaultValue={user.email}
                            size="small"
                        />
                        <TextField
                            sx={{ width: '100%', mb: 1 }}
                            id="outlined-size-small"
                            name="phone"
                            // onBlur={handleOnBlur}
                            defaultValue="Phone Number"
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