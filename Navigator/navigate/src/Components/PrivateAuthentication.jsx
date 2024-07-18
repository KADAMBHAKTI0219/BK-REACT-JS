import React from 'react'

const PrivateAuthentication = ({children}) => {
  let isAuth = localStorage.getItem('Token')
  if (!isAuth) {
     window.location.href="./login"
  }
  return children
}

export default PrivateAuthentication
