import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";

export default class Article extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="article">
        <div className="article-img"></div>
        <Link to="/about" style={{ textDecoration:'none', color: '#fff'}}>
          <h3>{this.props.title}</h3>
        </Link>

        <span>{this.props.author}</span>
        <span>{this.props.content}</span>
      </div>
    );
  }
}
