import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { handleThemeDark, handleThemeLight } from '../Redux/ThemeRedux/action'

const Theme = () => {
    const {theme} = useSelector(store=>store.ThemeReducer)
    const dispatch= useDispatch()
  return (
    <div>
      <button onClick={()=>dispatch(handleThemeDark())}  style={{ backgroundColor: theme === 'dark' ? 'black' : 'lightgray', color: theme === 'dark' ? 'white' : 'black' }}>Switch To Dark</button>
      <button  onClick={()=>dispatch(handleThemeLight())} style={{ backgroundColor: theme === 'dark' ? 'lightgray' : 'white', color: theme === 'dark' ? 'black' : 'black' }}>Switch To Light</button>
    </div>
  )
}

export default Theme
