import React from 'react'
import { NavLink } from 'react-router-dom'

const Navigation = () => {
  return (
    <div>
      <NavLink to={'/'}>Home</NavLink>
      <NavLink to={'/dashboard'}>Dashboard</NavLink>
      <NavLink to={'/loginPage'}>Login</NavLink>
    </div>
  )
}

export default Navigation
