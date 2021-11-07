import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, Grid } from '@mui/material';

const ServiceItem = ({ service }) => {
    const { name, description, img } = service;
    return (
        <Grid item xs={12} md={4} sm={6}>
            <Card sx={{ maxWidth: 345, textAlign: 'center', boxShadow: 'none', margin: 'auto' }}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        style={{ width: 'auto', height: '150px', margin: '0 auto', paddingTop: '25px' }}
                        image={img}
                        alt="service img"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {description}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </Grid>
    );
};

export default ServiceItem;