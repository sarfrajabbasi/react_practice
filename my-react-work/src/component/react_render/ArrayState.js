import React, { useState } from "react";
const initState = ["bruce", "wayne"];
const ArrayState = () => {
  const [persons, setPersons] = useState(initState);

  const handleClick = () => {
    const newPersons = [...persons]
    newPersons.push("clark");
    newPersons.push("kent");
    setPersons(newPersons);
  };
  return (
    <div>
      <button onClick={handleClick}>click</button>
      {persons.map((person) => (
        <div key={person}>{person}</div>
      ))}
    </div>
  );
};

export default ArrayState;
