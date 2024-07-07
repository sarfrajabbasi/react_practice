/* import React, { useEffect, useState } from "react";

function FetchingDataWithUseEffect() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => {
        // console.log(data);
        setPosts(data);
      })
      .catch((err) => {
        console.log("there was an Error fetching the data!", err);
      });
  }, []);
  return (
    <div>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default FetchingDataWithUseEffect;
 */


import React, { useEffect, useState } from 'react';
import axios from 'axios';

function FetchingDataWithUseEffect() {
    // create the state variable
    const [posts,setPosts] = useState([]);
    // setup useEffect
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts').then(response=>{
            console.log(response.data);
            setPosts(response.data);
        }).catch(err=>{
            console.log('there was an error to fetching the data!',err);
        })
    },[])
  return (
    <div>
        {/* render data */}
        <ul>
            {posts.map(post=>(
                <li key={post.id}>{post.title}</li>
            ))}
        </ul>
    </div>
  )
}
// include component 
export default FetchingDataWithUseEffect