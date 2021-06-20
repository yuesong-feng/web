import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";

export default class Header extends React.Component {
  constructor(props) {
    super(props);
  }
  showLaside() {}
  render() {
    return (
      <div className="header">
        <Link to="/" style={{ textDecoration: "none", color: "#fff" }}>
          <span>古典吉他网</span>
        </Link>
      </div>
    );
  }
}
