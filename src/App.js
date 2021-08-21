import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

import Home from "./pages/home/home";
import History from "./pages/history/history";
import Post from "./pages/post/post";

import Footer from "./components/footer/footer";

import "./app.scss";
export default class App extends Component {
  render() {
    console.log(this.props);
    return (
      <div className="app">
        <div className="app-content"> 
          <Switch>
            <Route path="/history" component={History} />
            <Route path="/post/:id" component={Post} />
            <Route path="/" exact>
              {props => (
                <div style={ props.match ? null : { display: "none" }}>
                  <Home {...props} />
                </div>
              )}
            </Route>
          </Switch>
        </div>
        <Footer />
      </div>
    );
  }
}
