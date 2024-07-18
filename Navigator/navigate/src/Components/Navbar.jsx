import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div style={{display:"flex",justifyContent:"space-around",fontSize:"24px",textDecoration:"none",marginTop:"40px"}}>
      <NavLink to={"/"}> Home </NavLink>
      <NavLink to={"/about"}> About </NavLink>
      <NavLink to={"/product"}> Products </NavLink>
      <NavLink to={"/login"}> Login </NavLink>
    </div>
  )
}

export default Navbar
