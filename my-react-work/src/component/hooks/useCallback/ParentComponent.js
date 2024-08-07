// @ts-nocheck
import React, { useCallback, useState } from "react";
import Title from "./Title";
import Button from "./Button";
import Count from "./Count";
function ParentComponent() {
  const [age, setAge] = useState(25);
  const [salary, setSalary] = useState(5000);
  const incrementAge = useCallback(() => {
    setAge(age + 1);
  },[age]);
  const incrementSalary = useCallback(() => {
    setSalary(salary + 1);
  },[salary]);

  return (
    <div>
      <Title></Title>
      <Count text="age" count={age}></Count>
      <Button handleClick={incrementAge}>Increment Age</Button>
      <Count text="Salary" count={salary}></Count>
      <Button handleClick={incrementSalary}>Increment Salary</Button>
    </div>
  );
}

export default ParentComponent;
