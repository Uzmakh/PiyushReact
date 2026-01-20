import { useState } from "react";

const Counter = () => {
  // introducing useState
  // const val = useState(0);
  // console.log(val)  This value returns an array that has two items, first the initial state of the variable and the second is the set function that updated the value.
  const [count, setCount] = useState(0);
  
  return (
    <>
      <p>Count : {count}</p>
      <p>Number is : {count % 2 === 0 ? "Even": "Odd"}</p>
     
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </>
  );
};
export default Counter;
