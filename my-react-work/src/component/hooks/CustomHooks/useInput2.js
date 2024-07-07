import { useState } from "react";

function useInput2(initalValue = "'") {
  const [value, setValue] = useState(initalValue);

  const reset = () => setValue(initalValue);
  const bind = {
    value,
    onChange: (e) => setValue(e.target.value),
  };
  return [value, bind, reset];
}

export default useInput2;
