import React, { useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((previousCount) => ++previousCount);
  };

  const reset = () => setCount(0);

  const third = () => {
    setCount((pre) => (pre % 3 === 0 ? pre / 3 : pre));
  };

  return (
    <>
      <div>{count}</div>
      <button onClick={increment}>+1</button>
      <button onClick={reset}>reset</button>
      <button onClick={third}>三の倍数</button>
    </>
  );
};

export default App;
