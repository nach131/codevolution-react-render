import React, { useState } from 'react'
import { Button } from 'react-bootstrap';

const initState = {
  fname: 'Bruce',
  lname: 'Wayne'
}

export const ObjectUseState = () => {

  const [person, setPerson] = useState(initState)

  const changeName = () => {
    //Asi no vuevle a renderizar el boton
    // person.fname = "Clack"
    // person.lname = "Kent"
    // setPerson(person)

    const newPerson = { ...person }
    newPerson.fname = 'Clark'
    newPerson.lname = 'Kent'
    setPerson(newPerson)
  }

  console.log('objectUseState Render');

  return (
    <div>
      <p>Copia el objeto inicial y cambia los valores</p>
      <Button
        onClick={changeName}
        variant="outline-info">{person.fname} {person.lname}</Button>
    </div>
  )
}
