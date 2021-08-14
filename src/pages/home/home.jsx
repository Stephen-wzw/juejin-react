import React, { Component } from "react";
// import qs from "querystring";

import Header from "../../components/header/header";
import PostList from "../../components/post-list/post-list";

import { getCategories,  getArticles } from "../../fake-api";

import "./index.scss";

export default class Home extends Component {
  state = {
    categories: [],
    articles: [],
  };

  getCategories = async () => {
    const res_categories = await getCategories();
    this.setState({ categories: res_categories.data.categories });
  }

  getArticles = async (categoryId, sortType) => {
    const res_articles = await getArticles(categoryId, sortType, 0, 10);
    this.setState({ articles: res_articles.data.articles });
  }

  componentDidMount() {
    this.getCategories();
    this.getArticles();
  }

  componentDidUpdate(prevProps) {
    const { search, state } = this.props.location;
    const pre_search = prevProps.location.search;
    const pre_state = prevProps.location.state;
    console.log("-", search, "-", pre_search);
    console.log("-", state, "-", pre_state);
    // const { sortType } = qs.parse(search.slice(1));

    if (search !== pre_search || state !== pre_state) {
      const { categoryId, sortType } = state || {};
      console.log('排序方式',sortType);
      console.log(state);
      this.getArticles(categoryId, sortType);
    }
  }

  render() {
    const { categories, articles } = this.state;
    return (
      <div className="home">
        <Header categories={categories} />
        <div className="home-content">
          <PostList articles={articles} />
        </div>
      </div>
    );
  }
}
