import React from "react";
import TodoListItem from "./todo_list_item";
import TodoForm from "./todo_form";
const TodoList = props => {
  //   const formatted_list = props.todos.map(todo => (
  //     <li key={todo.id}>{todo.title}</li>
  //   ));
  return (
    <div>
          <TodoForm receiveTodo={props.receiveTodo} />
          <TodoListItem todoList={props.todos} deleteTodo={props.removeTodo}/>
    </div>
  );
};

export default TodoList;
