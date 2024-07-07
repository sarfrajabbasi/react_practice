import React, { Component } from 'react'
import '../style/button.css'
class ClickCounterTwo extends Component {
  
  render() {
    const {count,incrementCount}  = this.props
    return (
        <button className='button-33' onClick={incrementCount}>Clicked {count} times</button>
    )
  }
}

export default ClickCounterTwo