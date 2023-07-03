import * as React from 'react';
import './../styles/datatable.scss'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useLocation, useNavigate } from "react-router-dom";
import { Box } from '@mui/material';
import CancelPresentationOutlinedIcon from '@mui/icons-material/CancelPresentationOutlined';

export default function DataTable() {
  const location = useLocation();
  const navigate = useNavigate();
  const users = location.state.users;
  return (
    <>
      <Box className="btn-cross"><CancelPresentationOutlinedIcon onClick={() => { navigate('/') }} /></Box>
      <TableContainer component={Paper} className='data-table'>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell align="right">Height</TableCell>
              <TableCell align="right">Mass</TableCell>
              <TableCell align="right">Hair Color</TableCell>
              <TableCell align="right">Gender</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users?.map((user) => (
              <TableRow
                key={user.name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {user.name}
                </TableCell>
                <TableCell align="right">{user.height}</TableCell>
                <TableCell align="right">{user.mass}</TableCell>
                <TableCell align="right">{user.hair_color}</TableCell>
                <TableCell align="right">{user.gender}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}