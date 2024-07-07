import React from "react";

const Child5 = ({ name,person,handleClick }) => {
// console.log(person);
  console.log("ChildFive Render");
  return <div>Hello {name} {person.fname} {person.lname}</div>;
};

export const MemoizedChildFive = React.memo(Child5);

