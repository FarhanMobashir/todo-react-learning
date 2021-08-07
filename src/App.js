import React from "react";
import NewTodo from "./NewTodo";
import TodoItems from "./TodoItems";

function App() {
  return (
    <div className="app">
      <h1 className="heading">Todo List</h1>
      <NewTodo />
      <TodoItems />
    </div>
  );
}

export default App;
