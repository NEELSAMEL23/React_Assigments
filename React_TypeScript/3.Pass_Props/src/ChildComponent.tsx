import React, { useState } from "react";

interface ChildProps {
  sendDataToParent: (data: string) => void;
}

const ChildComponent: React.FC<ChildProps> = ({ sendDataToParent }) => {
  const [inputValue, setInputValue] = useState<string>("");

  const handleSend = (): void => {
    console.log("sendDataToParent is", typeof sendDataToParent);
    sendDataToParent(inputValue);
  };

  return (
    <div>
      <h3>Child Component</h3>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={handleSend}>Send</button>
    </div>
  );
};

export default ChildComponent;
