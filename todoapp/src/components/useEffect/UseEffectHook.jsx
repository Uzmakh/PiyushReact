import { useEffect, useState } from "react";

const UseEffectHook = () => {
  const [count, setCount] = useState(0);
  const [visible, setVisible] = useState(true);
  useEffect(() => {
    console.log("Parent component is mounting...");
  }, []); //it will mount, when the component mounts for the first time
  useEffect(() => {
    console.log("Parent component is mounting with every count increment...");
  }, [count]);

  return (
    <>
      {visible ? <ChildComponent /> : <>"Child component unmounts"</>}
      <p>Count is : {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setVisible(!visible)}>Toggle</button>
    </>
  );
};

export default UseEffectHook;

const ChildComponent = () => {
  useEffect(() => {
    console.log("Child component is mounting");

    return function () {
      console.log("Unmounting......");
    };
  }, []); //this code will run on mounting each time
  return <h1>Child Component</h1>;
};
