import React from "react";

interface BottomMainRightProps {
  name: string;
}

const BottomMainRight: React.FC<BottomMainRightProps> = ({ name }) => {
  return (
    <div style={{ border: "2px solid red", padding: "10px", marginTop: "10px" }}>
      <h2>BottomMainRight Component</h2>
      <p>User's Name: {name || "No name entered yet"}</p>
    </div>
  );
};

export default BottomMainRight;
