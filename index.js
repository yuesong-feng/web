import React from "react";
import ReactDOM from "react-dom";
import Header from "./layouts/header";
import Laside from "./layouts/laside.js";
import Raside from "./layouts/raside.js";
import Main from "./layouts/main.js";
import About from "./layouts/about";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
ReactDOM.render(
  <div className="page">
    <Router>
      <Header />
      <div className="wrapper">
        <Laside />
        <Switch>
          <Route exact path="/">
            <Main />
          </Route>
          <Route path="/about">
            <About />
          </Route>
        </Switch>
        <Raside />
      </div>
    </Router>
  </div>,
  document.getElementById("root")
);
