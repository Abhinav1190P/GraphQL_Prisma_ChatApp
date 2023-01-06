import React from 'react'
import { Box } from '@mui/system'
import { Divider, Typography } from '@mui/material'
import UserCard from './UserCard'
function SideBar() {

    const users = [
        {id:1,firstName:"Mukesh",lastName:"Kumar"},
        {id:2,firstName:"Suresh",lastName:"Verma"},
        {id:3,firstName:"Mohit",lastName:"Sharma"}
    ]

  return (
    <Box
    backgroundColor="#f7f7f7"
    height={'100vh'}
    width="250px"
    padding="10px"
    >
        <Typography variant='h6'>Chat</Typography>
            <Divider/>
            {
                users.map((item)=>{
                    return <UserCard item={item}/>
                })
            }
    </Box>
  )
}

export default SideBar
