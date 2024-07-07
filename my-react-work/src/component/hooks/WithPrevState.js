import React, { useState } from "react";
import "../style/button.css";
function WithPrevState() {
  const initialCount = 0;

  const [count, setCount] = useState(initialCount);
  function incrementFive() {
    for (let i = 0; i < 5; i++) {
      setCount((prevCount) => prevCount + 1);
    }
  }
  return (
    <div>
      Count:{count}
      <button
        className="button-33"
        onClick={() => setCount((prevCount) => prevCount + 1)}
      >
        Increment
      </button>
      <button
        className="button-33"
        onClick={() => setCount((prevCount) => prevCount - 1)}
      >
        decrement
      </button>
      <button className="button-33" onClick={() => setCount(initialCount)}>
        Reset
      </button>
      <button className="button-33" onClick={incrementFive}>
        increment 5
      </button>
    </div>
  );
}

export default WithPrevState;
