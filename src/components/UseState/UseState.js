import React, { useState } from 'react'

export const UseState = () => {
  const [count, setCount] = useState(0)
  console.log('UseState render');
  return (
    <div>
      <button onClick={() => setCount(c => c + 1)} type="button" className="btn btn-outline-info">Count: {count}</button>
      <button onClick={() => setCount(0)} type="button" className="btn btn-outline-light">Count to 0: {count}</button>
      <button onClick={() => setCount(5)} type="button" className="btn btn-outline-success">Count to 5: {count}</button>
    </div>
  )
}
