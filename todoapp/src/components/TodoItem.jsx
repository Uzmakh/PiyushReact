const TodoItem = (props) => {
  return (
    <li className="todo-item">
      <div>
        {props.completed ? <>✅</> : <input type="checkbox" />}
        <span className="todo-item-text">{props.text}</span>
      </div>
      <p>...</p>
    </li>
  );
};
export default TodoItem;