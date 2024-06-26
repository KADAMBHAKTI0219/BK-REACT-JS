import React, { useEffect, useState } from 'react'
import '../Components/post.css'

const PostList = () => {
  const [data,setData] = useState([])
  const [load,setLoad] = useState(false)
  const fetchData = async ()=>{
   try{
    setLoad(true)
    const fetchget = await fetch("https://jsonplaceholder.typicode.com/posts")
    const data = fetchget.json()
    return data
   }
   catch(err){
    console.log(err)
   }
  }
useEffect(()=>{
  fetchData().then((data)=>{
    setLoad(false)
    setData(data)
    })
 },[])
  return load ?
  <h1 className="loading">Loading...</h1> :
  ( <div>
      <div>{data.map((el)=>{
        return <div key={el.id}  className='postMain'><h1>{el.title}</h1>
        <h3>{el.body}</h3>
        </div>
        
      })}</div>
    </div>
  )
}

export default PostList
