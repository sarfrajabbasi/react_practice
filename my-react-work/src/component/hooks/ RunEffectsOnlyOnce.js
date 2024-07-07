import React, { useEffect, useState } from "react";

function RunEffectsOnlyOnce() {
  const [x, setx] = useState(0);
  const [y, sety] = useState(0);
  const logPosition = (
    /** @type {{ clientX: React.SetStateAction<number>; clientY: React.SetStateAction<number>; }} */ e
  ) => {
    console.log("mouse event");
    setx(e.clientX);
    sety(e.clientY);
  };
  useEffect(() => {
    console.log("useEffect called");
    window.addEventListener("mousemove", logPosition);

    return () => {
      console.log('component unmounting code');
      window.removeEventListener("mousemove", logPosition);
    };
  }, []);
  return (
    <div>
      Hooks X - {x} Y_{y}
    </div>
  );
}

export default RunEffectsOnlyOnce;
