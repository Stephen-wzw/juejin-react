import React, { Component } from "react";
import { withRouter } from "react-router-dom";

import "./index.scss";

class SubTag extends Component {

  state = {
    currentIndex: 0,
  };

  tagClick = (id, index) => {
    console.log(id);
    this.setState({ currentIndex: index});
    const { sortType } = this.props.location.state || {};
    this.props.history.push("/", { categoryId: id, sortType })
  }

  componentDidUpdate(prevProps) {
    const { state } = this.props.location;
    const pre_state = prevProps.location.state;

    // 切换 category 时保证 All 为高亮
    if (state !== pre_state && state.categoryId < 10) {
      this.setState({currentIndex: 0})
    }
  }

  render() {
    const { tagList } = this.props;
    const { currentIndex } = this.state;

    return (
      <div className="sub-tag">
        {tagList.map((tag, index) => {
          const { category_name, category_id } = tag;

          return (
            <div
              className={`sub-tag-item${
                currentIndex === index ? " active" : ""
              }`}
              key={category_id}
              onClick={() => this.tagClick(category_id, index)}
            >
              {category_name}
            </div>
          );
        })}
      </div>
    );
  }
}

export default withRouter(SubTag)
