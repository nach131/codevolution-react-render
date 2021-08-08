import React, { useContext } from 'react'
import { CountContex } from './ContextParents';

export const ChildA = () => {
  console.log('Child A');
  return (
    <>
      <div>Child A</div>
      <ChildB />
    </>
  )
}

export const ChildB = () => {
  console.log('Child B');
  return (
    <>
      <div>Child B</div>
      <ChildC />
    </>
  )
}

export const ChildC = () => {
  const count = useContext(CountContex)
  console.log('Child C');
  return (
    <>
      <div>Child C count:  {count}</div>
      <p>Se le ha pasado el valor mediante Provider y despues recueradp con useContext</p>
    </>
  )
}
