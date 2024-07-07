import React, { Component,PureComponent } from 'react'; // Import PureComponent
import PureComponents from './PureComponents';
import RegularComponent from './RegularComponents';
import MemoComp from './MemoComp';
 class ParentComponents extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name:"sarfraj"
      }
    }
    componentDidMount(){
        setInterval(()=>{
            this.setState({
                name:"sarfraj"
            })
        },2000)
    }
  render() {
    console.log('**********************Parent Components***********************');
    return (
      <div>
        ParentComponent
        {/* <RegularComponent name = {this.state.name}></RegularComponent>
        <PureComponents name={this.state.name}></PureComponents> */}
        <MemoComp name={this.state.name}></MemoComp>
      </div>
    )
  }
}

export default ParentComponents