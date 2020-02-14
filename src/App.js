import React from "react";
import { Button } from "react-bootstrap";
import { Switch, Route } from "react-router";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Nav from "./navbar";
import List from "./list";
import Home from "./home";

const MainApp = () => {
  return (
    <Router>
      <div>
        <Nav />
        <div className="body">
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/home" component={Home} />
            <Route path="/list" component={List} />
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default MainApp;
