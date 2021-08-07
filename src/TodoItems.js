import React, { useContext } from "react";
import { TodoContext } from "./TodoContext";
import TodoItem from "./TodoItem";

const TodoItems = () => {
  const { todos } = useContext(TodoContext);
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
