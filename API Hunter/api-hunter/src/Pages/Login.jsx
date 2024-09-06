import axios from 'axios'
import React, { useContext, useState } from 'react'
import { AuthContextApi } from '../Context/AuthContext'

const Login = () => {

  const [email,setemail]= useState('')
  const [password,setpassword]= useState('')
  const {login} = useContext(AuthContextApi)
  const handleSubmit= (e)=>{
    e.preventDefault()
    const userdata={email,password}
    axios.post('https://reqres.in/api/login',userdata).then(res=>{
      const token = res.data.token
      login(token)
    }).catch(err=>console.log(err))
  }
  return (
    <div>
      <form action="" onSubmit={(e)=>handleSubmit(e)}>
        <label>Username:</label><br/>
        <input type="text" id="username" name="username" value={email} onChange={(e)=>setemail(e.target.value)} required/><br/>
        <label>Password:</label><br/>
        <input type="password" id="password" name="password" value={password} onChange={(e)=>setpassword(e.target.value)} required/><br/>
        <input type="submit" value="Login"/>
      </form>
    </div>
  )
}

export default Login
