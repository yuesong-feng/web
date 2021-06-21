import React from "react";

export default class Add extends React.Component {
  constructor(props) {
    super(props);
    this.addArticle = this.addArticle.bind(this)
  }
  addArticle(){
    console.log('add');
    
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
