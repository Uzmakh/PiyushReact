import { useEffect } from "react";
import Counter from "./components/Counter";
import Button from "./components/Button";
import Header from "./components/Header";
import TodoItem from "./components/TodoItem";
import UseEffectHook from "./components/useEffect/UseEffectHook";
import { Timer } from "./components/useEffect/Timer";
import "./App.css";


const App = () => {
  
  useEffect(() => {
    console.log("App is mounting...");
  }, []); //it will mount, when the component mounts for the first time.
  return (
    <div className="wrapper">
      {/* <Counter /> */}
      {/* <UseEffectHook /> */}
      <Timer/>
      {/* <div className="todo-container">
        <Header title="Tasks" />
        <TodoItem text="Eat" />
        <TodoItem text="Go to bazar" completed={true} />
        <TodoItem text="Cooking" />
        <TodoItem text="Coding" />
        <Button />
      </div> */}
    </div>
  );
};

export default App;
