import React, { Component } from 'react';

import TagList from "../../components/tag-list/tag-list";

import { getTagsByName } from "../../utils/common";

export default class Ios extends Component {
  
  state = {
    tagList: []
  }

  async componentDidMount () {
    const tagList = await getTagsByName("iOS");
    this.setState({tagList})
  }

  render () {
    const { tagList } = this.state;
    return (
      <div className="ios">
        <TagList tagList={tagList} />
      </div>
    )
  }
};
