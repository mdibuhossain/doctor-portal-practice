import { CircularProgress } from '@mui/material';
import React from 'react';
import { useAuth } from '../Hooks/useAuth';
import {
    Route,
    Redirect
} from 'react-router-dom';

const PrivateRoute = ({ children, ...rest }) => {
    const { isLoading, user } = useAuth();
    if (isLoading) {
        return <CircularProgress sx={{ position: 'absolute', top: '50%', left: '50%' }} />
    }
    return (
        <Route
            {...rest}
            render={
                ({ location }) => (
                    user?.email ? (
                        children
                    ) : (
                        <Redirect
                            to={{
                                pathname: '/login',
                                state: { from: location }
                            }}
                        />
                    ))
            }
        />
    );
};

export default PrivateRoute;