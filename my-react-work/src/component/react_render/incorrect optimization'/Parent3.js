import React, { useState } from "react";
import { MemoizedChild4 } from "../incorrect impure comp/Child4";

const Parent3 = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("sarfraj");
  console.log("Parent3 Render");
  return (
    <div>
      <button onClick={() => setCount((c) => c + 1)}>Count - {count}</button>
      <button onClick={() => setName("codeMe")}>Change Name</button>
      {/* <MemoizedChild3 name={name}>
        <strong>Hello</strong>
      </MemoizedChild3> */}
      <MemoizedChild4 name={name}>
      </MemoizedChild4>
    </div>
  );
};

export default Parent3;
