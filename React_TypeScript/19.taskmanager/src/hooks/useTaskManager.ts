import { useState, useMemo, useCallback } from 'react';

export type Task = {
    id: number;
    title: string;
    priority: 'Low' | 'Medium' | 'High';
};

const priorityMap = { Low: 1, Medium: 2, High: 3 };

export function useTaskManager() {
    const [tasks, setTasks] = useState<Task[]>([]);
    const [filter, setFilter] = useState<'All' | 'Low' | 'Medium' | 'High'>('All');

    const addTask = useCallback((title: string, priority: 'Low' | 'Medium' | 'High') => {
        setTasks(prev => [...prev, { id: Date.now(), title, priority }]);
    }, []);

    const updateFilter = useCallback((value: string) => {
        setFilter(value as 'All' | 'Low' | 'Medium' | 'High');
    }, []);

    const filteredTasks = useMemo(() => {
        if (filter === 'All') return tasks;
        return tasks.filter(task => task.priority === filter);
    }, [tasks, filter]);

    const stats = useMemo(() => {
        const total = tasks.length;
        const avgPriority =
            total === 0
                ? 0
                : tasks.reduce((acc, task) => acc + priorityMap[task.priority], 0) / total;
        return { total, avgPriority: avgPriority.toFixed(2) };
    }, [tasks]);

    return {
        tasks,
        filteredTasks,
        stats,
        filter,
        addTask,
        updateFilter
    };
}