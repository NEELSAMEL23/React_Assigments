import { useState, useEffect, useRef } from "react";

interface UseStopwatchOptions {
  initialTime?: number;
  targetTime?: number;
}

export default function useStopwatch({initialTime = 0,targetTime = 10,}: UseStopwatchOptions = {}) {

  const [seconds, setSeconds] = useState<number>(initialTime);
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const [goal, setGoal] = useState<number>(targetTime);
  const intervalRef = useRef<number | null>(null);

  // Format time as MM:SS
  const formatTime = (secs: number) => {
    const mins = Math.floor(secs / 60);
    const remSecs = secs % 60;

    return `${mins.toString().padStart(2, "0")}:${remSecs.toString().padStart(2, "0")}`;
  };

  // Play beep sound
  const playSound = () => {
    const audio = new Audio("https://actions.google.com/sounds/v1/alarms/beep_short.ogg");
    audio.play().catch((err) => console.warn("Sound blocked:", err));
  };

  // Start / Stop interval
  useEffect(() => {
    if (isRunning) {
      intervalRef.current = window.setInterval(() => {
        setSeconds((prev) => prev + 1);
      }, 1000);
    } else if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isRunning]);

  // Beep & stop at target time
  useEffect(() => {
    if (seconds === goal) {
      playSound();
      setIsRunning(false);
    }
  }, [seconds, goal]);

  // Controls
  const start = () => setIsRunning(true);
  const stop = () => setIsRunning(false);
  const reset = () => {
    setIsRunning(false);
    setSeconds(initialTime);
  };

  // Dynamic color
  const getTextColor = () => {
    if (!isRunning) return "text-red-600";
    if (goal - seconds <= 3 && goal > seconds) return "text-orange-500";
    return "text-green-600";
  };

  return {
    seconds,
    isRunning,
    goal,
    setGoal,
    start,
    stop,
    reset,
    formatTime,
    getTextColor,
  };
}
