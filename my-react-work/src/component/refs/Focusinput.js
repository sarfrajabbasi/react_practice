import React, { Component } from 'react'
import RefsWithClassComp from './RefsWithClassComp'
import '../style/refs.css'
 class Focusinput extends Component {
  constructor(props) {
    super(props)
    this.componentRef = React.createRef();

  }

  clickHandler = ()=>{
    this.componentRef.current.focusInput();
  }

  render() {
    return (
      <div>
        <RefsWithClassComp ref={this.componentRef}></RefsWithClassComp>
        <button className='btn' onClick={this.clickHandler}>Focus Input</button>
      </div>
    )
  }
}

export default Focusinput