import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const Description = () => {
    const {id}=useParams()
    const [productData,setProductData] = useState([])
    const getData = ()=>{
      axios.get(`http://localhost:3000/products/${id}`).then(res=>setProductData(res.data)).catch(err=>console.log(err))
    }
    const {image,title,category,description,price}=productData
    useEffect(()=>{
      getData()
    },[])

    
  return (
    <div style={{width:"30%",margin:"3% auto",textAlign:"center",padding:"20px",boxShadow:" rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset",borderRadius:"20px"}}>
      <h1>{id}</h1>
      <img src={image} alt={title} width={200} height={200} />
      <h1>{title}</h1>
      <h3>{price}</h3>
      <h5>{category}</h5>
      <p>{description}</p>
    </div>
  )
}

export default Description
