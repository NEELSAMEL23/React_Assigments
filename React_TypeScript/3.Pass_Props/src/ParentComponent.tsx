import React, { useState } from "react";
import ChildComponent from "./ChildComponent"; // Ensure path is correct

const ParentComponent: React.FC = () => {
  const [childData, setChildData] = useState<string>("");

  const handleDataFromChild = (data: string): void => {
    console.log("Received from child:", data);
    setChildData(data);
  };

  return (
    <div>
      <h2>Parent Component</h2>
      <p>Data: {childData}</p>

      {/* Pass function as prop with correct type */}
      <ChildComponent sendDataToParent={handleDataFromChild} />
    </div>
  );
};

export default ParentComponent;
