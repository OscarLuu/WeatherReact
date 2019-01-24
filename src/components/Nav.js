import React, { Component } from "react";

const Nav = () => {
  return (
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
  );
};

export default Nav;
