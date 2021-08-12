import React, { Component } from "react";

import "./index.scss";

export default class Header extends Component {

  state = {
    currentId: 0,
  }

  navClick = (id, e) => {
    this.setState({currentId: id});
  }

  render() {
    const { categories } = this.props;

    return (
      <div className="header">
        <div className="nav-wrap">
          {
            categories.map((item, index) => {
              const { category_name, category_id } = item;

              return (
                <div
                  className={`nav-item${category_id === this.state.currentId ? " active" : ""}`}
                  key={category_id}
                  onClick={e => this.navClick(category_id, e)}
                >
                  {category_name}
                </div>
              );
            })
          }
        </div>
      </div>
    );
  }
}
