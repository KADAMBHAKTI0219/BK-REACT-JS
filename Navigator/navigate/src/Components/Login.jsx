import axios from 'axios'
import React, { useState } from 'react'

const Login = () => {

  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
  const formSubmit=(e)=>{
    e.preventDefault()
    let userData = {
      email,password
    }
    axios.post('https://reqres.in/api/login',userData).then(res=>localStorage.setItem("Token",res.data.token)).catch(err=>console.log(err))
  }

  return (
    <div>
      <form action="" onSubmit={(e)=>formSubmit(e)}>
        <input type="email" placeholder='Enter User Email' onChange={(e)=>setEmail(e.target.value)}/>
        <input type="password" placeholder='Enter User Password' onChange={(e)=>setPassword(e.target.value)}/>
        <input type="submit" />
      </form>
    </div>
  )
}

export default Login
