import { useEffect, useState } from "react";

export const Timer = () => {
  const [time, setTime] = useState(0);

  useEffect(() => {
    //Mounted
    console.log("Adding new interval")
    const timer = setInterval(() => setTime(time + 1), 1000);
    // const timer = setTimeout(() => setTime(time + 1), 1000);
    console.log(timer);

    return function () {
      console.log("Clear old interval")
      clearInterval(timer);
    };
  }, [time]);
  return (
    <>
      <h4>Stop Watch</h4>
      <p>Current Time is : {time}</p>
    </>
  );
};
