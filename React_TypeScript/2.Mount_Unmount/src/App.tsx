import React, { useEffect, useState } from "react";

const App: React.FC = () => {
  const [isVisible, setIsVisible] = useState<boolean>(true);

  const toggleVal = (): void => {
    setIsVisible((prev) => !prev);
  };

  return (
    <>
      <button onClick={toggleVal}>
        {isVisible ? "Hide" : "Show"}
      </button>
      {isVisible && <UnmountComponent />}
    </>
  );
};

const UnmountComponent: React.FC = () => {
  useEffect(() => {
    console.log("Component Mounted");

    return () => {
      console.log("Component Unmounted");
    };
  }, []);

  return <p>I am a component</p>;
};

export default App;
