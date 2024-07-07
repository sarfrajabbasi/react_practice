import React, {  useState } from 'react'
import ParentOne from './ParentOne'
import ChildOne from './ChildOne'

const Grandparent = () => {
    const [newCount,setNewCount] = useState(0);
  return (
    <div>
        <button onClick={()=> setNewCount((nc)=> nc+1)}>Grandparent Count - {newCount}</button>
        <ParentOne newCount = {newCount}>
            <ChildOne></ChildOne>
        </ParentOne>
    </div>
  )
}

export default Grandparent