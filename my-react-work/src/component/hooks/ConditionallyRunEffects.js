/* import React from 'react'
class ConditionallyRunEffects extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0, name: "" };
  }

  handleChange = (event) => {
    this.setState({ name: event.target.value });
  };

  componentDidMount() {
    document.title = `Clicked ${this.state.count} times`;
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.count !== this.state.count) {
      document.title = `Clicked ${this.state.count} times`;
      console.log("Updating document title");
    }
  }

  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.name}
          onChange={this.handleChange}
        />
        <p>You clicked {this.state.count} times</p>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Click me
        </button>
      </div>
    );
  }
}

export default ConditionallyRunEffects; */

import React, { useState, useEffect } from "react";

function ConditionallyRunEffects() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  useEffect(() => {
    // dependency array
    console.log('useEffect -  updating document title');
    document.title = `Clicked ${count} Times`;
  },[count]);
  return (
    <div>
      <input
        type="text"
        placeholder="Enter name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      ></input>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click Me</button>    
    </div>
  );
}

export default ConditionallyRunEffects;

/*   */