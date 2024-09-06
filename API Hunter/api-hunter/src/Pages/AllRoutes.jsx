import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from './HomePage'
import DashBoard from './DashBoard'
import Login from './Login'
import SingleProduct from './SingleProduct'
import PrivatePage from '../Components/PrivatePage'


export  const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<PrivatePage><DashBoard /></PrivatePage>} />
        <Route path="/singleProducts/:id" element={<SingleProduct />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  )
}