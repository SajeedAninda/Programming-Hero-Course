import React, { useState } from 'react';

function MyComponent() {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  }

  return (
    <div>
      <input
        type="text"
        onChange={handleInputChange}
      />
      <p>Input Value: {inputValue}</p>
    </div>
  );
}

export default MyComponent;