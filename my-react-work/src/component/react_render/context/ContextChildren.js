import React,{useContext} from "react";
import { CountContext } from "./ContextParent";

export const ChildA = () => {
  console.log("Child A Render");
  return (
    <>
    <div>ChildA</div>
    <ChildB></ChildB>
  </>
  );
};

export const MemoizedChildA = React.memo(ChildA)

export const ChildB = () => {
  console.log("Child B Render");
  return (
    <>
      <div>ChildB</div>
      <ChildC></ChildC>
    </>
  );
};

export const ChildC = () => {
    const count = useContext(CountContext)
  console.log("Child C Render");
  return (
    <>
      <div>Child C COunt =  {count}</div>
    </>
  );
};
