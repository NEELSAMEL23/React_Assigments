import React from "react";
import BottomMainRight from "./BottomMainRight";

interface MiddleMainProps {
  name: string;
}

const MiddleMain: React.FC<MiddleMainProps> = ({ name }) => {
  return (
    <div style={{ border: "2px solid green", padding: "10px", marginTop: "10px" }}>
      <h2>MiddleMain Component</h2>
      <BottomMainRight name={name} />
    </div>
  );
};

export default MiddleMain;
