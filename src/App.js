//Simple increment/decrement app

import React from 'react';

function App({
               value,
               onIncrement,
               onDecrement
             }) {
  return (
      <div>
        <h1>{value}</h1>
        <button onClick={onIncrement}>+</button>
        <button onClick={onDecrement}>-</button>
      </div>
  );
}

export default App;
