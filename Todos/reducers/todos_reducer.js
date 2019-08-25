import {
  RECEIVE_TODOS,
  RECEIVE_TODO,
  REMOVE_TODO,
  receiveTodos,
  receiveTodo
} from "../actions/todo_actions";
import merge from "lodash/merge";
const oldState = {
  1: {
    id: 1,
    title: "wash car",
    body: "with soap",
    done: false
  },
  2: {
    id: 2,
    title: "wash dog",
    body: "with shampoo",
    done: true
  }
};

const newState = [
  {
    id: 1,
    title: "laundry",
    body: "with detergent",
    done: false
  },
  {
    id: 2,
    title: "dish",
    body: "with dish soap",
    done: true
  }
];

const todosReducer = (initialState = oldState, action) => {
  Object.freeze(initialState);
  let newState;
  switch (action.type) {
    case RECEIVE_TODOS:
      let action_todos = {};
      action.todos.forEach(todo => merge(action_todos, { [todo.id]: todo }));
      //console.log("Objectified Todos: ", action_todos);
      //  newState = Object.assign({}, action_todos);
      return action_todos;
    case RECEIVE_TODO:
      return merge({}, initialState, { [action.todo.id]: action.todo });
    case REMOVE_TODO:
      newState = Object.assign({}, initialState);
      delete newState[action.id];
      return newState;
    default:
      return initialState;
  }
};

export default todosReducer;
