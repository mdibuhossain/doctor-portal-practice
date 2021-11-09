import React, { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useAuth } from '../../Hooks/useAuth';

function createData(
    name: string,
    calories: number,
    fat: number,
    carbs: number,
    protein: number,
) {
    return { name, calories, fat, carbs, protein };
}

const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
];

const UserAppointment = ({ date }) => {
    const { user } = useAuth();
    const [appointmentList, setAppointmentList] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/appointments?email=${user.email}&date=${date.toLocaleDateString()}`)
            .then(res => res.json())
            .then(data => setAppointmentList(data))
    }, [date])

    return (
        <TableContainer component={Paper}>
            <Table aria-label="Appointment table">
                <TableHead>
                    <TableRow>
                        <TableCell>Patient Name</TableCell>
                        <TableCell>Service</TableCell>
                        <TableCell>Time</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {appointmentList.map((row) => (
                        <TableRow
                            key={row._id}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">{user.displayName}</TableCell>
                            <TableCell>{row.serviceName}</TableCell>
                            <TableCell>{row.start + ' - ' + row.end}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default UserAppointment;