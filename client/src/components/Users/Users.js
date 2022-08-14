
import React , { useEffect }from 'react'

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getUsers} from "../../actions/posts";
import useStyles from "./styles";

const handleClick = async () => {
}

const Users = () => {
  const classes = useStyles();
    const dispatch = useDispatch();
    const users = useSelector((state) => state.users);
    console.log(users);
   
    useEffect (() => {
        dispatch(getUsers());
      }, [dispatch])
  return (
    <>
<TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
        <TableRow >
            <TableCell className={classes.table}>Name</TableCell>
            <TableCell >Email</TableCell>
            </TableRow>
        </TableHead>
        <TableBody>
        { users.map((user) => (
         <>
         <TableRow>
        <TableCell key={user.id}
   onClick={() => handleClick(user.id)}>
         
        {user.name}
        
      </TableCell>
      <TableCell >{user.email}</TableCell>
   </TableRow>
      </>
      ))}
        </TableBody>
        </Table>
      </TableContainer>
   
   
    </>
  )
    }

export default Users