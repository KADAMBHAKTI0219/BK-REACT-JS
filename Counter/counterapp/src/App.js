
import { useState } from 'react';
import './App.css';
import Counter from './components/Counter';

function App() {
  const [toggle,setToggle] = useState(true)
  return (
    <div className="App">
      
      {toggle && <div> <h1>Welcome To Counter!!</h1><button onClick={()=>setToggle(false)} style={{backgroundColor:"black",color:"white",padding:"10px 20px", border:"none",borderRadius:"20px" ,fontSize:"20px"}}>You have to count then click this button to open the Counter</button></div>}
      {toggle ? "" : <Counter/>}
    </div>
  );
}

export default App;
