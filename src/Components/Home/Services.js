import React from 'react';
import ServiceItem from './ServiceItem';
import fluoride from '../../images/fluoride.png';
import cavity from '../../images/cavity.png';
import whitening from '../../images/whitening.png';
import { Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';

const Services = () => {
    const services = [
        {
            id: "00x1",
            name: "Fluoride Treatment",
            description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo libero facere minima vitae quis saepe, placeat porro sequi velit officiis.",
            img: fluoride
        },
        {
            id: "00x2",
            name: "Cavity Filling",
            description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo libero facere minima vitae quis saepe, placeat porro sequi velit officiis.",
            img: cavity
        },
        {
            id: "00x3",
            name: "Teath Whitening",
            description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo libero facere minima vitae quis saepe, placeat porro sequi velit officiis.",
            img: whitening
        }
    ]

    return (
        <Container sx={{ textAlign: 'center' }}>
            <Box sx={{ margin: '10px 0px' }}>
                <Typography variant="h6" color="text.secondary" sx={{ fontWeight: 600 }}>
                    OUR SERVICE
                </Typography>
                <Typography variant="h4" sx={{ fontWeight: 600 }}>
                    SERVICE WE PROVIDE
                </Typography>
            </Box>
            <Grid container spacing={2}>
                {
                    services.map(service => <ServiceItem key={service.id} service={service} />)
                }
            </Grid>
        </Container>
    );
};

export default Services;