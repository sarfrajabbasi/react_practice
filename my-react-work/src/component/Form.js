import React, { Component } from "react";
import "./style/form.css";

export class Form extends Component {
  // make it controlled react component
  // 1.  create element
  // 2. create component state for control element
  // 3.  handling on changed event

  constructor(props) {
    super(props);

    this.state = {
      username: "",
      comment: "",
      topic: "React",
    };
  }
  handleUsernameChange = (event) => {
    // the event itself ispassed as parameter to handler
    // from this event we can extract the value of input event  using event.target.value,so any time we change value the value is captured by event.target.value,now we need to assign value back to the state property to update the state we use setState()method
    this.setState({
      username: event.target.value,
    });
  };
  handleCommentChange = (event) => {
    this.setState({
      comment: event.target.value,
    });
  };

  handleTopicChange = (event) => {
    this.setState({
      topic:event.target.value
    })
  };
  handleSubmitChange = (event)=>{
    alert(`${this.state.username} ${this.state.comment} ${this.state.topic}`)
    event.preventDefault()
  }
  render() {
    const {username,comment,topic} = this.state
    // regular html
    return (
      <form id="parent" onSubmit={this.handleSubmitChange}>
        <div className="data">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={this.handleUsernameChange}
          ></input>
        </div>
        <div className="data">
          <label htmlFor="comment">Comment</label>
          <textarea
            id="comment"
            onChange={this.handleCommentChange}
            value={comment}
          ></textarea>
        </div>

        <div>
          <select value={topic} onChange={this.handleTopicChange}>
            <option value="react">React</option>
            <option value="angular">Angular</option>
            <option value="vue">Vue</option>
          </select>
        </div>
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default Form;
