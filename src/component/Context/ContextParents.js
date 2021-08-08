import React, { useState } from 'react'
import { Button } from 'react-bootstrap';
import { ChildA } from './ContextChildren'

export const CountContex = React.createContext()
const CountProvider = CountContex.Provider

export const ContextParents = () => {
  const [count, setCount] = useState(0)

  console.log('ContextParents');
  return (
    <div>
      <h5>14 - Context</h5>
      <Button
        onClick={() => setCount(c => c + 1)}
        variant="outline-info">Count: {count}
      </Button>
      {/* usamos el provider */}
      <CountProvider value={count}>
        <ChildA />
      </CountProvider>
    </div>
  )
}
