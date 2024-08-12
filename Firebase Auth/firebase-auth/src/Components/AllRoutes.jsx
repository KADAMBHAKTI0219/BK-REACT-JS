import React from 'react'
import { Route, Routes } from 'react-router-dom'
import ProductsPage from './ProductsPage'
import Description from './Description'
import EditProducts from './EditProducts'
import AddProducts from './AddProducts'
import HomePage from './HomePage'
import LoginPage from '../Pages/LoginPage'
import PrivateAuthentication from './PrivateAuthentication'

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/products' element={<PrivateAuthentication><ProductsPage/></PrivateAuthentication>}/>
        <Route path='/description/:id' element={<Description/>}/>
        <Route path='/login' element={<LoginPage/>}></Route>
        <Route path='/editPage/:id' element={<EditProducts/>}/>
        <Route path='/addProducts' element={<AddProducts/>}/>
      </Routes>
    </div>
  )
}

export default AllRoutes
