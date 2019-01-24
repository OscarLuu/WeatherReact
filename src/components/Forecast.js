import React, { Component } from "react";
import Nav from "./Nav";

class Forecast extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <Nav />
        <p>forecast</p>;
      </div>
    );
  }
}

export default Forecast;
