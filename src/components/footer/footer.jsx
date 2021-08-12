import React, { Component } from "react";

import "./index.scss";

export default class Footer extends Component {
  render () {
    return (
      <div className="footer">
        <div className="tab-list">
          <div className="tab-item">热门</div>
          <div className="tab-item">最新</div>
          <div className="tab-item">历史</div>
        </div>
      </div>
    )
  }
}

