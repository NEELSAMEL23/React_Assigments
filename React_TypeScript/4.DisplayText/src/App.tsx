import React, { useState } from "react";

interface DataState {
  input: string;
  display: string;
}

const App: React.FC = () => {
  const [data, setData] = useState<DataState>({ input: "", display: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setData({ ...data, input: e.target.value });
  };

  const handleClick = (): void => {
    setData({ ...data, display: data.input });
  };

  return (
    <div>
      <h2>Enter and Display Text</h2>
      <input
        type="text"
        value={data.input}
        onChange={handleChange}
        placeholder="Type something"
      />
      <button onClick={handleClick}>Show</button>
      <h3>Output: {data.display}</h3>
    </div>
  );
};

export default App;
