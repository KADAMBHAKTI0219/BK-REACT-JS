import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Products from './Products'

const AllRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<Products />}/>
    </Routes>
  )
}

export default AllRoutes
