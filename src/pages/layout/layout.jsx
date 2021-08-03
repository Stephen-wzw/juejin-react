import React, { Component } from 'react';
import { Switch, Route, Redirect } from "react-router-dom";

import Header from "../../components/header/header";

import Recommend from "../recommend/recommend";
import Backend from "../backend/backend";
import Frontend from "../frontend/frontend";
import Android from "../android/android";
import Ios from "../ios/ios";

import "./index.scss";

export default class Layout extends Component {

  render () {
    return (
      <div className="layout">
        <Header />
        <div className="layout-content">
          <Switch>
            <Route path="/recommend" component={Recommend} />
            <Route path="/backend" component={Backend} />
            <Route path="/frontend" component={Frontend} />
            <Route path="/android" component={Android} />
            <Route path="/ios" component={Ios} />
            <Redirect to="/recommend" />
          </Switch>
        </div>
      </div>
    )
  }
}
