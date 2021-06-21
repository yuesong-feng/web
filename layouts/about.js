import React from "react";

export default class Main extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="main">
        <div>本网站致力于推广古典吉他、分享古典吉他资源。网站内所有资源均来自于国内外网络现有资源的收集、整理。</div>
        <div>如果您喜欢本网站，请随意赞助。您的赞助将用于：</div>
        <ul>
        <li>支持鼓励作者的资源收集、网站开发工作 购买建设网站需要的云服务器</li>
        <li>购买网络带宽和CDN加速服务，使网站访问速度更快</li>
        <li>购买其他一系列开发网站所需要的资源</li>
        </ul>
        <div>本网站只发布古典吉他相关信息，民谣、指弹等其他所有形式的吉他艺术均不接受（弗拉门戈吉他除外）</div>
        <div>赞助、投稿、合作欢迎联系：15828515798</div>
        <div>若有侵权行为，请第一时间联系我们，我们将迅速处理</div>
      </div>
    );
  }
}
