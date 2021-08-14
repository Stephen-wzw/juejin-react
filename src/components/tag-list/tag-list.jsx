import React, { Component } from "react";

import "./index.scss";

export default class TagList extends Component {
  render() {
    const { tagList } = this.props;
    return (
      <div className="tag-list">
        {
          tagList.map((tag) => {
            const { category_name, category_id } = tag;
            return (
              <div className="tag-item" key={category_id}>
                {category_name}
              </div>
            );
          })
        }
      </div>
    );
  }
}
