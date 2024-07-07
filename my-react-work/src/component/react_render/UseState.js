import React, {  useState } from 'react'

const UseState = () => {
    const [count,setCount] = useState(0)
    console.log('useState  Render ');
  return (
    <div>
        <button onClick={()=> setCount((prev)=>prev+1)}>Count - {count}</button>
        <button onClick={()=> setCount(0)}>Count - {count}</button>
        <button onClick={()=> setCount(5)}>Count - {count}</button>
    </div>
  )
}

export default UseState