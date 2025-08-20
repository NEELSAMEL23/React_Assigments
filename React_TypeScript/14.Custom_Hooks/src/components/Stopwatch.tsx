
import type { FC } from "react";
import useStopwatch from "../hooks/useStopwatch";

const Stopwatch: FC = () => {
  const {
    seconds,
    isRunning,
    goal,
    setGoal,
    start,
    stop,
    reset,
    formatTime,
    getTextColor,
  } = useStopwatch({ initialTime: 0, targetTime: 10 });

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-4">⏱ Stopwatch</h1>
      <h2
        className={`text-5xl font-bold mb-6 transition-colors duration-300 ${getTextColor()}`}
      >
        {formatTime(seconds)}
      </h2>

      <div className="space-x-4">
        <button
          onClick={start}
          disabled={isRunning}
          className="px-4 py-2 bg-green-500 text-white rounded disabled:opacity-50"
        >
          Start
        </button>
        <button
          onClick={stop}
          className="px-4 py-2 bg-red-500 text-white rounded"
        >
          Stop
        </button>
        <button
          onClick={reset}
          className="px-4 py-2 bg-blue-500 text-white rounded"
        >
          Reset
        </button>
      </div>

      <div className="mt-6 flex items-center space-x-2">
        <label className="font-medium">🎯 Target Time (sec):</label>
        <input
          type="number"
          value={goal}
          onChange={(e) => setGoal(Number(e.target.value))}
          min={1}
          className="border border-gray-400 rounded px-2 py-1 w-20 text-center"
        />
      </div>
    </div>
  );
};

export default Stopwatch;
