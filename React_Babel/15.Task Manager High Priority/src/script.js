


const App = () => {
    const [tasks, setTasks] = React.useState([])
    const [name, setName] = React.useState("")
    const [priority, setPriority] = React.useState("medium")
    const [filterpriority, setFilterPriority] = React.useState("All")
    const [filterstatus, setFilterStatus] = React.useState("All")
    const [error, setError] = React.useState("")

    function addTask() {

        if (!name.trim()) {
            setError("Please Enter your Task")
            return
        }

        const newTask = { id: Date.now(), name, priority, complete: false }

        setTasks((prev) => sortTask([...prev, newTask]))
        setName("")
        setError("")

    }

    const PriorityValue = (priority) => {

        switch (priority) {
            case "high": return 3
            case "medium": return 2
            case "low": return 1
            default: return 0
        }
    }
    const sortTask = (taskList) => {
        return [...taskList].sort((a, b) => PriorityValue(b.priority) - PriorityValue(a.priority))
    }


    function editTask(task) {

        setName(task.name)
        setPriority(task.priority)
        deleteTask(task.id)
    }

    function toggleTask(id) {

        setTasks((prev) => prev.map((task) => task.id == id ? { ...task, complete: !task.complete } : task))
    }

    function deleteTask(id) {

        setTasks((prev) => prev.filter((task) => task.id !== id))
    }

    const filterTask = tasks.filter((task) => {
        const matchStatus = filterstatus === "All" || filterstatus === "complete" && task.complete || filterstatus === "incomplete" && !task.complete
        const matchPriority = filterpriority === "All" || filterpriority === task.priority

        return matchStatus && matchPriority
    })
    
    return (
        <div className="h-150  w-120 mx-auto bg-blue-100 rounded-2xl">
            <div className="flex w-full pt-10 px-4 gap-2">
                <input placeholder="Add Title" value={name} onChange={(e) => setName(e.target.value)} className="outline-0 py-2 rounded-2xl border border-cyan-500 w-5/6 px-3" />
                <select className="border border-cyan-500 outline-0  w-2/6 rounded" value={priority} onChange={(e) => setPriority(e.target.value)}>
                    <option value="high">High</option>
                    <option value="medium">Medium</option>
                    <option value="low">Low</option>
                </select>
                <button onClick={addTask} className="px-1 bg-green-300 w-2/6 py-2 rounded hover:bg-green-400 cursor-pointer">Add Task</button>
            </div>


            {error && <p className="text-left pl-5 text-red-400 font-semibold mt-2">{error}</p>}


            <div className="w-full  flex justify-between px-6 mt-6">
                <select className="border border-cyan-500 outline-0  px-2 py-1 rounded" value={filterpriority} onChange={(e) => setFilterPriority(e.target.value)}>
                    <option value="All">All</option>
                    <option value="high">High</option>
                    <option value="medium">Medium</option>
                    <option value="low">Low</option>
                </select>

                <select className="border border-cyan-500 outline-0  px-2 py-1 rounded" value={filterstatus} onChange={(e) => setFilterStatus(e.target.value)}>
                    <option value="All">All</option>
                    <option value="incomplete">Incomplete</option>
                    <option value="complete">Complete</option>
                </select>
            </div>

            <div>
                <ul className="taskcontainer max-h-100 overflow-y-auto scrollbar-thin mt-5 mx-4 rounded-2xl bg-cyan-50">
                    {filterTask.map((task) => (
                        <li key={task.id} className="px-4 bg-blue-200 my-5 mx-5 rounded-2xl py-2 ">
                            <div className="flex justify-between items-center">
                                <p className={`${task.complete === true ? "line-through" : ""}`}>{task.name}</p>
                                <div className="flex gap-3">
                                    <button className="bg-sky-300 px-3 py-2 rounded-2xl cursor-pointer hover:bg-blue-400" onClick={() => editTask(task)}>Edit</button>
                                    <button className="bg-sky-300 px-3 py-2 rounded-2xl cursor-pointer hover:bg-blue-400" onClick={() => toggleTask(task.id)}>Toggle</button>

                                    <button className="bg-sky-300 px-3 py-2 rounded-2xl cursor-pointer hover:bg-blue-400" onClick={() => deleteTask(task.id)}>Delete</button>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}


const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App />)