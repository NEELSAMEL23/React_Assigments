import React, { useState } from "react";
import TopMain from "./TopMain";

const App: React.FC = () => {
  const [name, setName] = useState<string>("");

  return (
    <div style={{ padding: "20px" }}>
      <h1>Props Drilling</h1>
      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <TopMain name={name} />
    </div>
  );
};

export default App;
