import Counter from "./components/Counter";
import Button from "./components/Button";
import Header from "./components/Header";
import TodoItem from "./components/TodoItem";
import "./App.css";

const App = () => {
  return (
    <div className="todo-container">
      <Counter/>
      <Counter/>
      <Counter/>
      <Counter/>
      <Header title="Tasks" />
      <TodoItem text="Eat" />
      <TodoItem text="Go to bazar" completed={true} />
      <TodoItem text="Cooking" />
      <TodoItem text="Coding" />
      <Button />
    </div>
  );
};

export default App;
