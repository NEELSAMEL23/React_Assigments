import React, { useState } from "react";
import useSum from "./useSum";

function App() {
  const [num1, setNum1] = useState<number>(0);
  const [num2, setNum2] = useState<number>(0);

  const sum: number = useSum(num1, num2);

  return (
    <div>
      <h2>Custom Hook: useSum</h2>
      <input
        type="number"
        value={num1}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setNum1(Number(e.target.value))
        }
        placeholder="Enter first number"
      />
      <input
        type="number"
        value={num2}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setNum2(Number(e.target.value))
        }
        placeholder="Enter second number"
      />
      <h3>Sum: {sum}</h3>
    </div>
  );
}

export default App;
