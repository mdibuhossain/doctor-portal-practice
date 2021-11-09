import React from 'react';
import { Grid } from '@mui/material';
import Celender from '../Shared/Celender';
import UserAppointment from './UserAppointment';

const DashboardHome = () => {
    const [date, setDate] = React.useState(new Date());
    return (
        <Grid container spacing={2}>
            <Grid item xs={12} lg={6}>
                <Celender date={date} setDate={setDate} />
            </Grid>
            <Grid item xs={12} lg={6}>
                <UserAppointment date={date} />
            </Grid>
        </Grid>
    );
};

export default DashboardHome;