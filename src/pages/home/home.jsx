import React, { Component } from "react";
// import qs from "querystring";

import Header from "../../components/header/header";
import SubTag from "../../components/sub-tag/sub-tag";
import PostList from "../../components/post-list/post-list";

import { getCategories,  getArticles } from "../../fake-api";

import "./index.scss";

export default class Home extends Component {
  state = {
    categories: [],
    articles: [],
    tagList: [],
  };

  getCategories = async () => {
    const res_categories = await getCategories();
    this.setState({ categories: res_categories.data.categories });
  }

  getTagById = (id) => {
    const { categories } = this.state;
    const category = categories.filter(item => item.category_id === id)[0];

    if (category) {
      const tagList = category.children || [];

      this.setState({ tagList });
    }
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
    const { state } = this.props.location;
    const pre_state = prevProps.location.state;

    if (state !== pre_state) {
      const { categoryId, sortType } = state || {};

      this.getArticles(categoryId, sortType);
      this.getTagById(categoryId);
    }
  }

  render() {
    const { categories, tagList, articles } = this.state;
    return (
      <div className="home">
        <Header categories={categories} />
        <div className="home-content">
          {
            tagList.length ? <SubTag tagList={tagList} /> : null
          }
          <PostList articles={articles} />
        </div>
      </div>
    );
  }
}
