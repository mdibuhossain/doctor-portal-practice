import { Container, Grid } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import Celender from '../Shared/Celender';
import chair from '../../images/chair.png'
import appointmentHeader from '../../images/appointment-bg.png'

const AppointmentBanner = ({ date, setDate }) => {

    const appointmentHeaderBg = {
        background: `url(${appointmentHeader})`
    }

    return (
        <Box style={appointmentHeaderBg} sx={{ display: 'flex', alignItems: 'center' }}>
            <Container sx={{ margin: '20px auto' }}>
                <Grid container spacing={5}>
                    <Grid item xs={12} sm={12} md={6}>
                        <Celender date={date} setDate={setDate} />
                    </Grid>
                    <Grid item xs={12} sm={12} md={6}>
                        <img style={{ width: '100%' }} src={chair} alt="" />
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default AppointmentBanner;