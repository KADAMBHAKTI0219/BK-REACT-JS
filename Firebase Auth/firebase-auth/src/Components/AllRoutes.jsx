import React from 'react'
import { Route, Routes } from 'react-router-dom'
import LoginPage from '../Pages/LoginPage'
import Products from './Products'
import HomePage from '../Pages/HomePage'

const AllRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<HomePage />}/>
        <Route path='/login' element={<LoginPage />} />
        <Route path='/products' element={<Products/>}/>
    </Routes>
  )
}

export default AllRoutes
