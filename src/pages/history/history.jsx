import React, { Component } from "react";

import PostList from "../../components/post-list/post-list";
import Footer from "../../components/footer/footer";

import { getArticleById } from "../../fake-api";
import { getViewedArticleId } from "../../utils/storage";

import "./index.scss";
export default class History extends Component {

  state = {
    articles: [],
  }

  componentDidMount() {
    const articleIds = getViewedArticleId();
    const articles = [];

    articleIds.map(async id => {
      const res = await getArticleById(id);
      articles.push(res.data.article);
      return 0;
    })

    this.setState({ articles });
  }

  render () {
    const { articles } = this.state;

    return (
      <div className="history">
        <PostList articles={articles} />
        <Footer />
      </div>
    )
  }
};
