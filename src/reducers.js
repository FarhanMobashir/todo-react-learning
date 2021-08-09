import { ADD_TODO, DELETE_TODO, TODO_DONE } from "./action";
import initialData from "./initialData";

export const reducer = (state = initialData, action) => {
  if (action.type === ADD_TODO) {
    return [action.payload, ...state];
  }

  if (action.type === DELETE_TODO) {
    return state.filter((item) => item.id !== action.payload.id);
  }

  if (action.type === TODO_DONE) {
    return state.map((todo) => {
      if (todo.id !== action.payload.id) return todo;
      return { ...todo, isDone: !todo.isDone };
    });
  }

  return state;
};
