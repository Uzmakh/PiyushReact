// * Example with passing values through Props-Prop drilling

import { useState } from "react";

const CounterApp = () => {
  const [count, setCount] = useState(0);
  console.log("App re-renders");
  return (
    <div>
      <Counter count={count} setCount={setCount} />
    </div>
  );
};

export default CounterApp;

const Counter = ({ count, setCount }) => {
  console.log("Counter re-renders");
  return (
    <>
      <p>Count:{count}</p>
      <Button count={count} setCount={setCount} />
    </>
  );
};

const Button = ({ count, setCount }) => {
  console.log("Button re-renders");
  return (
    <>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </>
  );
};
