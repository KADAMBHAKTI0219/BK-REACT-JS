import axios from 'axios'
import React, { useContext, useState } from 'react'
import { AuthenticationContext } from '../Context.jsx/AuthContext'

const Login = () => {
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const {login}=useContext(AuthenticationContext)
console.log(login)
const HandleSubmit =(e)=>{
  e.preventDefault()
  let userdata={
    email,password
  }
  axios.post('https://reqres.in/api/login',userdata).then((res)=>login(res.data.token)).catch(err=>console.log(err))
}
  return (
    <div>
      <h1  style={{textAlign:"center",paddingTop:"20px"}}>Login</h1>
      <form action="" onSubmit={(e)=>HandleSubmit(e)}>
        <input type="email" placeholder='Enter Your Email Here' onChange={(e)=>setEmail(e.target.value)}/>
        <input type="password" placeholder='Enter Your Password Here' onChange={(e)=>setPassword(e.target.value)}/>
        <input type="submit" />
      </form>
    </div>
  )
}

export default Login
