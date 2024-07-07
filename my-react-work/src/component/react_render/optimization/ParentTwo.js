import React, { useState } from "react";
import {MemoizedChildTwo} from "./ChildTwo";

const ParentTwo = () => {
  const [count, setCount] = useState(0);
const [name, setName] = useState('sarfraj')
  console.log("ParentTwo Render");
  return (
    <div>
      <button onClick={() => setCount((c) => c + 1)}>Count - {count}</button>
      <button onClick={()=> setName('codeMe')}>Change Name</button>
      <MemoizedChildTwo name={name}></MemoizedChildTwo>
    </div>
  );
};

export default ParentTwo;
