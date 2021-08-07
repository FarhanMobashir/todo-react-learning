import NewTodo from "./NewTodo";
import TodoItems from "./TodoItems";
import initialData from "./initialData";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [todos, setTodos] = useState(initialData);
  const addTodo = (todo) => {
    todo.id = uuidv4();
    todo.isDone = false;
    setTodos([todo, ...todos]);
  };

  const toggleDone = (id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id !== id) return todo;
        return { ...todo, isDone: !todo.isDone };
      })
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="app">
      <h1 className="heading">Todo List</h1>
      <NewTodo onSubmit={addTodo} />
      <TodoItems todos={todos} onDone={toggleDone} onDelete={deleteTodo} />
    </div>
  );
}

export default App;
