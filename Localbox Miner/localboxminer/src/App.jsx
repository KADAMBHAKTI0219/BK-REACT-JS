import './App.css'
import Navbar from './Components/Navbar'
import Midsection from './Components/Midsection'
import Button from './Components/Button'
import { useContext } from 'react'
import { themechange } from './Context/ThemeContext'


function App() {

  const {theme} = useContext(themechange)

  return (
    <div style={{width:"50%",position:"absolute",top:"13%",left:"25%"}}>
     <div style={{backgroundColor:theme=='light'?'white': 'black', color:theme=='light'?'black': 'white',textAlign:"center",transition:"1s ease-out",borderRadius:"20px"}}>
        <Navbar/>
        <Midsection/>
     </div>
        <Button/>
    </div>
  )
}

export default App
