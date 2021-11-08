import { Alert, Button, CircularProgress, Container, Grid, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import { useAuth } from '../Hooks/useAuth';
import login from '../images/login.png';

const Register = () => {
    const [userData, setUserData] = useState({});
    const { user, userRegister, setError, error, isLoading } = useAuth();
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
        if (userData?.password === userData?.password2) {
            userRegister(userData?.name, userData?.email, userData?.password, history);
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
                        {!isLoading && <form onSubmit={handleLogIn}>
                            <Typography variant="body1" sx={{ mb: 2 }}>
                                Sign out
                            </Typography>
                            <TextField
                                id="standard-basic"
                                label="Enter Your Name"
                                type="text"
                                name="name"
                                variant="standard"
                                sx={{ width: 1, mb: 2 }}
                                onChange={handleData}
                            />
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
                        </form>}
                        {isLoading && <CircularProgress />}
                        {user?.email && <Alert severity="success">User Created successfully!</Alert>}
                        {error && <Alert severity="error">{error}</Alert>}
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