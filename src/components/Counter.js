import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  function increment() {
   // call setCount twice, to update the counter by two every time we click
   setCount((currentCount) => currentCount + 1);
   setCount((currentCount) => currentCount + 1);
  }

  return <div onClick={increment}>{count}</div>;
}

export default Counter;
