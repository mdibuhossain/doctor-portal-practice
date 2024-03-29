import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link, NavLink } from 'react-router-dom';
import { useAuth } from '../../Hooks/useAuth';

const Navigation = () => {
    const { user, error, logOut } = useAuth();
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>Doctor Spiral</Link>
                    </Typography>
                    <Link to='/appointment' style={{ textDecoration: 'none', color: 'white' }}><Button color="inherit">Appointment</Button></Link>
                    {!(user?.email) && <Link to='/login' style={{ textDecoration: 'none', color: 'white' }}><Button color="inherit">Login</Button></Link>}
                    {
                        user?.email && <Box>
                            <NavLink to="/dashboard" style={{ textDecoration: 'none', color: 'white' }}><Button color="inherit">Dashboard</Button></NavLink>
                            <Button onClick={logOut} color="inherit">Logout</Button>
                        </Box>
                    }
                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default Navigation;