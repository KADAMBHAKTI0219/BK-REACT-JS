import React from 'react'
import { useSelector } from 'react-redux'
import CounterButtons from './CounterButtons'

const CounterValue = () => {
    const {counter} = useSelector(store=>store.CounterReducer)
  return (
    <div>
      <h1>Counter :  {counter}</h1>
      <CounterButtons/>
    </div>
  )
}

export default CounterValue
