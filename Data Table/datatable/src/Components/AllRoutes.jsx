import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from './HomePage'
import ProductPage from './ProductPage'
import EditProduct from './EditProduct'
import AddProduct from './AddProduct'
import Description from './Description'
import Login from './Login'
import PrivateAuthentication from './PrivateAuthentication'



const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<HomePage />}></Route>
        <Route path='/description/:id' element={<Description />}></Route>
        <Route path='/editProduct/:id' element={<EditProduct />}></Route>
        <Route path='/product' element={<PrivateAuthentication> <ProductPage /> </PrivateAuthentication>}></Route>
        <Route path='/AddProduct' element={<PrivateAuthentication> <AddProduct /> </PrivateAuthentication> }></Route>
        <Route path='/login' element={<Login/>}></Route>
      </Routes>
    </div>
  )
}

export default AllRoutes
