import React, { Component } from "react";
import Nav from "./Nav";

const currentAPIFront = "https://api.openweathermap.org/data/2.5/weather?q=";
const currentAPIBack = "&type=accurate&APPID=bc72d750ab71be71217ddaaa52e98d46";
const futureAPIFront = "https://api.openweathermap.org/data/2.5/forecast?q=";
const futureAPIBack = "&type=accurate&APPID=bc72d750ab71be71217ddaaa52e98d46";

class Forecast extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      items: {}
    };
  }

  componentDidMount() {
    const location = this.props.location.state.location;
    const currentURL = currentAPIFront + location + currentAPIBack;
    const futureURL = futureAPIFront + location + futureAPIBack;

    fetch(futureURL)
      .then(response => response.json())
      .then(data => console.log(data));

    fetch(currentURL)
      .then(response => response.json())
      .then(data => console.log(data));
  }

  render() {
    console.log(this.props.location.state.location);
    return (
      <div>
        <Nav />
        {(this.state.loading = true ? <p>Loading</p> : <p>forecast</p>)}
      </div>
    );
  }
}

export default Forecast;
