import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";

export default class Laside extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="laside">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </div>
    );
  }
}
