import React, { useState } from 'react'

const Counter = () => {
    const [count,setCount] = useState(0)
    const handleCount = (value)=>{
      setCount(count + value)
    }
    const evenOrOdd = count % 2 == 0 ? "Even" : "Odd"
    const PrimeNumber = (num)=>{
    let factor = 0
    for (let i = 1; i <= num ; i++) {
      if (num % i === 0) {
        factor++
        console.log(factor)
      }
  } return factor
}
let primeNo =  PrimeNumber(count)
 

  return (
    <div style={{width:"40%",border:"4px solid black",margin:"15% auto",padding:"20px 10px",borderRadius:"20px"}}>
        <h1>COUNTER</h1>
        <button onClick={()=>handleCount(-1)} disabled={count == 0} style={{padding:"9px 18px",backgroundColor:"red",color:"white",fontSize:"20px",borderRadius:"10px",marginRight:"30px"}}> DECREMENT(-) </button>
        <span style={{fontSize:"28px"}}>{count}</span>
        <button onClick={()=>handleCount(1)} style={{padding:"8px 16px",backgroundColor:"green",color:"white",fontSize:"20px",borderRadius:"10px",marginLeft:"30px"}}> INCREMENT(+) </button>
        <button onClick={()=>setCount(0)} style={{padding:"8px 16px",backgroundColor:"orange",fontSize:"20px",borderRadius:"10px",display:"block",margin:"20px auto"}}>RESET</button>
        <h1>this number is {evenOrOdd}</h1>
        <h1>This number is {primeNo == 2 ? "Prime" :"Not Prime"}</h1>
    </div>
  )
}

export default Counter
