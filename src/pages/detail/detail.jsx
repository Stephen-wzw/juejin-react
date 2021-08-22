import React, { Component } from "react";

import DetailHeader from "../../components/detail-header/detail-header";

import "./index.scss";

import { getArticleById } from "../../fake-api";

export default class Detail extends Component {

  state = {
    article: [],
  }

  getArticle = async id => {
    const res = await getArticleById(id);
    
    if (res.code === 0) {
      this.setState({ article: res.data.article });
      console.log(this.state.article.article_info.title);
    } else {
      this.props.history.replace("/404");
    }
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    this.getArticle(id);
  }

  render() {
    console.log(this.props);
    const { article_content } = this.state.article;

  
    return (
      <div className="detail">
        <DetailHeader title={1} />
        <div className="detail-content" dangerouslySetInnerHTML = {{__html: article_content}}></div>
      </div>
    );
  }
}
