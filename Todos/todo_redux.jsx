import React from "react";
import ReactDOM from "react-dom";
import configureStore from "./store/store";
import { receiveTodo } from "./actions/todo_actions";
import { allTodos } from "./reducers/selectors";
import Root from "./components/root";

document.addEventListener("DOMContentLoaded", function() {
  const root = document.getElementById("root");
  const store = configureStore();
  window.store = store;
  window.receiveTodo = receiveTodo;
  window.allTodos = allTodos;
  ReactDOM.render(<Root store={store} />, root);
});
