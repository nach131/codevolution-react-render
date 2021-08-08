import React, { useState } from 'react'
import { Button } from 'react-bootstrap';
import { MemoizedChildA } from './ContextChildren'

export const CountContex = React.createContext()
const CountProvider = CountContex.Provider

export const ContextParents = () => {
  const [count, setCount] = useState(0)

  console.log('ContextParents');
  return (
    <div>
      <h5>15 - Context and memo</h5>
      <Button
        onClick={() => setCount(c => c + 1)}
        variant="outline-info">Count: {count}
      </Button>
      {/* usamos el provider */}
      <CountProvider value={count}>
        <MemoizedChildA />
      </CountProvider>
    </div>
  )
}
