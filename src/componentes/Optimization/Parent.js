import React, { useState } from 'react'
import { MemoxeidChild } from './Child';

export const Parent = () => {
  const [count, setCount] = useState(0)
  const [name, setName] = useState('Batman')

  console.log('Parent render');
  return (
    <div>
      <h4>Parents</h4>
      <button onClick={() => setCount(c => c + 1)} type="button" className="btn btn-outline-info">Count: {count}</button>
      <button onClick={() => setName('Bruce Wayne')} type="button" className="btn btn-outline-light">{name}</button>
      <MemoxeidChild name={name} />
    </div>
  )
}
