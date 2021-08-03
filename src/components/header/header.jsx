import React, { Component } from "react";
import { NavLink } from "react-router-dom";

import { getCategories } from "../../fake-api";
import "./index.scss";

export default class Header extends Component {
  state = {
    categories: [],
  };

  async componentDidMount() {
    const res = await getCategories();
    this.setState({ categories: res.data.categories });
  }

  render() {
    const { categories } = this.state;
    console.log(categories);
    return (
      <div className="header">
        <div className="nav-wrap">
          {
            categories.map(item => {
              const { path, category_name, category_id } = item;
              return <NavLink className="nav-item" to={path} key={category_id}>{category_name}</NavLink>
            })
          }
        </div>
      </div>
    );
  }
}
