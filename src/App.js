import React from "react";
import { useSelector } from "react-redux";
import { saveState } from "./localStorage";
import NewTodo from "./NewTodo";
import { store } from "./store";
import TodoItems from "./TodoItems";

function App() {
  const todos = useSelector((state) => state);
  store.subscribe(() => {
    saveState(store.getState());
  });
  return (
    <div className="app">
      <h1 className="heading">Todo List</h1>
      <NewTodo />
      <TodoItems todos={todos} />
    </div>
  );
}

export default App;
