import React, { useState } from 'react'

const initState = {
    fname:'Bruce',
    lname:'wayne',
}


const StateImmutability = () => {
    const [person,setPerson]= useState(initState);
    const changeName = ()=>{
        const newPerson = {...person};
        
        newPerson.fname = 'sarfraj'
        newPerson.lname = 'abbasi'
   
        setPerson(newPerson)

        };
        console.log('StateImmutability');
  return (
    <div>
        <button onClick={changeName}>{person.fname} {person.lname}</button>
    </div>
  )
}

export default StateImmutability