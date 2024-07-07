// // examples:--- class component
// import React, { Component } from 'react'
// import "../style/button.css"
// export class StateHooks extends Component {
//     constructor(props) {
//       super(props)

//       this.state = {
//          count:0
//       }
//     }

//     incrementCount= ()=>{
//         this.setState({
//             count:this.state.count+1
//         })
//     }
//   render() {
//     const {count} = this.state;
//     return (
//       <div>
//         <button className='button-33' onClick={this.incrementCount}>Count:{count}</button>
//       </div>
//     )
//   }
// }

// export default StateHooks

//Example:--- Function component

import React, { useState } from "react";
import "../style/button.css";
function StateHooks() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <button className="button-33" onClick={()=>setCount(count+1)}>
        Count:{count}
      </button>
    </div>
  );
}

export default StateHooks;

