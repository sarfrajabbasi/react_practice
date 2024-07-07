import React, { Component } from 'react';
import '../style/refs.css'

 class RefsWithClassComp extends Component {
    constructor(props) {
      super(props);
      this.inputRef = React.createRef();
    }

    focusInput(){
       this.inputRef.current.focus(); 
    }

  render() {
    return (
      <div>
        <input className='input' type='text' ref={this.inputRef}></input>
      </div>
    )
  }
}

export default RefsWithClassComp;
