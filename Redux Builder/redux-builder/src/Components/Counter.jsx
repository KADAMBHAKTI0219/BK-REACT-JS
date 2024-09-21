import React from 'react'
import CounterValue from './CounterValue'
import Theme from './Theme'
import { useSelector } from 'react-redux'

const Counter = () => {
  const {theme} = useSelector(store=>store.ThemeReducer)
  return (
    <div  style={{ backgroundColor: theme === 'dark' ? 'black' : 'white', color: theme === 'dark' ? 'white' : 'black' }} className='counter'>
      <Theme/>
      <CounterValue/>
    </div>
  )
}

export default Counter