import React, { Component } from "react";

import DetailHeader from "../../components/detail-header/detail-header";
import CommentList from "../../components/comment-list/comment-list";
import InfiniteScroll from "../../components/infinite-scroll/infinite-scroll";

import { getArticleById, getCommentsByArticleId } from "../../fake-api";
import { getDate } from "../../utils/common";

import "./index.scss";

export default class Detail extends Component {

  state = {
    isLoading: true,
    article: [],
    comments: [],
  }

  getArticles = async id => {
    const res = await getArticleById(id);
    
    if (res.code === 0) {
      this.setState({ article: res.data.article, isLoading: false });
      console.log(this.state.article.article_info.title);
    } else {
      this.props.history.replace("/404");
    }
  }

  getComments = async id => {
    const res = await getCommentsByArticleId(id);
    console.log(res);
  }

  componentDidMount() {
    window.scrollTo(0, 0);
    const { id } = this.props.match.params;
    this.getArticles(id);
    this.getComments(id);
  }

  render() {
    console.log(this.props);
    const { article, isLoading } = this.state;
    const { article_content, article_info, author_user_info } = article;
    console.log(article_info);

    return (
      // TODO 骨架屏
      // TODO 图片懒加载
      <div className="detail">
        {
          isLoading
          ? <div>loading</div>
          : (
            <div className="detail-wrap">
              <DetailHeader title={article_info.title} />

              <div className="content-wrap">
                <div className="user-info">
                  <div className="avatar">
                    <img src={author_user_info.avatar_large} alt="用户头像"/>
                  </div>

                  <div className="middle">
                    <span className="user-name">{author_user_info.user_name}</span>
                    <div className="meta">{getDate(article_info.ctime * 1000)}</div>
                  </div>
                </div>

                <img className="cover" src={article_info.cover_image} alt=""/>

                <h1 className="title">{article_info.title}</h1>

                <div className="detail-content" dangerouslySetInnerHTML = {{__html: article_content}}></div>
                
                <InfiniteScroll>
                  <CommentList />
                </InfiniteScroll>
              </div>
            </div>
          )
        }
      </div>
    )
  }
}
