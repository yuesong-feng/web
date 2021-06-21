import React from "react";

export default class Add extends React.Component {
  constructor(props) {
    super(props);
    this.addArticle = this.addArticle.bind(this);
  }
  addArticle() {
    fetch(
      "https://service-afkj7z8q-1300477814.gz.apigw.tencentcs.com/release/add",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: "添加文章测试",
          author: "yuesong-feng",
          content: "this is the content",
        }),
      }
    )
      .then((response) => console.log(response))
  }
  render() {
    return (
      <div className="main">
        <h3>add article</h3>
        <button onClick={this.addArticle}>add</button>
      </div>
    );
  }
}
