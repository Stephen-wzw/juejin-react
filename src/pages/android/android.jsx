import React, { Component } from 'react';

import TagList from "../../components/tag-list/tag-list";

import { getTagsByName } from "../../utils/common";

export default class Android extends Component {

  state = {
    tagList: []
  }

  async componentDidMount () {
    const tagList = await getTagsByName("Android");
    this.setState({tagList})
  }

  render () {
    const { tagList } = this.state;
    return (
      <div className="android">
        <TagList tagList={tagList} />
      </div>
    )
  }
};
