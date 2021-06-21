import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";

export default class Article extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Link
        to={`/content/${this.props.title}`}
        style={{ textDecoration: "none", color: "#fff" }}
      >
        <div className="article">
          <div className="article-img"></div>
          <h3>{this.props.title}</h3>
          <span>{this.props.author}</span>
          <span>{this.props.content}</span>
        </div>
      </Link>
    );
  }
}
