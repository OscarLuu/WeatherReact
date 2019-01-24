import React, { Component } from "react";
import Forecasts from "./Forecast";

const currentAPIFront = "https://api.openweathermap.org/data/2.5/weather?q=";
const currentAPIBack = "&type=accurate&APPID=bc72d750ab71be71217ddaaa52e98d46";
const futureAPIFront = "https://api.openweathermap.org/data/2.5/forecast?q=";
const futureAPIBack = "&type=accurate&APPID=bc72d750ab71be71217ddaaa52e98d46";

class Weather extends Component {
  constructor(props) {
    super(props);
    this.state = {
      location: "",
      currentURL: "",
      futureURL: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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
    const currentURL = currentAPIFront + this.state.location + currentAPIBack;
    const futureURL = futureAPIFront + this.state.location + futureAPIBack;

    fetch(futureURL)
      .then(response => response.json())
      .then(data => console.log(data));

    fetch(currentURL)
      .then(response => response.json())
      .then(data => console.log(data));
  }

  render() {
    return (
      <div>
        <div className="top">
          <h1>Weather Application</h1>
          <form className="right">
            <input
              type="text"
              placeholder="Sunnyvale, California"
              className="text textheight"
            />
            <button type="submit" className="button btnwidth">
              Get Weather
            </button>
          </form>
        </div>
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
            <button type="submit" className="button">
              Get Weather
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default Weather;
