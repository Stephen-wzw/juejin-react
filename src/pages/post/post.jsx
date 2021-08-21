import React, { Component } from 'react'

export default class Post extends Component {
  render() {
    console.log(this.props);
    return (
      <div>
        Post
        {this.props.match.params.id}
      </div>
    )
  }
}
