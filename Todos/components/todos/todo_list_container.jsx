import { connect } from "react-redux";
import TodoList from "./todo_list";
import { allTodos } from "../../reducers/selectors";
import { receiveTodo, removeTodo } from "../../actions/todo_actions";

const msp = state => {
  return {
    todos: allTodos(state)
  };
};

const mdp = dispatch => {
  return {
    receiveTodo: todo => dispatch(receiveTodo(todo)),
    removeTodo: id => dispatch(removeTodo(id))
  };
};

export default connect(
  msp,
  mdp
)(TodoList);
