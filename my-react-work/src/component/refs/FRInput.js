import React from 'react'
import "../style/refs.css"
// function FRInput() {
//   return (
//     <div>FRInput</div>
//   )
// }

const FRInput = React.forwardRef((props,refs)=>{
    return (
            <div>
                <input ref={refs} className='input' type='text'></input>
            </div>
          )
}) 

export default FRInput

