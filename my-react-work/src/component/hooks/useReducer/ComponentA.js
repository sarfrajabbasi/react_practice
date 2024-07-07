// @ts-nocheck
import React, { useContext } from "react";
import { CountContext } from "../../../App";
function ComponentA() {
  const {countstate, countdispatch} = useContext(CountContext);
  return (
    <div>
      ComponentA :  {countstate}
      <button onClick={() => countdispatch("increment")}>Increment</button>
      <button onClick={() => countdispatch("decrement")}>Decrement</button>
      <button onClick={() => countdispatch("reset")}>Reset</button>
    </div>
  );
}

export default ComponentA;
