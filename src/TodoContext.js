import { createContext, useCallback, useReducer } from "react";
import { v4 as id } from "uuid";
import { reducer, TODO_ADD, TODO_DELETE, TODO_DONE } from "./reducers";
import initialData from "./initialData";

export const TodoContext = createContext();

export const TodoProvider = ({ children }) => {
  const [todos, dispatch] = useReducer(reducer, initialData);
  const addTodo = useCallback(
    ({ title, description }) => {
      dispatch({
        type: TODO_ADD,
        payload: {
          title,
          description,
          isDone: false,
          id: id(),
        },
      });
    },
    [dispatch]
  );

  const toggleDone = useCallback(
    (id) => {
      dispatch({
        type: TODO_DONE,
        payload: {
          id,
        },
      });
    },
    [dispatch]
  );

  const deleteTodo = useCallback(
    (id) => {
      dispatch({
        type: TODO_DELETE,
        payload: {
          id,
        },
      });
    },
    [dispatch]
  );

  const value = { addTodo, deleteTodo, toggleDone, todos };

  return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>;
};
