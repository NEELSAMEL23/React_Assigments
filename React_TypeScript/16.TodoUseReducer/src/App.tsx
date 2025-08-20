import React, { useReducer, useState, type ChangeEvent, type FormEvent } from "react";

interface Todo {
  id: number;
  text: string;
}

type Action = | { type: "ADD_TODO"; payload: Todo } | { type: "DELETE_TODO"; payload: number };

const todoReducer = (currentState: Todo[], action: Action): Todo[] => {
  switch (action.type) {
    case "ADD_TODO":
      return [...currentState, action.payload];

    case "DELETE_TODO":
      return currentState.filter((todo) => todo.id !== action.payload);

    default:
      return currentState;
  }
};

const initialState: Todo[] = [];

const App: React.FC = () => {
  const [inputText, setInputText] = useState<string>("");
  const [todos, dispatch] = useReducer(todoReducer, initialState);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (inputText.trim() === "") return; // Prevent empty todos

    const newTodo: Todo = {
      id: Date.now(),
      text: inputText,
    };

    dispatch({ type: "ADD_TODO", payload: newTodo });
    setInputText(""); // Clear input field after adding
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value);
  };

  return (
    <div className="flex flex-col h-screen justify-center items-center">
      <h2>To-Do List</h2>
      <form onSubmit={handleSubmit}>
        <input
          className="border"
          type="text"
          onChange={handleInputChange}
          value={inputText}
        />
        <button type="submit" className="border bg-amber-100">
          Submit
        </button>
      </form>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id} className="flex items-center gap-2">
            <p>{todo.text}</p>
            <button
              onClick={() => dispatch({ type: "DELETE_TODO", payload: todo.id })}
              className="bg-red-400 text-white px-2 rounded"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
