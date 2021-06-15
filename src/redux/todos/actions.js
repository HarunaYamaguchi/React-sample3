export const ADD_TODO = "ADD_TODO";

export const addTodoAction = (todos) => {
  return {
    type: ADD_TODO,
    payload: todos
  }
}
