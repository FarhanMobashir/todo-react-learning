import React from "react";
import { useDispatch } from "react-redux";
import { deleteTodo, todoDone } from "./action";

const TodoItem = ({ todo }) => {
  const dispatch = useDispatch();
  const toggleDone = () => {
    dispatch(todoDone(todo.id));
  };
  return (
    <div className="todo-item-container">
      <h2 className="title">{todo.title}</h2>
      <h5 className="description">{todo.description}</h5>
      <div className="todo-controls">
        <label className="todo-done">
          <input type="checkbox" checked={todo.isDone} onClick={toggleDone} />
          Done
        </label>
        <button
          className="delete"
          onClick={() => {
            dispatch(deleteTodo(todo.id));
          }}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default TodoItem;
