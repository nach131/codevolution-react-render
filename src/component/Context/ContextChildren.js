import React, { useContext } from 'react'
import { CountContex } from './ContextParents';

export const ChildA = () => {
  console.log('Child A');
  return (
    <>
      <div>Child A</div>
      <p>Child A se exporta como MemoizedChildA</p>
      <p>Se consume en el ContexParent</p>
      <ChildB />
    </>
  )
}

export const MemoizedChildA = React.memo(ChildA)

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
      <div>Child C count:  {count}</div>p
      <p>Se le ha pasado el valor mediante Provider y despues recueradp con useContext</p>
      <p>Gracias a React.memo() solo se rendercia el complemento que tiene cambios</p>
    </>
  )
}
