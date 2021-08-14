import React, { Component } from "react";
import { withRouter } from "react-router-dom";

import TagList from "../tag-list/tag-list";

import { getTagsById } from "../../utils/common";

import "./index.scss";

class Header extends Component {

  state = {
    currentId: 0,
    tagList: [],
  }

  navClick = (id) => {
    // 动态类名
    this.setState({currentId: id});
    // 点击路由切换，state传递参数
    const { sortType } = this.props.location.state || {};
    this.props.history.push("/", { categoryId: id, sortType });
    // 根据id获取对应tagList
    const { categories } = this.props;
    const tagList = getTagsById(categories, id);
    this.setState({tagList});
  }

  render() {
    const { categories } = this.props;
    console.log(categories);
    
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
                  onClick={() => this.navClick(category_id)}
                >
                  {category_name}
                </div>
              );
            })
          }
        </div>

        <TagList tagList={this.state.tagList} />
      </div>
    );
  }
}

export default withRouter(Header)
