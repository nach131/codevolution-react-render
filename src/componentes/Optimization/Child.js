import React from 'react'

export const Child = ({ name }) => {
  console.log('Render child');
  return (
    <div className="pt-3">
      <hr />
      {name}
      <h5>
        Child component
      </h5>
      <p>Experotando el componente Child como</p>
      <p>export const MemoxeidChild = React.memo(Child)</p>
      <p>e importandolo en el padre como MemoxeidChild hacemos que solo se renderice cuando el cambia</p>
    </div>
  )
}
export const MemoxeidChild = React.memo(Child)