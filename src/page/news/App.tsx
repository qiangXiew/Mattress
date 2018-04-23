import * as React from 'react';
import './news.less';
import { Tabs , Pagination } from 'antd';
import { Link } from 'react-router-dom';
import * as moment from 'moment';
import webAPI from '../../lib/webApi';
const TabPane = Tabs.TabPane;
const banner = require('../../assets/news/news-banner.jpg');

class News extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {newsdata: [], tabId: 0, total: 0};
    this.callback = this.callback.bind(this);
  }
  callback(key: string) {
    this.newsRes(key);
  }

  async newsRes(key: any) {
    let parth = {
      tabId: key
    };
    let res = await webAPI.enroll.news(parth);
    this.setState({
      newsdata: res.data.data,
      total: res.data.data.length
    });
  } 
  
  componentWillMount() {
    document.title = '新闻中心';
    const id = this.props.match.params.id;
    if (id) {
      this.setState({
        tabId: id
      });
      this.newsRes(id);
      return;
    }
    this.newsRes(0);
  }
  render() {
    const con = this.state.newsdata;
    let newsList = con.map((el: any, index: number) => {
      var data = con[index];
      var path = {
        pathname: '/newscon',
        state: data
      };
      return (
        <Link to={path} className="news-list" key={index}>
          <div className="news-list-img"><img src={con[index].imgUrl} alt=""/></div>
          <div className="news-list-txt">
            <h3>{con[index].title}</h3>
            <p>{con[index].bewrite}</p>
            <em>{moment(con[index].createTime).format('YYYY-MM-DD HH:mm:ss')}</em>
          </div>
        </Link>
      );
    });
    return (
      <div className="aboutus">
        <div className="banner">
            <img src={banner} alt=""/>
          </div>
          <div className="aboutusTab">
            <Tabs defaultActiveKey={this.state.tabId} onChange={this.callback}>
              <TabPane tab="公司新闻" key="0">
                {newsList}
                <Pagination defaultCurrent={1} total={this.state.total} />
              </TabPane>
              <TabPane tab="健康睡眠" key="1">
                {newsList}
                <Pagination defaultCurrent={1} total={this.state.total} />
              </TabPane>
            </Tabs>
          </div>
      </div>
    );
  }
}
export default News;
