import React, { useState } from "react";
import RunEffectsOnlyOnce from "../hooks/ RunEffectsOnlyOnce";

function UseEffectWithCleanup() {
  const [display, setDisplay] = useState(true);
  return <div>
    <button onClick={()=> setDisplay(!display
    )}>Toggle display</button>
    {display && <RunEffectsOnlyOnce></RunEffectsOnlyOnce>}
  </div>;
}

export default UseEffectWithCleanup;


/* */