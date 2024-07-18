import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Products = () => {
  const [productData,setProductData] = useState([])
  const getData = ()=>{
    axios.get("http://localhost:3000/products").then(res=>setProductData(res.data)).catch(err=>console.log(err))
  }
  useEffect(()=>{
    getData()
  },[])
  return (
    <div>
      <h1 style={{textAlign:"center",paddingTop:"20px"}}>Products</h1>
      <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:"30px",textAlign:"center",width:"90%",margin:"auto"}}> 
        {productData.map((el)=>(
        <div style={{border:"2px solid lightgray",borderRadius:"20px",padding:"15px",boxShadow:" rgb(204, 219, 232) 5px 5px 9px 0px inset, rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset"}}>
          <h1>{el.id}</h1>
          <Link to={`/description/${el.id}`}><img src={el.image} alt={el.title} height={200} width={200}/></Link>
          <h2>{el.title}</h2>
          <h2>{el.price}</h2>
        </div>
        ))}
      </div>
    </div>
  )
}

export default Products
