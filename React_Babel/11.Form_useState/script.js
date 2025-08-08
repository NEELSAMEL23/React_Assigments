function App() {
  const [username, setUsername] = React.useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (username.trim() === "") {
      alert("Error: Username cannot be empty.");
    } else {
      alert(`Submitted username: ${username}`);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Username:
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App/>);
