// @ts-nocheck
import React from "react";

function Columns() {
  const items = ["apple", "phone", "watch", "pad", "notebook"];

  return (
    <>
      {/* {items.map((item, index) => 
        (<React.Fragment key={index}>
          <td>{item}</td>
        </React.Fragment>)
      )} */}
      <td>name</td>
      <td>Sarfraj</td>
    </>
  );
}

export default Columns;
