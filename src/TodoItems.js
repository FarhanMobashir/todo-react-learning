import React from "react";
import TodoItem from "./TodoItem";

const TodoItems = ({ todos = [], onDone, onDelete }) => {
  return (
    <div className="todos">
      <h2>Todos ({todos.length})</h2>
      {todos.map((todo) => {
        return (
          <TodoItem
            key={todo.id}
            todo={todo}
            onDone={onDone}
            onDelete={onDelete}
          />
        );
      })}
    </div>
  );
};

export default TodoItems;
