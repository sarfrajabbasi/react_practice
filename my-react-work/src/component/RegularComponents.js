import React, { Component } from 'react'

 class RegularComponents extends Component {
  render() {
    console.log('regular Components');

    return (
      <div>RegularComponents
        {this.props.name}
      </div>
    )
  }
}

export default RegularComponents