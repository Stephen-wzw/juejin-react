import React, { Component } from "react";
import { NavLink, withRouter } from "react-router-dom";

import "./index.scss";

class Footer extends Component {
  render () {
    return (
      <div className="footer">
        <div className="tab-list">
          <NavLink className="tab-item" to="/">热门</NavLink>
          <NavLink className="tab-item" to="/?sort=new">最新</NavLink>
          <NavLink className="tab-item" to="/history">历史</NavLink>
        </div>
      </div>
    )
  }
}

export default withRouter(Footer)
