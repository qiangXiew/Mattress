import * as React from 'react';
import './news.less';
import { Tabs , Pagination } from 'antd';
import { Link } from 'react-router-dom';
import * as moment from 'moment';
import webAPI from '../../lib/webApi';
const TabPane = Tabs.TabPane;
const banner = require('../../assets/news/news-banner.jpg');

// function callback(key: string) {
//   console.log(key);
// }

class News extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {newsdata: [], tabId: 0, total: 0};
    this.callback = this.callback.bind(this);
  }
  componentDidMount () {
    this.newsRes();
  }
  callback(key: string) {
    console.log(this);
    this.setState({
      tabId: key
    });
  }

  async newsRes() {
    let parth = {
      tabId: this.state.tabId
    };
    let res = await webAPI.enroll.news(parth);
    console.log(res.data.data);
    this.setState({
      newsdata: res.data.data,
      total: res.data.data.length
    });
    console.log(this.state);
  } 
  
  componentWillMount() {
    document.title = '新闻中心';
    const id = this.props.match.params.id;
    if (id) {
      this.setState({
        tabId: id
      });
    }
  }
  render() {
    const con = this.state.newsdata;
    let newsList = con.map((el: any, index: number) => {
      var data = con[index];
      // data = JSON.stringify(data);
      // var path = {`/NewsCon/${data}`};
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
              <TabPane tab="公司新闻" key="1">
                {newsList}
                <Pagination defaultCurrent={1} total={this.state.total} />
              </TabPane>
              <TabPane tab="健康睡眠" key="2">
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
