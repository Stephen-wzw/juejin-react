import React, { Component } from "react";
import { Route } from "react-router-dom";

import Home from "./pages/home/home";
import History from "./pages/history/history";
import Detail from "./pages/detail/detail";

import "./app.scss";
export default class App extends Component {
  render() {
    return (
      // TODO 状态保持
      <div className="app">
        <div className="app-content">
            <Route path="/history" component={History} />
            <Route path="/post/:id" component={Detail} />
            <Route path="/" exact children={props=> {
              return (
                <div style={props.match ? null : { display: 'none' }}>
                  <Home {...props}/>
                </div>
              )
            }} />
        </div>
      </div>
    );
  }
}
