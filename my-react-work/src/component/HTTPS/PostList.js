import React, { Component } from "react";
import axios from "axios";

class PostList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      errorMessage: "",
      loading: true // Added loading state
    };
  }

  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(response => {
        this.setState({
          posts: response.data,
          loading: false // Set loading to false when data is fetched
        });
      })
      .catch(error => {
        console.error(error); // Log error to console
        this.setState({
          errorMessage: 'Error retrieving data',
          loading: false // Set loading to false on error
        });
      });
  }

  render() {
    const { posts, errorMessage, loading } = this.state;
    
    return (
      <div>
        <h1>List of Posts</h1>
        {loading ? (
          <div>Loading...</div>
        ) : (
          <>
            {posts.length ? (
              posts.map(post => <div key={post.id}>{post.title}</div>)
            ) : (
              <div>No posts available</div>
            )}
          </>
        )}
        {errorMessage && <div>{errorMessage}</div>}
      </div>
    );
  }
}

export default PostList;
