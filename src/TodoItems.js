import React from "react";
import TodoItem from "./TodoItem";

const TodoItems = ({ todos }) => {
  console.log(todos);
  return (
    <div className="todos">
      <h2>Todos ({todos.length})</h2>
      {todos.map((todo) => {
        return <TodoItem key={todo.id} todo={todo} />;
      })}
    </div>
  );
};

export default TodoItems;
