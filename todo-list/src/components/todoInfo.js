import React from "react";
import "./custom.css";

export default class TodoInfo extends React.Component {
  constructor(props) {
    super(props);
  }
  displayOnClick() {}

  render() {
    return (
      <div className="info-row">
        <div className="info-left">
          <label>{this.props.count} items left</label>
        </div>
        <div className="info-center">
          <button
            onClick={() => this.props.onChangeButton("all")}
            className="btn all"
          >
            All
          </button>
          <button
            onClick={() => this.props.onChangeButton("active")}
            className="btn active"
          >
            Active
          </button>
          <button
            onClick={() => this.props.onChangeButton("completed")}
            className="btn completed"
          >
            Completed
          </button>
        </div>
      </div>
    );
  }
}
