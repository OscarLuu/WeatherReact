import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const Nav = () => {
  return (
    <div>
      <p>
        <Link style={{ textDecoration: "none" }} to="/">
          Weather Application
        </Link>
      </p>
      <form>
        <input type="text" placeholder="Sunnyvale, California" />
        <button type="submit">Get Weather</button>
      </form>
    </div>
  );
};

export default Nav;
