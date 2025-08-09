import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";

// Define the Joke type
interface Joke {setup: string;
  punchline: string;
}

const App: React.FC = () => {
  const [joke, setJoke] = useState<string>("");

  // Function to fetch a random joke
  const fetchJoke = async (): Promise<void> => {
    try {
      const response = await axios.get<Joke>("https://official-joke-api.appspot.com/random_joke");
      
      const { setup, punchline } = response.data;
      setJoke(`${setup} - ${punchline}`);

    } catch (error) {
      console.error("Error fetching joke:", error);
      setJoke("Oops! Something went wrong.");
    }
  };

  // Fetch a joke when the component mounts
  useEffect(() => {
    fetchJoke();
  }, []);

  return (
    <div className="joke-card">
      <h2>Random Joke</h2>
      <p>{joke || "Loading..."}</p>
      <button onClick={fetchJoke}>Get Another Joke</button>
    </div>
  );
};

export default App;
