
import React , { useEffect }from 'react'

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import {useHistory} from 'react-router-dom';
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getUsers , getUser} from "../../actions/posts";
import useStyles from "./styles";



const Users =() => {
  const classes = useStyles();
    const dispatch = useDispatch();
    const history = useHistory();
    const users  = useSelector((state) => state.users);
  
    
    useEffect (() => {
        dispatch(getUsers());
     
      }, [dispatch])
    
   
      const openUser = (_id) => history.push(`/users/${_id}`);
  return (
    <>
<TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table" >
        <TableHead>
        <TableRow className={classes.head}>
            <TableCell >Name</TableCell>
            <TableCell >Email</TableCell>
            </TableRow>
        </TableHead>
        <TableBody>
        {users.map((user) => (
         <>
         <TableRow className={classes.user} key={user._id}  onClick={() => openUser(user._id)} >
        <TableCell  >
        
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