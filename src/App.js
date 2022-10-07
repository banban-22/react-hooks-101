import React, { useState } from 'react';

const App = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    if (count < 100) setCount(count + 1);
  };

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const increment2 = () => {
    setCount((previousCount) => previousCount + 1);
  };

  const decrement2 = () => {
    setCount((previousCount) => previousCount - 1);
  };

  const reset = () => {
    setCount(0);
  };

  const double = () => {
    setCount(count * 2);
  };

  const three = () => {
    if (count % 3 === 0) {
      setCount(count / 3);
    } else {
      return count;
    }
  };

  return (
    <>
      <div>count:{count}</div>
      <div>
        <button onClick={increment}>Click Here for increment!</button>
        <button onClick={decrement}>Click Here for decrement!</button>
      </div>
      <div>
        <button onClick={increment2}>Click Here for increment2!</button>
        <button onClick={decrement2}>Click Here for decrement2!</button>
      </div>
      <div>
        <button onClick={reset}>Reset</button>
        <button onClick={double}>x2</button>
        <button onClick={three}>Three</button>
      </div>
    </>
  );
};

export default App;
