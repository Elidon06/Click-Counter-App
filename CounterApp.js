import React, { useState } from 'react';
import './CounterApp.css';

const CounterApp = () => {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState('');

  const handleIncrease = () => {
    const newCount = count + 1;
    setCount(newCount);
    if (newCount >= 10) {
      setMessage("You've reached the limit!");
    } else {
      setMessage('');
    }
  };

  const handleDecrease = () => {
    if (count > 0) {
      const newCount = count - 1;
      setCount(newCount);
      if (newCount < 10) {
        setMessage('');
      }
    }
  };

  return (
    <div className="counter-container">
      <h1>Click Counter</h1>
      <p className="count-display">Count: {count}</p>
      <div className="button-group">
        <button onClick={handleIncrease}>Increase</button>
        <button onClick={handleDecrease}>Decrease</button>
      </div>
      {message && <p className="message">{message}</p>}
    </div>
  );
};

export default CounterApp;
