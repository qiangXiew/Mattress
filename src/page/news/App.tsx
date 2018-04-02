import * as React from 'react';
import './news.less';
import { Tabs , Pagination } from 'antd';
const TabPane = Tabs.TabPane;
// const bannerUrl = require('../../assets/headerLogo.png');

function callback(key: string) {
  console.log(key);
}

class News extends React.Component {
  render() {
    return (
      <div className="aboutus">
        <div className="banner">
            <img src="" alt=""/>
          </div>
          <div className="aboutusTab">
            <Tabs defaultActiveKey="1" onChange={callback}>
              <TabPane tab="公司新闻" key="1">
                <div className="news-list">
                  <div className="news-list-img"><img src="" alt=""/></div>
                  <div className="news-list-txt">
                    <h3>睡眠不足会变傻！如果你有这6个症状，赶紧躺下睡觉</h3>
                    <p>新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容。</p>
                    <em>2018-03-19</em>
                  </div>
                </div>
                <Pagination defaultCurrent={1} total={1} />
              </TabPane>
              <TabPane tab="健康睡眠" key="2">
                <div className="news-list">
                  <div className="news-list-img"><img src="" alt=""/></div>
                  <div className="news-list-txt">
                    <h3>睡眠不足会变傻！如果你有这6个症状，赶紧躺下睡觉</h3>
                    <p>新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容。</p>
                    <em>2018-03-19</em>
                  </div>
                </div>
                <Pagination defaultCurrent={1} total={1} />
              </TabPane>
            </Tabs>
          </div>
      </div>
    );
  }
}
export default News;
