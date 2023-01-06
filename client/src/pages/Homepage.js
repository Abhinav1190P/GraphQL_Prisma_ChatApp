import React from 'react'
import {Box} from '@mui/material'
import SideBar from '../components/SideBar'
import {Routes,Route} from 'react-router-dom'
import Welcome from '../components/Welcome'

const AllRoutes = () => {
  return(
    <Routes>
      <Route path="/" element={<Welcome/>}/>
      <Route path="/:id/:name" elemen={<Welcome/>}/>
    </Routes>
  )
}

function HomePage() {
  return (
    <Box>
      <SideBar/>
    </Box>
  )
}

export default HomePage
