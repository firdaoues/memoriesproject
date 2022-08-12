import React from 'react'
import { Grid, CircularProgress } from "@material-ui/core";
import { useSelector } from "react-redux";
import User from './User/User';

const Users = () => {
  const {users, isLoading} = useSelector((state) => state.users);

  if (users.length && !isLoading) return 'no users !';
  return (
    isLoading ? <CircularProgress /> : (
    <Grid
   
    {users.map((user) => {
     
        <Grid key={user._id} item xs={12} sm={12} md={6} lg={3}>
          <User user={user} />
        </Grid>
    
    })}>

    </Grid>

    )
  )
}

export default Users