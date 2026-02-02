import { useEffect, useState } from "react";

const Clock2 = ({ textColor, bgColor }) => {
  const [time, setTime] = useState(new Date());
  useEffect(() => {
    const callInterval = setInterval(() => {
      //  console.log("Function is running!");
      setTime(new Date());
    }, 1000);
    console.log(callInterval);

    return () => clearInterval(callInterval);
  }, []);

  return (
    <>
      <h3
        style={{ width: "150px", color: textColor, backgroundColor: bgColor }}
      >
        {time.toLocaleTimeString()}
      </h3>
    </>
  );
};

export default Clock2;
