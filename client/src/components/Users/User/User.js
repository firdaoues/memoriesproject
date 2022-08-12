import React, { useState } from 'react'
import {Card, CardMedia, Typography } from '@material-ui/core'


const User = (user) => {
  return (
    <Card raised elevation={6}>
    <div>
      <Typography variant="body2">{user.name}</Typography>
      <Typography variant="subtitle">{user.email}</Typography>
    </div>
    </Card>
  )
}

export default User