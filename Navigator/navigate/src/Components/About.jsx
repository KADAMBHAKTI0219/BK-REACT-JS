import React from 'react'

const About = () => {
  return (
    <div style={{width:"50%" ,margin:"10% auto"}}>
      <h1>About this Application</h1>
      <ul style={{textAlign:"start",border:"2px solid black",width:"70%",margin:"auto",padding:"10px 30px",fontSize:"20px"}}>
        <li>Using React library</li>
        <li>Hooks:UseState,UseEffect</li>
        <li>Private Authetication :-  Use for token: <a href="">"https://reqres.in/api/login"</a></li>
        <li>Using Axios Npm</li>
        <li>Products Api:- <a href="">https://fakestoreapi.com/products</a></li>
        <li>Using React Router Dom</li>
      </ul>
    </div>
  )
}

export default About
