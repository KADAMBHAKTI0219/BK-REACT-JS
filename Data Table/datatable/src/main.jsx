import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { AuthenticationContextProvider } from './Context.jsx/AuthContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
  <AuthenticationContextProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>  
  </AuthenticationContextProvider>
  </>,
)
