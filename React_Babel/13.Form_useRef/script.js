function App() {
  const inputRef = React.useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    const inputValue = inputRef.current.value;

    if (inputValue.trim() === "") {
      alert("Error: Input cannot be empty.");
    } else {
      alert(`Submitted value: ${inputValue}`);
    }

    inputRef.current.value = "";
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Enter Text:
        <input type="text" ref={inputRef} />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
