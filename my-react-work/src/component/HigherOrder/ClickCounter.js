import React, { Component } from "react";

import WithCounter from "../HigherOrder/WithCounter";
import "../style/button.css";
 class ClickCounter extends Component {
  
  render() {
    const { count,incrementCount } = this.props;
    return (
      <button onClick={incrementCount} className="button-33">
        {this.props.name} Clicked {count} Times
      </button>
    );
  }
}

export default WithCounter(ClickCounter,5) ;


