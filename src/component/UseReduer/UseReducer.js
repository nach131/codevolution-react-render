import React, { useReducer } from 'react'
import { Button } from 'react-bootstrap';


const initialState = 0

const reducer = (state, action) => {
  switch (action) {
    case 'increment': return state + 1
    case 'decrement': return state - 1
    case 'reset': return initialState
    default: return state
  }
}

export const UseReducer = () => {
  console.log('useReduce render');
  const [count, dispatch] = useReducer(reducer, initialState)
  return (
    <div>
      <div>{count}</div>
      <Button variant="outline-info"
        onClick={() => dispatch('increment')}>increment</Button>
      <Button variant="outline-warning"
        onClick={() => dispatch('decrement')}>decrement</Button>
      <Button variant="outline-danger"
        onClick={() => dispatch('reset')}>Reset</Button>
    </div>
  )
}
