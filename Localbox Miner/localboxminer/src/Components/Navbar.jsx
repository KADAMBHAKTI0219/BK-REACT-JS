import React, { useContext } from 'react'
import { themechange } from '../Context/ThemeContext'


const Navbar = () => {
  const {theme}= useContext(themechange)
  return (
    <div>
      <h1 style={{paddingTop:"10px"}}>NAVBAR</h1>
      <h2 style={{transition:"0.5s ease-out"}}>The theme is {theme}</h2>
    </div>
  )
}

export default Navbar
