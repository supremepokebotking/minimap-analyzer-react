import React, { Component } from "react";
import { choice } from "./helpers";
import "./Box.css";

class Box extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: this.props.color,
      isJson: this.props.isJson,
      type: this.props.cellType,
      name: this.props.cellName,
      details: this.props.cellDetails,
      actions: this.props.cellActions,
    };
  }

  handleClick = () => {
  };

  render() {
    return (
      <div
        className="Box"
        style={{ backgroundColor: `${this.state.color}` }}
        onClick={this.handleClick}
      ><p>{this.state.name}</p>
      <p>{this.state.type}</p>
      <p>Is Details Json?{this.state.isJson}</p>
      <p>{this.state.details}</p>
      <ul>
      {this.state.actions !== undefined ? this.state.actions.map((action) => (
          <li>{action}</li>
        )) : null}
        </ul>

      </div>
    );
  }
}

export default Box;
