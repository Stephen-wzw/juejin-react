import React, { Component } from 'react';

import backtop from "../../assets/images/backtop.svg";

export default class BackTop extends Component {
  render() {
    return (
      <div className="back-top">
        <button className="back-top-btn">
          <img src={backtop} alt=""/>
        </button>
      </div>
    )
  }
}
