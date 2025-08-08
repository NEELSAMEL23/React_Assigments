const App = () => {
  const [color, setColor] = React.useState("blue");

  const toggleColor = () => {
    setColor((Previouscolor) => (Previouscolor === "blue" ? "red" : "blue"));
  };

  return (
    <>
      <button onClick={toggleColor} style={{ backgroundColor: color }}>{color === 'blue' ? 'Blue' : 'Red'}</button>
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />);
