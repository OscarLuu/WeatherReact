import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className="title">
      <p className="TitleLink">
        <Link style={{ textDecoration: "none" }} to="/">
          Weather Application
        </Link>
      </p>
      <form className="right">
        <span>
          <input
            type="text"
            placeholder="Sunnyvale, California"
            className="input-text-row"
          />
          <button type="submit" className="button-top">
            Get Weather
          </button>
        </span>
      </form>
    </div>
  );
};

export default Nav;
