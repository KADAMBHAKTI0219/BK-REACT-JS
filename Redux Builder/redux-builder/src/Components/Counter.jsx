import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { handleAdd, handleSUB, reset } from '../Redux/CounterRedux/action';
import { handleThemeDark, handleThemeLight } from '../Redux/ThemeRedux/action';

const Counter = () => {
  const dispatch = useDispatch();

  const { counter } = useSelector((store) => store.CounterReducer);
  const { theme } = useSelector((store) => store.ThemeReducer);

  console.log(theme);

  return (
    <div className='counter' style={{ backgroundColor: theme === 'dark' ? 'black' : 'white', color: theme === 'dark' ? 'white' : 'black' }}>
      <div>
        <button onClick={()=>dispatch(handleThemeDark())} style={{ backgroundColor: theme === 'dark' ? 'black' : 'lightgray', color: theme === 'dark' ? 'white' : 'black' }}>
          Switch To Dark
        </button>
        <button onClick={()=>dispatch(handleThemeLight())} style={{ backgroundColor: theme === 'dark' ? 'lightgray' : 'white', color: theme === 'dark' ? 'black' : 'black' }}>
          Switch To Light
        </button>
      </div>
      <h1>Counter: {counter}</h1>
      <button onClick={() => dispatch(handleSUB())}>-</button>
      <button onClick={() => dispatch(reset())}>Reset</button>
      <button onClick={() => dispatch(handleAdd())}>+</button>
    </div>
  );
};

export default Counter;
