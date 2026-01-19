import { useState } from "react";

const Counter = () => {
  // const val = useState(0);
  // console.log(val)  This value returns an array that has two items, first the initial state of the variable and the second is the set function that updated the value.
  const [count, setCount] = useState(0);
  const [value, setValue] = useState("JavaScript");
  return (
    <>
      <p>Count : {count}</p>
      <p>Value is : {value}</p>
      <button onClick={() => setValue("React")}>Change</button>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </>
  );
};
export default Counter;
