import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, toggleTodo, deleteTodo } from './redux/todoReducer';
import type { RootState, AppDispatch } from './redux/store';

const TodoApp: React.FC = () => {
  const [title, setTitle] = useState('');
  const todos = useSelector((state: RootState) => state.todos);
  const dispatch = useDispatch<AppDispatch>();

  const handleAddTodo = () => {
    if (title.trim()) {
      dispatch(addTodo(title));
      setTitle('');
    }
  };

  return (
    <div className="max-w-md mx-auto p-4 bg-white shadow-lg rounded-lg mt-10">
      <h1 className="text-2xl font-bold text-center mb-4">Todo List</h1>
      <div className="flex gap-2 mb-4">
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="border p-2 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <button onClick={handleAddTodo} className="bg-blue-500 text-white px-4 py-2 rounded-lg">
          Add
        </button>
      </div>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id} className="flex justify-between items-center bg-gray-100 p-2 my-2 rounded-lg">
            <span
              onClick={() => dispatch(toggleTodo(todo.id))}
              className={`cursor-pointer ${todo.status ? 'line-through text-gray-500' : ''}`}
            >
              {todo.title}
            </span>
            <button
              onClick={() => dispatch(deleteTodo(todo.id))}
              className="bg-red-500 text-white px-2 py-1 rounded-lg"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoApp;
