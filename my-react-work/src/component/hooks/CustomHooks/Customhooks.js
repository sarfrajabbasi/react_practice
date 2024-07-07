import React from 'react'
import useInput from './useInput.js'

function Customhooks() {
  const name = useInput('')
  const email = useInput('')
  const handleSubmit =(e)=>{
    e.preventDefault()
    console.log(`name: ${name.value}`)
    console.log(`email: ${email.value}`)
  }
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label  htmlFor='name'>Name</label>
        <input type='text' id='name' {...name}></input>
      </div>
      <div>
        <label htmlFor='email'>Email</label>
        <input type='text' id='email' {...email}></input>
      </div>
      <button type='submit'>submit</button>
    </form>
  )
}

export default Customhooks

  