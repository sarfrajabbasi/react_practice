// @ts-nocheck
import React, { useEffect, useState } from 'react'
import axios from 'axios';

function FetchWithReducerOne() {
  const [loading,setLoading] = useState(true);
  const [post,setPost] = useState({});
  const [error,setError] = useState('');

  useEffect(()=>{
    axios.get("https://jsonplaceholder.typicode.com/posts/1").then((response)=>{
      setLoading(false)
      setPost(response.data);
      setError('')
      
    }).catch(()=>{
      setLoading(false);
      setPost({});
      setError('something went wrong')
      
    })

  })
  return (
    <div>
      {loading ? "Loading..." : post.title}
      {error && <p>{error}</p> }
    </div>
  )
}

export default FetchWithReducerOne