import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { AuthenticationContext } from '../Context.jsx/AuthContext'

const Navbar = () => {
  const {logOut} = useContext(AuthenticationContext)
  console.log(logOut)
  return (
    <div className="nav-container">
    <NavLink to={'/'} className="nav-link">Home</NavLink>
    <NavLink to={'/product'} className="nav-link">Product</NavLink>
    <NavLink to={'/addProduct'} className="nav-link">Add Product</NavLink>
    <NavLink to={'/login'} className="nav-link">Login</NavLink>
    <button onClick={logOut} className="logout-button">LogOut</button>
  </div>
  
  )
}

export default Navbar
