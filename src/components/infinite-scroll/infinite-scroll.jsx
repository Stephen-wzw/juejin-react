import React, { Component } from 'react';

import { saveScrollTop } from "../../utils/storage";

export default class InfiniteScroll extends Component {

  // 组件挂载时监听滚动事件
  componentDidMount() {
    this.pageLoaded = 1;
    console.log(this);
    this.attachScrollListener();
  }

  // 组件卸载时不再监听滚动事件
  componentWillUnmount() {
    this.detachScrollListener();
    const scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
    saveScrollTop(scrollTop);
  }

  attachScrollListener = () => {
    window.addEventListener("scroll", this.scrollListener, false);
  }

  detachScrollListener = () => {
    window.removeEventListener("scroll", this.scrollListener, false);
  }

  scrollListener = () => {
    const scrollHeight = document.body.scrollHeight;
    const scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
    const clientHeight = document.documentElement.clientHeight;

    let offset = scrollHeight - scrollTop - clientHeight;

    if (offset <= 100) {
      this.props.loadMore();
    }
  }
  
  render() {
    return (
      <div>
        {
          this.props.children
        }
      </div>
    )
  }
}
