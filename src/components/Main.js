import React, { Component } from "react";
import Forecasts from "./Forecast";
import Nav from "./Nav";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Weather extends Component {
  constructor(props) {
    super(props);
    this.state = {
      location: "",
      currentURL: "",
      futureURL: ""
    };
    this.handleChange = this.handleChange.bind(this);
    //    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const location = event.target.value;
    this.setState(function() {
      return {
        location: location
      };
    });
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  render() {
    const match = window.location.href;
    const location = this.state.location;
    return (
      <div>
        <Nav />
        <div className="container">
          <form className="column" onSubmit={this.handleSubmit}>
            <label className="header">Enter a City and State</label>
            <input
              type="text"
              placeholder="Sunnyvale, California"
              className="text"
              value={this.state.location}
              onChange={this.handleChange}
            />
            <Link
              style={{ textDecoration: "none" }}
              className="button"
              to={{
                pathname: "/forecast",
                search: `?city=` + location,
                state: {
                  location: this.state.location
                }
              }}
            >
              Get Weather
            </Link>
          </form>
        </div>
      </div>
    );
  }
}

export default Weather;
