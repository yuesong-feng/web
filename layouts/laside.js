import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";

export default class Laside extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const linkStyle = { textDecoration:'none', color: '#fff'}
    return (
      <div className="laside">
        <ul>
          <li>
            <Link to="/" style={linkStyle}>主页</Link>
          </li>
          <li>
            <Link to="/about" style={linkStyle}>关于我们</Link>
          </li>
          <li>
            <Link to="/add" style={linkStyle}>添加文章</Link>
          </li>

        </ul>
      </div>
    );
  }
}
