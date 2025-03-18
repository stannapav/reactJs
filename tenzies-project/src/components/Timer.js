import { useState, useEffect } from "react";

export default function Timer({ start, stop }) {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [bestTime, setBestTime] = useState(() => {
    const savedBestTime = localStorage.getItem("bestTime");
    return savedBestTime ? JSON.parse(savedBestTime) : null;
  });

  useEffect(() => {
    let timer;
    if (isRunning) {
      timer = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    } else {
      clearInterval(timer);
    }
    return () => clearInterval(timer);
  }, [isRunning]);

  useEffect(() => {
    if (stop) {
      setIsRunning(false);

      // Get the most recent best time from localStorage
      const storedBestTime = localStorage.getItem("bestTime")
        ? JSON.parse(localStorage.getItem("bestTime"))
        : null;

      // Update best time only if the new time is lower
      if (storedBestTime === null || time < storedBestTime) {
        localStorage.setItem("bestTime", JSON.stringify(time));
        setBestTime(time);
      }
    }
  }, [stop]); // Runs only when stop is triggered

  useEffect(() => {
    if (start) {
      setIsRunning(true);
      setTime(0); // Reset timer when a new game starts
    }
  }, [start]); // Runs only when start is triggered

  const formatTime = (t) => {
    const minutes = Math.floor(t / 60);
    const seconds = t % 60;
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  return (
    <div>
      <h3>Time: {formatTime(time)}</h3>
      {bestTime !== null && <h4>Best Time: {formatTime(bestTime)}</h4>}
    </div>
  );
}
