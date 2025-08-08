const App = () => {
  const items = ["React", "Javascript", "CSS"];

  return (
    <>
      <h1>Dynamic List</h1>
      <ul> 
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />);
