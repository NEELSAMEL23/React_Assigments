
import { TaskForm } from './components/TaskForm';
import { TaskList } from './components/TaskList';
import { TaskStats } from './components/TaskStats';
import { useTaskManager } from './hooks/useTaskManager';

export default function App() {
  const {

    filteredTasks,
    stats,
    filter,
    addTask,
    updateFilter
  } = useTaskManager();

  return (
    <div className="max-w-2xl mx-auto p-4 space-y-4">
      <h1 className="text-2xl font-bold">Task Manager</h1>
      <TaskForm onAddTask={addTask} />
      <div className="space-y-2">
        <label className="block font-medium">Filter by Priority:</label>
        <select
          value={filter}
          onChange={(e) => updateFilter(e.target.value)}
          className="border p-2 rounded w-full"
        >
          <option value="All">All</option>
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </select>
      </div>
      <TaskStats stats={stats} />
      <TaskList tasks={filteredTasks} />
    </div>
  );
}