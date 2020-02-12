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
        <Link style={navStyle} to="/list">
          <li>List</li>
        </Link>
        <Link style={navStyle} to="/home">
          <li>Home</li>
        </Link>
      </ul>
    </nav>
  );
};

export default nav;
