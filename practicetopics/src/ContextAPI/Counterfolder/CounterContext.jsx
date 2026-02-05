import { useContext } from "react";
import { createContext, useState } from "react";

const CounterContext = () => {
  const [count, setCount] = useState(0);
  return (
    <countContext.Provider value={{ count, setCount }}>
      <Counter />
    </countContext.Provider>
  );
};

export default CounterContext;

const Counter = () => {
  const { count } = useContext(countContext);
  console.log("Counter re-renders");
  return (
    <>
      <p>Count:{count}</p>
      <Button />
    </>
  );
};

const Button = () => {
  const { count, setCount } = useContext(countContext);
  console.log("Button re-renders");
  return (
    <>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </>
  );
};

const countContext = createContext({
  count: 0,
  setCount: () => {},
});
