


const App = () => {

    cosnt[tasks, setTasks] = React.useState([])
    cosnt[title, setTitle] = React.useState("title")
    cosnt[priority, setPriority] = React.useState("medium")
    cosnt[filterpriority, setFilterPriority] = React.useState("All")
    cosnt[filterstatus, setFilterStatus] = React.useState("All")


    return (
        <div className="h-150  w-120 mx-auto bg-blue-100 rounded-2xl">
            <div className="flex w-full pt-10 px-4 gap-2">
                <input placeholder="Add Title" className="outline-0 py-2 rounded-2xl border border-cyan-500 w-5/6 px-3" onClick={title} onChange={(e) => setTitle(e.target.value)} />
                <select className="border border-cyan-500 outline-0  w-2/6 rounded" onClick={priority} onChange={(e) => (e.target.value)}>
                    <option value="high">High</option>
                    <option value="medium">Medium</option>
                    <option value="low">Low</option>
                </select>
                <button className="px-1 bg-green-300 w-2/6 py-2 rounded hover:bg-green-400 cursor-pointer">Add Task</button>
            </div>





            <div className="w-full  flex justify-between px-6 mt-6">
                <select className="border border-cyan-500 outline-0  px-2 py-1 rounded" onClick={setPriority} onChange={(e) => setFilterPriority(e.target.value)} >
                    <option value="All">All</option>
                    <option value="high">High</option>
                    <option value="medium">Medium</option>
                    <option value="low">Low</option>
                </select>

                <select className="border border-cyan-500 outline-0  px-2 py-1 rounded" onClick={filterstatus} onChange={(e) => setFilterStatus(e.target.value)}>
                    <option value="All">All</option>
                    <option value="incomplete">Incomplete</option>
                    <option value="complete">Complete</option>
                </select>
            </div>

            <div>
                <ul className="taskcontainer max-h-100 overflow-y-auto scrollbar-thin mt-5 mx-4 rounded-2xl bg-cyan-50">
                    {(() => (
                        <li key={task.id} className="px-4 bg-blue-200 my-5 mx-5 rounded-2xl py-2 ">
                            <div className="flex justify-between items-center">
                                <p></p>
                                <div className="flex gap-3">
                                    <button className="bg-sky-300 px-3 py-2 rounded-2xl cursor-pointer hover:bg-blue-400">Edit</button>
                                    <button className="bg-sky-300 px-3 py-2 rounded-2xl cursor-pointer hover:bg-blue-400">Toggle</button>

                                    <button className="bg-sky-300 px-3 py-2 rounded-2xl cursor-pointer hover:bg-blue-400">Delete</button>
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