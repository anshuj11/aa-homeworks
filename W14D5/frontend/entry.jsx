import React from "react";
import ReactDOM from "react-dom";
import configureStore from "./store/store";
import Root from "./components/root";
import { createNewUser, login, logout } from "./actions/session_actions";

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  const store = configureStore();

  // TESTING START
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  window.createNewUser = createNewUser;
  window.login = login;
  window.logout = logout;
  // TESTING END

  ReactDOM.render(<Root store={store} />, root);
  //ReactDOM.render(<h1>Hello BenchBnb</h1>, root);
});
