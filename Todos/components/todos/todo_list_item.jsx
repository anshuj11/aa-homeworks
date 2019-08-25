import React from "react";

const ToDoListItem = props => {
  return props.todoList.map(t => (
    <div>
      <li key={t.id}>
        {t.title}
        <button onClick={() => props.deleteTodo(t.id)}>Delete Task</button>
      </li>
    </div>
  ));
};

export default ToDoListItem;
