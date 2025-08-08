const App = () => {
  const [counter, setCounter] = React.useState(0);
  const [step, setStep] = React.useState(1);

  const increment = () => {
    setCounter((prev) => prev + step);
  };

  const decrement = () => {
    setCounter((prev) => Math.max(0, prev - step));
  };

  const StepChange = (event) => {
    const value = Math.max(1, Number(event.target.value));
    setStep(value);
  };
  return (
    <>
      <p>Counter Display-----{counter}</p>
      <label>
        <input type="number" value={step} min={1} onChange={StepChange}/>
      </label>
      <button onClick={increment}>INC</button>
      <button onClick={decrement}>DEC</button>
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
