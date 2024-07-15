import { useContext } from "react"
import { themechange } from "../Context/ThemeContext"

const Button = () => {
  const {themeUpdaterFunction} = useContext(themechange)
  const {theme} = useContext(themechange)

  return (
    <div>
      
      <button onClick={themeUpdaterFunction} style={{display:"block",margin:"2% auto",width:"20%",height:"40px",borderRadius:"10px",fontSize:"18px",backgroundColor:theme=='light'?'black': 'white', color:theme=='light'?'white': 'black'}}>Change Theme</button>
    </div>
  )
}

export default Button
