import NewTodo from "./NewTodo";
import TodoItems from "./TodoItems";
import initialData from "./initialData";
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

const getStateFromLocalStorage = () => {
  const storage = localStorage.getItem("todos");
  // console.log(storage);
  if (storage) {
    return JSON.parse(storage).todos;
  } else {
    return initialData;
  }
};

const storeStateInLocalStorage = (todos) => {
  localStorage.setItem("todos", JSON.stringify({ todos }));
  // console.log(localStorage);
};

function App() {
  const [todos, setTodos] = useState(getStateFromLocalStorage());
  useEffect(() => {
    storeStateInLocalStorage(todos);
  }, [todos]);

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
