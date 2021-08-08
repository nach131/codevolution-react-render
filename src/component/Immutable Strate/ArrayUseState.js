import React, { useState } from 'react'
import { Button } from 'react-bootstrap';

const initState = ['Superman', 'Batman']

export const ArrayUseState = () => {
  const [persons, setPersons] = useState(initState)

  const handleClick = () => {
    // asi no se vulve a renderizar los daros
    // persons.push('Clark')
    // persons.push('Kent')
    // setPersons(persons)

    const newPersons = [...persons]
    newPersons.push('Flash')
    newPersons.push('Green lantern')
    setPersons(newPersons)
  }
  console.log('ArrayUseState');
  return (
    <div>
      <p>Copia todo el estado inicial e inclulle los nuevos valores</p>
      <Button
        onClick={handleClick}
        variant="outline-success">Click</Button>
      {persons.map((item, index) => (<div key={index}>{item}</div>))}
    </div>
  )
}
