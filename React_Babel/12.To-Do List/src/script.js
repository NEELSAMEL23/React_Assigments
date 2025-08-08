function TodoList() {
    const [tasks, setTasks] = React.useState([]);
    const [newTask, setNewTask] = React.useState("");

    // Add Task Function
    const addTask = () => {
        if (newTask.trim() === "") {
            alert("Task cannot be empty!"); // Prevents empty task addition
            return;
        }
        setTasks([...tasks, { id: Date.now(), text: newTask, completed: false }]);
        setNewTask(""); // Clear input field
    };

    // Toggle Task Completion
    const toggleTask = (id) => { 
        setTasks(
            tasks.map((task) =>
                task.id === id ? { ...task, completed: !task.completed } : task
            )
        );
    };

    // Delete Task
    const deleteTask = (id) => {
        setTasks(tasks.filter((task) => task.id !== id));
    };

    return (
        <div className="p-4 w-96 mx-auto bg-white shadow-md rounded-lg">
            <h2 className="text-xl font-bold mb-2 text-center">To-Do List</h2>
            <div className="flex mb-4">
                <input
                    type="text"
                    value={newTask}
                    onChange={(e) => setNewTask(e.target.value)}
                    className="flex-grow p-2 border rounded-l-lg"
                    placeholder="Enter a task"
                />
                <button
                    onClick={addTask}
                    className="p-2 bg-blue-500 text-white rounded-r-lg hover:bg-blue-600"
                >
                    Add Task
                </button>
            </div>
            <ul>
                {tasks.map((task) => (
                    <li
                        key={task.id}
                        className="flex justify-between items-center p-2 border-b"
                    >
                        <span
                            onClick={() => toggleTask(task.id)}
                            className={`cursor-pointer ${
                                task.completed ? "line-through text-gray-500" : "text-black"
                            }`}
                        >
                            {task.text}
                        </span>
                        <button
                            onClick={() => deleteTask(task.id)}
                            className="p-1 text-red-500 hover:text-red-700"
                        >
                            ❌
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

function App() {
    return <TodoList />;
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);