// for pure component:rpce

import React, { PureComponent } from 'react'

class PureComponents extends PureComponent {
  render() {
    console.log('Pure Components');
    return (
      <div>
        Pure component :  {this.props.name}
      </div>
    )
  }
}

export default PureComponents
