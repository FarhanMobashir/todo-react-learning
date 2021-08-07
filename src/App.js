import NewTodo from "./NewTodo";
import TodoItems from "./TodoItems";
import initialData from "./initialData";
import { useReducer } from "react";
import { v4 as id } from "uuid";
import { reducer, TODO_ADD, TODO_DELETE, TODO_DONE } from "./reducers";

function App() {
  const [todos, dispatch] = useReducer(reducer, initialData);
  const addTodo = ({ title, description }) => {
    dispatch({
      type: TODO_ADD,
      payload: {
        title,
        description,
        isDone: false,
        id: id(),
      },
    });
  };

  const toggleDone = (id) => {
    dispatch({
      type: TODO_DONE,
      payload: {
        id,
      },
    });
  };

  const deleteTodo = (id) => {
    dispatch({
      type: TODO_DELETE,
      payload: {
        id,
      },
    });
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
