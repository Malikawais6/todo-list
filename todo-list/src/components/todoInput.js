import React from "react";
import "./custom.css";

export default class TodoInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };
    this.state = { checked: false };

    this.handleChange = this.handleChange.bind(this);
    this.addTodo = this.addTodo.bind(this);
  }
  handleChange(e) {
    this.setState({ value: e.target.value });
  }

  addTodo(todo) {
    if (todo.length > 0) {
      this.props.addTodo(todo);
      this.setState({ value: "" });
    }
  }
  render() {
    return (
      <div className="wrapper-input">
        <form action="#" onsubmit={() => this.addTodo(this.state.value)}>
          <div className="top-row">
            <label class="container">
              <input type="checkbox" />
              <span class="checkmark input-cbox" />
            </label>
            <input
              type="text"
              className="input-todo"
              placeholder="What needs to be done ?"
              value={this.state.value}
              onChange={this.handleChange}
            />
            <button
              className="submit-button"
              onClick={() => this.addTodo(this.state.value)}
            />
          </div>
        </form>
      </div>
    );
  }
}
