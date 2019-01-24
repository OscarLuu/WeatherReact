import React, { Component } from "react";
import Main from "./components/Main";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Forecast from "./components/Forecast";
import "./index.css";

class App extends Component {
  render() {
    return (
      <Router>
        <Route exact path="/" component={Main} />
        <Route path="/forecast" component={Forecast} />
      </Router>
    );
  }
}

export default App;
