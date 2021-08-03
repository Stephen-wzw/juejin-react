import React, { Component } from 'react';
import { Switch, Route, Redirect } from "react-router-dom";

import Header from "../../components/header/header";

import Recommend from "../recommend/recommend";
import Backend from "../backend/backend";
import Frontend from "../frontend/frontend";
import Android from "../android/android";
import Ios from "../ios/ios";

import "./index.scss";

export default class Home extends Component {

  render () {
    return (
      <div className="home">
        <Header />
        <div className="home-content">
          <Switch>
            <Route path="/recommend" component={Recommend} />
            <Route path="/backend" component={Backend} />
            <Route path="/frontend" component={Frontend} />
            <Route path="/android" component={Android} />
            <Route path="/ios" component={Ios} />
            <Redirect exact={true} from="/" to="/recommend" />
          </Switch>
        </div>
      </div>
    )
  }
}
