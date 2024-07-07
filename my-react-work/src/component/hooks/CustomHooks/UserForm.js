import React  from 'react'
import useInput2 from './useInput2'

function UserForm() {

    const [firstName,firstBindName,resetFirstName] = useInput2('')
    const [lastName,lastBindName,resetLastName] = useInput2('')

    const handleSubmit = (e)=>{
        e.preventDefault()
        alert(`Hello ${firstName} ${lastName}`)
        resetFirstName('')
        resetLastName('')
        
    }
  return (
    <form onSubmit={handleSubmit}>
        <div>
            <label>FirstName</label>
            <input type='text' {...firstBindName}></input>
        </div>
        <div>
            <label>LastName</label>
            <input type='text' {...lastBindName}></input>
        </div>
        <button type='submit'>Submit</button>
    </form>
  )
}

export default UserForm