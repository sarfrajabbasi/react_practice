import React, { useState, useEffect } from "react";
import axios from "axios";

function FetchingDataWithUseEffectTwo() {
  const [post, setPost] = useState({});
  const [id, setId] = useState(1);
  const [idFromBtnClick, setIdFromBtnClick] = useState(1);

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/posts/${idFromBtnClick}`)
      .then((response) => {
        console.log(response.data);
        setPost(response.data);
      })
      .catch((err) => console.log("there was error in fetching data!"));
  },[idFromBtnClick]);

  return (
    <div>
      <input
        type="text"
        value={id}
        onChange={(e) => setId(e.target.value)}
      ></input>
      <button type="button" onClick={() => setIdFromBtnClick(id)}>
        Fetch Post
      </button>

      <div>

        <h2>{post.title}</h2>
        <p>{post.body}</p>
      </div>
    </div>
  );
}

export default FetchingDataWithUseEffectTwo;
