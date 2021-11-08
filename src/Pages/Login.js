import { Alert, Button, CircularProgress, Container, Grid, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import { useAuth } from '../Hooks/useAuth';
import login from '../images/login.png';
import Navigation from '../Components/Shared/Navigation';

const Login = () => {
    const [userData, setUserData] = useState({});
    const { user, logIn, isLoading, error } = useAuth();
    const location = useLocation();
    const history = useHistory();



    const handleData = (e) => {
        const fieldName = e.target.name;
        const fieldValue = e.target.value;
        const newData = { ...userData };
        newData[fieldName] = fieldValue;
        setUserData(newData);
    }

    const handleLogIn = (e) => {
        logIn(userData?.email, userData?.password, location, history)
        e.preventDefault();
    }
    return (
        <>
            <Navigation />
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
                                {isLoading && <CircularProgress />}
                                {user?.email && <Alert severity="success">Login successfully!</Alert>}
                                {error && <Alert severity="error">{error}</Alert>}
                            </form>
                        </Grid>
                        <Grid item xs={12} md={6} >
                            <img style={{ margin: 'auto' }} src={login} alt="" />
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </>
    );
};

export default Login;