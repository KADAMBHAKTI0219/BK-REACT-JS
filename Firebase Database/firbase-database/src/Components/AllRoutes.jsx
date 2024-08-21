import React from 'react'
import { Route, Routes } from 'react-router-dom'
import LoginPage from './LoginPage'
import HomePage from './HomePage'
import PrivateAuthentication from './PrivateAuthentication'
import DashboardPage from './DashboardPage'

const AllRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path="/dashboard" element={<PrivateAuthentication><DashboardPage /></PrivateAuthentication>}/>
        <Route path='/loginPage' element={<LoginPage/>}/>
    
    </Routes>
  )
}

export default AllRoutes
