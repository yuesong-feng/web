import React from "react";
import Article from "./article.js";

export default class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = { articles: [] };
    fetch(
      "https://service-afkj7z8q-1300477814.gz.apigw.tencentcs.com/release/articles"
    )
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        let fetchArticles = data.map((value, index) => {
          return (
            <Article
              key={index}
              title={value.title}
              author={value.author}
              content={value.content}
            />
          );
        });
        this.setState((state) => ({
          articles: fetchArticles,
        }));
      });
  }
  componentDidMount() {}
  render() {
    return (
      <div className="main">
        <div className="info">
          <h2>古典吉他网</h2>
          <p>
            在所有独奏乐器中，古典吉他是最优秀的，它包含了所有的音乐经验，就像把世界上所有的音乐浓缩在这件精巧的乐器上
            ——安德烈斯·塞戈维亚
          </p>
        </div>

        {this.state.articles}

        <div className="article-nav">
          <button>1</button>
          <button>2</button>
          <button>3</button>
          <button>4</button>
          <button>5</button>
        </div>
      </div>
    );
  }
}
