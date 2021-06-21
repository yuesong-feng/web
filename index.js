import React from "react";
import ReactDOM from "react-dom";
import Header from "./layouts/header";
import Laside from "./layouts/laside.js";
import Raside from "./layouts/raside.js";
import Main from "./layouts/main.js";
import About from "./layouts/about";
import Content from "./layouts/content";
import Add from './layouts/add'

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
ReactDOM.render(
  <div className="page">
    <Router>
      <Header />
      <div className="wrapper">
        <Laside />
        <Switch>
          <Route exact path="/" component={Main} />
          <Route path="/about" component={About} />
          <Route path="/content/:title" component={Content} />
          <Route path="/add" component={Add} />
        </Switch>
        <Raside />
      </div>
    </Router>
  </div>,
  document.getElementById("root")
);
