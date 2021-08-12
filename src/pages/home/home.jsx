import React, { Component } from "react";

import Header from "../../components/header/header";
import PostList from "../../components/post-list/post-list";
import Footer from "../../components/footer/footer";

import { getCategories, getArticles } from "../../fake-api";

import "./index.scss";

export default class Home extends Component {
  state = {
    categories: [],
    articles: [],
  };

  async componentDidMount() {
    const res_categories = await getCategories();
    const res_articles = await getArticles();

    this.setState({
      categories: res_categories.data.categories,
      articles: res_articles.data.articles,
    });
  }

  render() {
    const { categories, articles } = this.state;
    
    return (
      <div className="home">
        <Header categories={categories} />
        <div className="home-content">
          <PostList articles={articles} />
        </div>
        <Footer />
      </div>
    );
  }
}
