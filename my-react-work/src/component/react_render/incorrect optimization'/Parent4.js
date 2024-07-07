import React, { useCallback, useMemo, useState } from "react";
import { MemoizedChildFive } from "./Child5";

const Parent4 = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("sarfraj");
  console.log("Parent4 Render");

  const person = {
    fname: "mady",
    lname: "crook",
  };

  const memeizedPerson = useMemo(() => person,[]);
  const handleClick = () => {};
  const memoizedHandleClick = useCallback(handleClick,[])
  return (
    <div>
      <button onClick={() => setCount((c) => c + 1)}> Count - {count}</button>
      <button onClick={() => setName("codeMe")}> Change Name </button>
      <MemoizedChildFive
        person={memeizedPerson}
        name={name}
        handleClick={memoizedHandleClick}
      ></MemoizedChildFive>
    </div>
  );
};

export default Parent4;
