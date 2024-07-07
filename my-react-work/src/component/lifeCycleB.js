import React, { Component } from "react";

class LifeCycleB extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "sarfraj",
    };
    console.log("LifeCycleB constructor");
  }

  static getDerivedStateFromProps(props, state) {
    console.log("LifeCycleB getDrivedStateFromProps");
    return null;
  }
  componentDidMount() {
    console.log("LifeCycleB ComponentDidMount");
  }

  shouldComponentUpdate(){
    console.log("lifeCycleB shouldComponentUpdate");
    return true
    
  }
  
  getSnapshotBeforeUpdate(prevProps,prevState){
    console.log("lifeCycleB getSnapshotBeforeUpdate");
    return null

  }

  componentDidUpdate(){
    console.log("lifeCycleB componentDidUpdate");
  }
  render() {
    console.log("LifeCycleB render");
    return <div>LifeCycleB</div>;
  }
}

export default LifeCycleB;
