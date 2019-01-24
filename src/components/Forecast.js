import React, { Component } from "react";
import Nav from "./Nav";

const currentAPIFront = "https://api.openweathermap.org/data/2.5/weather?q=";
const currentAPIBack = "&type=accurate&APPID=bc72d750ab71be71217ddaaa52e98d46";
const futureAPIFront = "https://api.openweathermap.org/data/2.5/forecast?q=";
const futureAPIBack = "&type=accurate&APPID=bc72d750ab71be71217ddaaa52e98d46";

const Title = props => {
  return (
    <div>
      <h3>{props.location}</h3>
    </div>
  );
};

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
      .then(data => console.log(data))
      .then(this.setState({ loading: false }));

    fetch(currentURL)
      .then(response => response.json())
      .then(data => console.log(data));
  }

  render() {
    const location = this.props.location.state.location;
    return (
      <div>
        <Nav />
        {this.state.loading == true ? (
          <p>Loading</p>
        ) : (
          <Title location={location} />
        )}
      </div>
    );
  }
}

export default Forecast;
