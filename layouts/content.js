import React from "react";

export default class Content extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      author: "",
      content: "",
    };
  }
  componentDidMount() {
    let url = `https://service-afkj7z8q-1300477814.gz.apigw.tencentcs.com/release/content/${this.props.match.params.title}`;
    fetch(url)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        this.setState((state) => ({
          title: data.title,
          author: data.author,
          content: data.content,
        }));
      });
  }
  render() {
    return (
      <div className="main">
        <h3>{this.state.title}</h3>
        <div>{this.state.author}</div>
        <div>{this.state.content}</div>
      </div>
    );
  }
}
