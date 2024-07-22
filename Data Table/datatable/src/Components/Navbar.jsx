import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { AuthenticationContext } from '../Context.jsx/AuthContext'

const Navbar = () => {
  const {logOut} = useContext(AuthenticationContext)
  console.log(logOut)
  return (
    <div  style={{width:"70%",margin:"2% auto",display:"flex",justifyContent:"space-evenly",fontSize:"24px", }}>
      <NavLink to={'/'}>Home</NavLink>
      <NavLink to={'/product'}>Product</NavLink>
      <NavLink to={'/addProduct'}>Add Product</NavLink>
      <NavLink to={'/login'}>Login</NavLink>
      <button onClick={logOut} style={{padding:"10px 20px",borderRadius:"20px"}}>LogOut</button>
    </div>
  )
}

export default Navbar
