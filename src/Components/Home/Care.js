import { Button, Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import treatment from '../../images/treatment.png'

const Care = () => {
    return (
        <Container>
            <Grid container spacing={5}>
                <Grid item xs={12} sm={12} md={6}>
                    <img style={{ width: '100%' }} src={treatment} alt="" />
                </Grid>
                <Grid item xs={12} sm={12} md={6} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <Box>
                        <Typography variant="h3" sx={{ fontWeight: '600' }}>
                            Exceptional Dental<br />Care, on Your Terms
                        </Typography>
                        <Typography variant="body1" sx={{ margin: '40px 0', letterSpacing: '1.3px', lineHeight: '40px', fontWeight: '500', color: 'rgb(170, 170, 170)' }}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis ratione pariatur dolorem, reprehenderit ducimus voluptates consectetur ad culpa laborum nostrum assumenda incidunt doloribus asperiores debitis nobis deserunt. Aliquam possimus repellendus voluptatibus aspernatur maiores laboriosam. Magni odio blanditiis architecto, dolore magnam iusto, a commodi sit sint veniam exercitationem in deleniti nisi tenetur ea quidem dicta. Quos recusandae perferendis distinctio corporis impedit?
                        </Typography>
                        <Button variant="contained">Learn More</Button>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Care;