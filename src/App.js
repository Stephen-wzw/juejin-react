import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

import Home from "./pages/home/home";
import History from "./pages/history/history";
import Post from "./pages/post/post";

import "./app.scss";
export default class App extends Component {
  render() {
    return (
      <div className="app">
        <div className="app-content"> 
          <Switch>
            <Route path="/history" component={History} />
            <Route path="/post/:id" component={Post} />
            <Route path="/" component={Home} />
          </Switch>
        </div>
      </div>
    );
  }
}
