const App = () => {
  const [isVisible, setIsVisible] = React.useState(false);

  const toggleMessage = () => {
    setIsVisible((prev) => !prev);
  };

  return (
    <>
      <button onClick={toggleMessage}>{isVisible ? "Hide" : "Show"}</button>
      {isVisible && <p>Hello</p>}
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
