import React, { Component } from 'react'
import "../style/refs.css"
import FRInput from './FRInput'
 class FRParentInput extends Component {
    constructor(props) {
      super(props)
    
      this.inputRef = React.createRef();

    }

    clickHandler = ()=>{
        this.inputRef.current.focus()
    }
  render() {
    return (
      <div>
        <FRInput ref={this.inputRef}></FRInput>
        <button onClick={this.clickHandler} className='btn' >Focusinput</button>
      </div>
    )
  }
}

export default FRParentInput


