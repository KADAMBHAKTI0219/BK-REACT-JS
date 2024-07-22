import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const ProductPage = () => {
  const [productData,setProductData]=useState([])
  const [page,setpage]=useState(1)
  const [order,setOrder]=useState('')
  const [categories,setCategories] = useState('')
  const[search,setSearch]=useState('')

  const getDataProduct = ()=>{
    axios.get('http://localhost:3000/product',{
      params:{
        _page:page,
        limit:10,
        _sort:'price',
        _order:order,
        category:categories,
        q:search
      }
    }).then(res=>setProductData(res.data)).catch(err=>console.log(err))
  }
  const deleteBtn=(id)=>{
    axios.delete(`http://localhost:3000/product/${id}`).then(res=>{
      getDataProduct()
    }).catch(err=>console.log(err))
  }
  useEffect(()=>{
    getDataProduct()
  },[page,categories,order,search])
  return (
    <div>

      <div  style={{display:'flex',justifyContent:'space-between',alignItems:"center",width:'90%',margin:"auto"}}>
        <div> <select  onChange={(e)=>setCategories(e.target.value)} value={categories} name='category'>
            <option>select Your Category</option>
            <option value={"men's clothing"}>men's clothing</option>
            <option value={"jewelery"}>jewelery</option>
            <option value={"electronics"}>electronics</option>
            <option value={"women's clothing"}>women's clothing</option>
          </select></div>
        <div><input type="text" placeholder='Search' onChange={(e)=>setSearch(e.target.value)} style={{display:"inline"}}/></div>
        <div>
          <button onClick={()=>setOrder('asc')}>LowToHigh</button>
          <button onClick={()=>setOrder('desc')}>HighToLow</button>
        </div>
      </div>

      <h1  style={{textAlign:"center",paddingTop:"20px"}}>Products</h1>
        <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)", gap:"20px"}}>
        {productData.map((el)=>(
            <div key={el.id}>
              <h1>{el.title}</h1>
              <Link to={`/description/${el.id}`}><img src={el.image} alt={el.title} width="200px" height="200px" /></Link>
              <h2>{el.price}</h2>
              <button><Link to={`/editProduct/${el.id}`}>EDIT</Link></button>
              <button onClick={(e)=>deleteBtn(el.id)}>Delete</button>
            </div>
        ))}

        </div>
        <div>
          <button onClick={()=>setpage(page - 1)} disabled={page == 0}>Prev</button>
          <span>{page}</span>
          <button onClick={()=>setpage(page + 1)}  >Next</button>
        </div>
    </div>
  )
}

export default ProductPage
