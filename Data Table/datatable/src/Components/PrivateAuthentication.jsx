import React, { useContext } from 'react'
import { AuthenticationContext } from '../Context.jsx/AuthContext'
import { Navigate } from 'react-router-dom'

const PrivateAuthentication = ({children}) => {
  const {token} = useContext(AuthenticationContext)
  if(!token){
   return  <Navigate to={'/login'}/>
  }
  return children
}

export default PrivateAuthentication
