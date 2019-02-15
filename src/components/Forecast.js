import React, { Component } from "react";
import Nav from "./Nav";

const currentAPIFront = "https://api.openweathermap.org/data/2.5/weather?q=";
const currentAPIBack = "&type=accurate&APPID=bc72d750ab71be71217ddaaa52e98d46";
const futureAPIFront = "https://api.openweathermap.org/data/2.5/forecast?q=";
const futureAPIBack =
  "&type=accurate&APPID=bc72d750ab71be71217ddaaa52e98d46&cnt=3";

const UserInterface = props => {
  return (
    <div className="item-container">
      <p>{props.data.name}</p>
      {console.log(props.data)}
      {props.data.weather.map(item => (
        <p>{item}</p>
      ))}
    </div>
  );
};

class Forecast extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data3: 0,
      data: 0
    };
  }

  componentDidMount() {
    const location = this.props.location.state.location;
    const currentURL = currentAPIFront + location + currentAPIBack;
    const futureURL = futureAPIFront + location + futureAPIBack;

    fetch(futureURL)
      .then(response => response.json())
      .then(data => this.setState({ data3: data, loading: false }));

    fetch(currentURL)
      .then(response => response.json())
      .then(data => this.setState({ data: data }));
  }

  render() {
    return (
      <div>
        <Nav />
        {this.state.loading === true ? (
          <p>Loading</p>
        ) : (
          <UserInterface data3={this.state.data3} data={this.state.data} />
        )}
      </div>
    );
  }
}

export default Forecast;
