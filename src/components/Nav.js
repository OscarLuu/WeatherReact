import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className="top">
      <h2>
        <Link style={{ textDecoration: "none" }} to="/">
          Weather Application
        </Link>
      </h2>
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
  );
};

export default Nav;
