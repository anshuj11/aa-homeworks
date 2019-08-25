import React from "react";
import uniqueId from "../../util/util";
class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 0,
      title: "",
      body: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(field) {
    return e => {
      this.setState({ [field]: e.target.value });
    };
  }
  handleSubmit(e) {
    e.preventDefault();
    this.setState({ id: uniqueId() });
    document.getElementById("Taskform").reset();
    this.props.receiveTodo(this.state);
  }
  render() {
    return (
      <div>
        <form id="Taskform">
          <input
            type="text"
            value={this.state.title}
            onChange={this.handleChange("title")}
          />
          <input
            type="text"
            value={this.state.body}
            onChange={this.handleChange("body")}
          />
          <button onClick={this.handleSubmit}> Add Task </button>
        </form>
      </div>
    );
  }
}

export default TodoForm;
