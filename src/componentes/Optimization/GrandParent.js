import React, { useState } from 'react'
import { Child } from './Child'
import { Parent } from './Parent'

export const GrandParent = () => {

  const [newCount, setNewCount] = useState(0)
  console.log('GrandParent');
  return (
    <div>
      <p>GrandParent renderiza todos los componentes que tiene por debajo</p>
      <button onClick={() => setNewCount(c => c + 1)} type="button" className="btn btn-outline-warning">GrantParent Count: {newCount}</button>
      <Parent newCount={newCount}>
        <Child />
      </Parent>
    </div>
  )
}
