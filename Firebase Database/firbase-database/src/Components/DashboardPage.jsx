import { collection, getDocs } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { db } from '../Services/Firebase'

const DashboardPage = () => {
    const [productsData,setProductsData]=useState([])
    const getDataFromFirebase = ()=>{
      getDocs(collection(db,"products")).then(res=>{
        let newArray = res.docs.map((el)=>({...el.data(),id:el.id}))
        setProductsData(newArray)
      }).catch(err=>console.log(err))
    }
    useEffect(()=>{
      getDataFromFirebase()
    },[])
  return (
    <div>
    {
      productsData.map((el)=>(
        <div key={el.id}>
          <h1>{el.title}</h1>
          <img src={el.image} alt={el.title} height={200} width={200}/>
          <h3>{el.category}</h3>
          <p>{el.description}</p>
        </div>
      ))
    }
  </div>
  )
}

export default DashboardPage
