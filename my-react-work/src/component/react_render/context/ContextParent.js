import React, { useState } from "react";
import { MemoizedChildA } from "./ContextChildren";
export const CountContext = React.createContext();
const CounterProvider = CountContext.Provider;
const ContextParent = ({children}) => {
  const [count, setCount] = useState(0);
  console.log("ContextParent Render");
  return (
    <>
      <button onClick={() => setCount((c) => c + 1)}>Count</button>
      <CounterProvider value={count}>
        {children}
      </CounterProvider>
    </>
  );
};

export default ContextParent;
