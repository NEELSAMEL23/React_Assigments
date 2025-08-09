import { useState, useCallback } from "react";
import Child from "./Child";

function App() {
  const [parentCounter, setParentCounter] = useState<number>(0);
  const [childClicks, setChildClicks] = useState<number>(0);

  console.log("🟦 App rendered");

  // ✅ useCallback ensures function identity remains stable
  const handleChildClick = useCallback((): void => {
    setChildClicks((prev) => prev + 1);
  }, []);

  return (
    <div style={{ fontFamily: "Arial", padding: 30 }}>
      <button onClick={() => setParentCounter((prev) => prev + 1)}>
        🔁 Increment Parent Counter: {parentCounter}
      </button>

      <Child onClick={handleChildClick} clicks={childClicks} />
    </div>
  );
}

export default App;
