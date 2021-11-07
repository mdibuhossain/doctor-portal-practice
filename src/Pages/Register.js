import { Button, Container, Grid, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../Hooks/useAuth';
import login from '../images/login.png';

const Register = () => {
    const [userData, setUserData] = useState({});
    const { user, userRegister, setError, error } = useAuth();
    const handleData = (e) => {
        const fieldName = e.target.name;
        const fieldValue = e.target.value;
        const newData = { ...userData };
        newData[fieldName] = fieldValue;
        setUserData(newData);
    }
    const handleLogIn = (e) => {
        if (userData?.password === userData?.password2) {
            userRegister(userData?.email, userData?.password);
        }
        else
            setError("Password doesn't match");
        e.preventDefault();
    }
    return (
        <Box>
            <Container>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6} sx={{ display: 'flex', alignItems: 'center' }} >
                        <form onSubmit={handleLogIn}>
                            <Typography variant="body1" sx={{ mb: 2 }}>
                                Sign out
                            </Typography>
                            <TextField
                                id="standard-basic"
                                label="Enter Email"
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
                                label="Enter Password"
                                variant="standard"
                                sx={{ width: 1, mb: 2 }}
                                onChange={handleData}
                            />
                            <TextField
                                id="standard-basic"
                                name="password2"
                                type="password"
                                label="Confirm Password"
                                variant="standard"
                                sx={{ width: 1, mb: 5 }}
                                onChange={handleData}
                            />
                            <Button type="submit" variant="contained" sx={{ width: 1 }}>Sign out</Button>
                            <Link to='/login' style={{ textDecoration: 'none' }}>
                                <Button variant="text" sx={{ width: 1 }}>Already have an account?</Button>
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

export default Register;