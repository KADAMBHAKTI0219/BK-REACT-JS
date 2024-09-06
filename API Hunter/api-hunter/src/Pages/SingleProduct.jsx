import axios from 'axios'
import React, { useEffect,useState } from 'react'
import { useParams } from 'react-router-dom'

const SingleProduct = () => {
  const {id} = useParams()
  const [singleData,setSingleData] = useState([])
  const singleProductData = (id)=>{
    axios.get(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-tech-products/${id}`)
    .then(res=>{setSingleData(res.data.data)}).catch(err=>console.log(err))
  }
  const {brand,img,details,price,category}=singleData
  useEffect(()=>{
    singleProductData(id)
  },[id])
  return (
    <div>
      <h1>{brand}</h1>
      <img src={img} alt={brand} />
      <h2>Category:{category}</h2>
      <h2>Details:{details}</h2>
      <h2>Price:{price}</h2>
    </div>
  )
}

export default SingleProduct
