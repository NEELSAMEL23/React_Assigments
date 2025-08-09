import React from 'react';
import { Task } from '../hooks/useTaskManager';

interface TaskListProps {
  tasks: Task[];
}

export const TaskList: React.FC<TaskListProps> = React.memo(({ tasks }) => {
  return (
    <ul className="space-y-2">
      {tasks.map((task) => (
        <li key={task.id} className="border p-2 rounded shadow">
          <div className="font-semibold">{task.title}</div>
          <div className="text-sm text-gray-600">Priority: {task.priority}</div>
        </li>
      ))}
    </ul>
  );
});
