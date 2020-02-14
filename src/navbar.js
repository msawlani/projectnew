import React from "react";
import "./App.css";
import { Link } from "react-router-dom";

const nav = () => {
  const navStyle = {
    color: "white"
  };

  return (
    <nav>
      <h3>Project New</h3>
      <ul className="links">
        <Link style={navStyle} to="/">
          <li>Home</li>
        </Link>
        <Link style={navStyle} to="/djtutorials">
          <li>DJ Tutorials</li>
        </Link>
        <Link style={navStyle} to="/list">
          <li>List</li>
        </Link>
      </ul>
    </nav>
  );
};

export default nav;
