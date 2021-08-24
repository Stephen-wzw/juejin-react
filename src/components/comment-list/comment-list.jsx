import React, { Component } from "react";

import CommentItem from "./comment-item/comment-item";

export default class CommentList extends Component {
  render() {
    return (
      <div className="comment-list">
        列表
        <CommentItem/>
      </div>
    );
  }
}
