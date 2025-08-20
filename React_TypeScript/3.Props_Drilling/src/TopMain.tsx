import React from "react";
import MiddleMain from "./MiddleMain";

interface TopMainProps {
  name: string;
}

const TopMain: React.FC<TopMainProps> = ({ name }) => {
  return (
    <div style={{ border: "2px solid blue", padding: "10px", marginTop: "10px" }}>
      <h2>TopMain Component</h2>
      <MiddleMain name={name} />
    </div>
  );
};

export default TopMain;
