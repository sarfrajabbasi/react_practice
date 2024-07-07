import React from 'react';
const withCounter = (WrappedComponent,incrementNum) =>{
  
    class WithCounter extends React.Component{
        constructor(props) {
            super(props);
        
            this.state = {
              count: 0,
            }; 
          }
          incrementCount = () => {
            this.setState((prevState) => {
              return { count: prevState.count + incrementNum };
            });
          };
        render(){
            return <WrappedComponent count = {this.state.count} incrementCount = {this.incrementCount} {...this.props}>
              
            </WrappedComponent>
        }
    }
    return WithCounter
}

export default withCounter
