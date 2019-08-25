
export const allTodos = (state) => {
  let keys = Object.keys(state.todos);
  let todos_arr = [];
  keys.forEach(k => todos_arr.push(state.todos[k]));
  console.log("Todos Array: ", todos_arr);
  return todos_arr;
};



