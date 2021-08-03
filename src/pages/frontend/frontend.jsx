import React, { Component } from 'react';

import TagList from "../../components/tag-list/tag-list";

import { getTagsByName } from "../../utils/common";

export default class Frontend extends Component {
  
  state = {
    tagList: []
  }

  async componentDidMount () {
    const tagList = await getTagsByName("前端");
    this.setState({tagList})
  }

  render () {
    const { tagList } = this.state;
    return (
      <div className="frontend">
        <TagList tagList={tagList} />
      </div>
    )
  }
};
