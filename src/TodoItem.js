import React, { useContext } from "react";
import { TodoContext } from "./TodoContext";

const TodoItem = ({ todo }) => {
  const { toggleDone, deleteTodo } = useContext(TodoContext);
  const done = () => toggleDone(todo.id);
  const onDelete = () => deleteTodo(todo.id);
  return (
    <div className="todo-item-container">
      <h2 className="title">{todo.title}</h2>
      <h5 className="description">{todo.description}</h5>
      <div className="todo-controls">
        <label className="todo-done">
          <input type="checkbox" checked={todo.isDone} onChange={done} />
          Done
        </label>
        <button className="delete" onClick={onDelete}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default TodoItem;
