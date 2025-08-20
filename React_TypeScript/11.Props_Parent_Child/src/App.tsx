import { useState, useCallback } from "react";
import Child from "./Child";

function App() {

  const [childClicks, setChildClicks] = useState<number>(0);

  console.log("🟦 App rendered");

  // ✅ useCallback ensures function identity remains stable
  const handleChildClick = useCallback((): void => {
    setChildClicks((prev) => prev + 1);
  }, []);

  return (
    <div style={{ fontFamily: "Arial", padding: 30 }}>

      <Child onClick={handleChildClick} clicks={childClicks} />
    </div>
  );
}

export default App;
