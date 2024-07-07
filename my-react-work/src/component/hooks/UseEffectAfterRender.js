import React, { useState, useEffect } from "react";

function UseEffectAfterRender() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `Clicked ${count} Times`;
  });
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click Me</button>
    </div>
  );
}

export default UseEffectAfterRender;
