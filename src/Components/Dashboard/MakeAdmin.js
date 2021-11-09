import { Button, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';

const MakeAdmin = () => {
    const [email, setEmail] = useState('');
    const handleOnChange = (e) => {
        setEmail(e.target.value);
    }
    const handleMakeAdmin = (e) => {
        const user = { email };
        fetch('http://localhost:5000/users/admin', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })
        e.preventDefault();
    }
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
            <Typography variant="h5" sx={{ fontWeight: '500', mb: 5 }}>
                Make new Admin
            </Typography >
            <form onSubmit={handleMakeAdmin}>
                <Box sx={{ display: 'flex' }}>
                    <TextField onChange={handleOnChange} label="Email" variant="standard" />
                    <Button type="submit" variant="contained">Make Admin</Button>
                </Box>
            </form>
        </Box >
    );
};

export default MakeAdmin;