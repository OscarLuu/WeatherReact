import React, { Component } from "react";
import Main from "./components/Main";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Forecast from "./components/Forecast";
import "./index.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Main} />
          <Route path="/forecast" component={Forecast} />
        </div>
      </Router>
    );
  }
}

export default App;
