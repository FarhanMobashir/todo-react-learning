import React from "react";

const TodoItem = ({ todo, onDone, onDelete }) => {
  const done = () => onDone(todo.id);
  const deleteTodo = () => onDelete(todo.id);
  return (
    <div className="todo-item-container">
      <h2 className="title">{todo.title}</h2>
      <h5 className="description">{todo.description}</h5>
      <div className="todo-controls">
        <label className="todo-done">
          <input type="checkbox" checked={todo.isDone} onChange={done} />
          Done
        </label>
        <button className="delete" onClick={deleteTodo}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default TodoItem;
