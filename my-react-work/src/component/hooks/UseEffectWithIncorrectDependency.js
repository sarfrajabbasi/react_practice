import React, { useEffect, useState } from "react";

function UseEffectWithIncorrectDependency() {
  const [count, setCount] = useState(0);
  const tick = () => {
    setCount(prevCount => prevCount + 1);
  };
  useEffect(() => {
    const intervalTimer = setInterval(tick, 1000);
    return () => {
      clearInterval(intervalTimer);
    };
  }, []);
  return (
    <div>
      <h1>{count}</h1>
    </div>
  );
}

export default UseEffectWithIncorrectDependency;
