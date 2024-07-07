import React, { Component } from "react";
import '../style/refs.css'
import Focusinput from "./Focusinput";
class Refs extends Component {
  constructor(props) {
    super(props);

    this.inputRef = React.createRef();
    this.callbackRef = null;
    this.setCbRef = (element)=>{
      this.callbackRef = element
    }
  }
  componentDidMount() {
    // this.inputRef.current.focus();
    // console.log(this.inputRef);
    if(this.callbackRef){
      this.callbackRef.focus()
    }
  }
  onClickHandler = () => {
    alert(this.inputRef.current.value);
    // alert(this.callbackRef.value)
  };
  render() {
    return (
      <div>
        <input className="input" type="text" ref={this.inputRef}></input>
        <input className="input" type="text" ref={this.setCbRef}></input>
        <button className="btn" onClick={this.onClickHandler}>Click</button>
      </div>
    );
  }
}

export default Refs;
