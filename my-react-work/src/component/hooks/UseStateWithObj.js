import React,{useState} from 'react'
function UseStateWithObj() {
    const [name,setName] = useState({firstName:'',lastName:''})
    // object doesn't take duplicate property
    // const obj = {...name,firstName:"sameer"} ;
    // console.log(obj);
  return (
    <form>
        <input type='text' value={name.firstName} onChange={e=> setName({...name,firstName:e.target.value})}></input>
        <input type='text' value={name.lastName} onChange={e=> setName({...name,lastName:e.target.value})}></input>
        <h2>First Name is  -  {name.firstName}</h2>
        <h2>First Name is  -  {name.lastName}</h2>
        <h2>{JSON.stringify(name)}</h2>
    </form>
  )
}

export default UseStateWithObj