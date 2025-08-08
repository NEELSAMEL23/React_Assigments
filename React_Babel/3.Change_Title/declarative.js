const App = () => {
  const [reactUpdates, setReactUpdates] = React.useState(0);

  const changedTitle = () => {
    const new_title = `Declarative Approach`;
    document.title = new_title;
    setReactUpdates(reactUpdates + 1);
  };

  return (
    <>
      <h1>Declarative Approach</h1>
      <button onClick={changedTitle}>Changed Title</button>
      <p>{`Title Get Updated ${reactUpdates}`}</p>
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />);
