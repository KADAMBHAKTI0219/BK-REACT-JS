import React from 'react'
import { useDispatch } from 'react-redux'
import { handleAdd, handleSUB } from '../Redux/CounterRedux/action'

const CounterButtons = () => {
    const dispatch = useDispatch()
  return (
    <div>
      <button onClick={()=>dispatch(handleAdd())}>ADD</button>
      <button onClick={()=>dispatch(handleSUB())}>REDUCE</button>
    </div>
  )
}

export default CounterButtons
