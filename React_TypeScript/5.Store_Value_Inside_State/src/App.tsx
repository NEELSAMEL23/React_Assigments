import React, { useState } from "react";

const App: React.FC = () => {
  const [input, setInput] = useState<string>("");
  const [storedValue, setStoredValue] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setInput(e.target.value);
  };

  const handleClick = (): void => {
    setStoredValue(input);
    setInput(""); // clear input after storing
  };

  return (
    <div>
      <input type="text" value={input} onChange={handleChange} />
      <button onClick={handleClick}>Store</button>
      <p>Stored Value: {storedValue}</p>
    </div>
  );
};

export default App;
