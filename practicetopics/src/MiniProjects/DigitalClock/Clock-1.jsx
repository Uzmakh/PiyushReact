import { useState } from "react";

export const Clock = () => {
  const curTime = new Date().toLocaleTimeString(); //gives current time
  const [time, setTime] = useState(curTime);

  const updateTime = () => {
    const curTime = new Date().toLocaleTimeString();
    setTime(curTime);
  };

  setInterval(() => {
    updateTime();
  }, 1000);
  return (
    <>
      <h1>Digital Clock</h1>
      <h2>{time}</h2>
    </>
  );
};
