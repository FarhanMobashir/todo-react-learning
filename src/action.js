import { v4 as id } from "uuid";

export const ADD_TODO = "ADD_TODO";
export const DELETE_TODO = "DELETE_TODO";
export const TODO_DONE = "TODO_DONE";

export const addTodo = ({ title, description }) => ({
  type: ADD_TODO,
  payload: {
    title,
    description,
    isDone: false,
    id: id(),
  },
});
export const deleteTodo = (id) => ({
  type: DELETE_TODO,
  payload: {
    id,
  },
});
export const todoDone = (id) => ({
  type: TODO_DONE,
  payload: {
    id,
  },
});
