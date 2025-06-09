import React, { useState } from 'react';

function FunctionCounter() {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => {
    if (count > 0) setCount(count - 1);
  };

  return (
    <div className="counter">
      <h2>Function Component</h2>
      <p className="count-display">{count}</p>
      <div className="btn-group">
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
      </div>
    </div>
  );
}

export default FunctionCounter;
