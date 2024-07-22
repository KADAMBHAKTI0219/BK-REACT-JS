import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const Description = () => {
  const {id} = useParams()
  const [data, setData] = useState([])
  const getSingleData=()=>{
    axios.get(`http://localhost:3000/product/${id}`).then(res=>setData(res.data)).catch(err=>console.log(err))
  }
  const {title,image,description,category,price}=data
  useEffect(()=>{
    getSingleData()
  },[])
  return (
    <div>
      <h1  style={{textAlign:"center",paddingTop:"20px"}}>DESCRIPTION</h1>
        <div key={id}>
          <h1>{title}</h1>
          <img src={image} alt={title} width="200px" height="200px"></img>
          <h3>{price}</h3>
          <h4>{category}</h4>
          <p>{description}</p>
        </div>
    </div>
  )
}

export default Description
