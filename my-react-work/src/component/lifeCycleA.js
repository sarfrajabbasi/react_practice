import React, { Component } from "react";
import LifeCycleB from "./lifeCycleB";

class LifeCycleA extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "sarfraj",
    };
    console.log("lifeCycleA constructor");
  }

  static getDerivedStateFromProps(props, state) {
    console.log("lifeCycleA getDrivedStateFromProps");
    return null;
  }
  componentDidMount() {
    console.log("lifeCycleA ComponentDidMount");
  }
  shouldComponentUpdate(){
    console.log("lifeCycleA shouldComponentUpdate");
    return true
  }
  
  getSnapshotBeforeUpdate(prevProps,prevState){
    console.log("lifeCycleA getSnapshotBeforeUpdate");
    return null

  }

  componentDidUpdate(){
    console.log("lifeCycleA componentDidUpdate");
  }

  changeState = ()=>{
    this.setState({
      name:"burnner"
    })
  }
  
  
  render() {
    console.log("lifeCycleA render");
    return (
        <div>
            <div>lifeCycleA</div>
            <button onClick={this.changeState}>Change State</button>
            <LifeCycleB></LifeCycleB>
        </div>
    )
  }
}


export default LifeCycleA;

