import React, { Component } from "react";
import { NavLink } from "react-router-dom";

import "./index.scss";

export default class TagList extends Component {
  render() {
    const { tagList } = this.props;
    return (
      <div className="tag-list">
        {
          tagList.map((tag) => {
            const { path, category_name, category_id } = tag;
            return (
              <NavLink className="tag-item" to={path} key={category_id}>
                {category_name}
              </NavLink>
            );
          })
        }
      </div>
    );
  }
}
