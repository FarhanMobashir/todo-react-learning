export const TODO_ADD = "TODO_ADD";
export const TODO_DELETE = "TODO_DELETE";
export const TODO_DONE = "TODO_DONE";

export const reducer = (state = [], action) => {
  if (action.type === TODO_ADD) {
    return [action.payload, ...state];
  }

  if (action.type === TODO_DELETE) {
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
