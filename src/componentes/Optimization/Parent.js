import React, { useState } from 'react'

export const Parent = ({ children }) => {
  const [count, setCount] = useState(0)
  console.log('Parent render');
  return (
    <div>
      <button onClick={() => setCount(c => c + 1)} type="button" className="btn btn-outline-warning">Count: {count}</button>
      {children}
    </div>
  )
}
