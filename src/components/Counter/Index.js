import React, { useState, useEffect } from 'react';

function Counter() {
  const InitialCount = 0;
  const [count, setCount] = useState(InitialCount);

  // const handleIncrement = () => { setCount(count + 1); };
  const handleDecrement = () => {
    setCount(count - 1);
  };
  const handleReset = () => {
    setCount(InitialCount);
  };

  useEffect(() => {
    document.title = `Count - ${count}`;
  }, [count]);

  return (
    <div>
      <h1>
        Count =&gt;&nbsp;
        {count}
      </h1>
      <button type="button" onClick={() => setCount(count + 1)}>
        Increment
      </button>
      <button type="button" onClick={handleDecrement}>
        Decrement
      </button>
      <button type="button" onClick={handleReset}>
        Reset
      </button>
    </div>
  );
}

export default Counter;
