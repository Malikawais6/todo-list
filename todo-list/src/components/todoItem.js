import React from "react";
import "./custom.css";
export default class TodoItem extends React.Component {
  constructor(props) {
    super(props);
  }
  removeTodo(id) {
    this.props.removeTodo(id);
  }
  check(id) {
    this.props.check(id);
  }

  render() {
    return (
      <div>
        <label className="container">
          <input
            type="checkbox"
            className="cbox"
            name="foo"
            onClick={e => this.check(this.props.id)}
          />
          <label className={"todo-list"}>{this.props.todo.text}</label>
          <span class="checkmark" />

          <button
            className="close-thik"
            onClick={e => this.removeTodo(this.props.id)}
          />
        </label>
      </div>
    );
  }
}
