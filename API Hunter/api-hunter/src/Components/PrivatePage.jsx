import React, { useContext } from 'react'
import { AuthContextApi } from '../Context/AuthContext'
import { Navigate } from 'react-router-dom'

const PrivatePage = ({children}) => {
  const {token} = useContext(AuthContextApi)
  return !token ? <Navigate to="/login" /> : children
}

export default PrivatePage
