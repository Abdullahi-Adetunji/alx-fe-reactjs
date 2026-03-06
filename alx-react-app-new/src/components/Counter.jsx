import { useState } from 'react';

function Counter() {
  // Initialize state: 'count' is the value, 'setCount' is the function to change it
  const [count, setCount] = useState(0);

  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <p style={{ fontSize: '24px', fontWeight: 'bold' }}>Current Count: {count}</p>
      
      {/* Increment: adds 1 to the current count */}
      <button onClick={() => setCount(count + 1)} style={{ margin: '5px', padding: '10px' }}>
        Increment
      </button>

      {/* Decrement: subtracts 1 from the current count */}
      <button onClick={() => setCount(count - 1)} style={{ margin: '5px', padding: '10px' }}>
        Decrement
      </button>

      {/* Reset: sets the count back to 0 */}
      <button onClick={() => setCount(0)} style={{ margin: '5px', padding: '10px' }}>
        Reset
      </button>
    </div>
  );
}

export default Counter;