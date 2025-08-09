import React from 'react';

interface StatsProps {
    stats: {
        total: number;
        avgPriority: string;
    };
}

export const TaskStats: React.FC<StatsProps> = React.memo(({ stats }) => {
    return (
        <div className="p-4 border rounded bg-gray-50">
            <div>Total Tasks: {stats.total}</div>
            <div>Average Priority: {stats.avgPriority}</div>
        </div>
    );
});