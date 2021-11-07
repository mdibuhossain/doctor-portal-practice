import { ConstructionOutlined } from '@mui/icons-material';
import { Button, Container, Grid, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../Hooks/useAuth';
import login from '../images/login.png';

const Login = () => {
    const [userData, setUserData] = useState({});
    const { user, logIn } = useAuth();
    console.log(user);

    const handleData = (e) => {
        const fieldName = e.target.name;
        const fieldValue = e.target.value;
        const newData = { ...userData };
        newData[fieldName] = fieldValue;
        setUserData(newData);
    }

    const handleLogIn = (e) => {
        logIn(userData?.email, userData?.password)
        e.preventDefault();
    }
    return (
        <Box>
            <Container>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6} sx={{ display: 'flex', alignItems: 'center' }} >
                        <form onSubmit={handleLogIn}>
                            <Typography variant="body1" sx={{ mb: 2 }}>
                                Login
                            </Typography>
                            <TextField
                                id="standard-basic"
                                label="Your Email"
                                type="email"
                                name="email"
                                variant="standard"
                                sx={{ width: 1, mb: 2 }}
                                onChange={handleData}
                            />
                            <TextField
                                id="standard-basic"
                                name="password"
                                type="password"
                                label="Your Password"
                                variant="standard"
                                sx={{ width: 1, mb: 5 }}
                                onChange={handleData}
                            />
                            <Button type="submit" variant="contained" sx={{ width: 1 }}>Login</Button>
                            <Link to='/register' style={{ textDecoration: 'none' }}>
                                <Button variant="text" sx={{ width: 1 }}>Don't have an account?</Button>
                            </Link>
                        </form>
                    </Grid>
                    <Grid item xs={12} md={6} >
                        <img style={{ margin: 'auto' }} src={login} alt="" />
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default Login;