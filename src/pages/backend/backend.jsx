import React, { Component } from 'react';

import TagList from "../../components/tag-list/tag-list";

import { getTagsByName } from "../../utils/common";

export default class Backend extends Component {

  state = {
    tagList: []
  }

  async componentDidMount () {
    const tagList = await getTagsByName("后端");
    this.setState({tagList})
  }

  render () {
    const { tagList } = this.state;
    return (
      <div className="backend">
        <TagList tagList={tagList} />
      </div>
    )
  }
};
