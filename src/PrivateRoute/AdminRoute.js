import { CircularProgress } from '@mui/material';
import React from 'react';
import { useAuth } from '../Hooks/useAuth';
import {
    Route,
    Redirect
} from 'react-router-dom';

const AdminRoute = ({ children, ...rest }) => {
    const { isLoading, user, admin } = useAuth();
    if (isLoading) {
        return <CircularProgress sx={{ position: 'absolute', top: '50%', left: '50%' }} />
    }
    return (
        <Route
            {...rest}
            render={
                ({ location }) => (
                    (user?.email && admin) ? (
                        children
                    ) : (
                        <Redirect
                            to={{
                                pathname: '/',
                                state: { from: location }
                            }}
                        />
                    ))
            }
        />
    );
};

export default AdminRoute;