import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

import PostList from './Components/PostList';




function App() {
  const [toggle,setToggle] = useState(true)
  
  return (
   <>
    {<button onClick={()=>setToggle(!toggle)}>GET POST</button>}
    {toggle?<PostList/>:null}
   </>
  )
}

export default App;
