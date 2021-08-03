import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

import Layout from "./pages/layout/layout";

import './app.scss';
export default class App extends Component {
  render () {
    return (
      <Switch>
        <Route path="/" component={Layout} />
      </Switch>
    )
  }
}
