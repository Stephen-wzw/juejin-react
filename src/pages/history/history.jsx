import React, { Component } from "react";

export default class History extends Component {
  render () {
    console.log(this.props.match)
    return (
      <div className="history">
        历史
      </div>
    )
  }
};
