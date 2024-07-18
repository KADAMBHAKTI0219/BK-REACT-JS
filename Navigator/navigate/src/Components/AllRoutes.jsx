import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Products from './Products'
import Login from './Login'
import Description from './Description'
import PrivateAuthentication from './PrivateAuthentication'


const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/description/:id" element={<Description />} />
        <Route path="/product" element={<PrivateAuthentication>  <Products /> </PrivateAuthentication>} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  )
}

export default AllRoutes
