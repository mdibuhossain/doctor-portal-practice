import { Button, Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import doctor from '../../images/doctor.png'
import appointmentBg from '../../images/appointment-bg.png'
import { NavLink } from 'react-router-dom';

const appointmentBgStyle = {
    background: `url(${appointmentBg})`,
    backgroundColor: 'rgba(45, 58, 74, 0.9)',
    backgroundBlendMode: 'darken, luminosity',
    marginTop: 175
}

const AppointmentSection = () => {
    return (
        <Box style={appointmentBgStyle}>
            <Container>
                <Grid container>
                    <Grid item xm={12} sm={12} md={6}>
                        <img style={{ marginTop: '-135px', width: '100%' }} src={doctor} alt="" />
                    </Grid>
                    <Grid item xm={12} sm={12} md={6} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <Box sx={{ color: 'white' }}>
                            <Typography variant="h6">
                                APPOINTMENT
                            </Typography>
                            <Typography variant="h4" sx={{ margin: '20px 0' }}>
                                MAKE AN APPOINTMENT<br />TODAY
                            </Typography>
                            <Typography variant="body1" sx={{ margin: '30px 0', lineHeight: '40px', letterSpacing: '1.3' }}>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis ratione pariatur dolorem, reprehenderit ducimus voluptates consectetur ad culpa laborum nostrum assumenda incidunt
                            </Typography>
                            <NavLink to="/appointment" style={{ textDecoration: 'none' }}><Button variant="contained">Learn more</Button></NavLink>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default AppointmentSection;