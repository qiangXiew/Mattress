import * as React from 'react';
import './App.less';
import { Col, Row, Tabs } from 'antd';
import * as moment from 'moment';
import { Link } from 'react-router-dom';
import WebApi from './../../../../lib/webApi';
const TabPane = Tabs.TabPane;

class App extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      date: '我的标题',
      tabId: 0,
      newsdata: [],
      total: 0,
      topNews: {}
    };
    this.callback = this.callback.bind(this);
  }

  componentDidMount() {
    this.newsRes(0);
  }

  callback(key: string) {
    this.newsRes(key);
  }

  async newsRes(key: any) {
    let parth = {
      tabId: key
    };
    let res = await WebApi.enroll.news(parth);
    this.setState({
      newsdata: res.data.data,
      total: res.data.data.length
    });
    // 置顶新闻
    this.state.newsdata.map((el: any, index: number) => {
      if (this.state.newsdata[index].topTime) {
        this.setState({
          topNews: this.state.newsdata[index]
        });
      }
    });
  } 

  render() {
    const newsData = this.state.newsdata.slice(0, 3);
    let newsList = newsData.map((el: any, index: number) => {
      var data = newsData[index];
      // data = JSON.stringify(data);
      var path = {
        pathname: '/newscon',
        state: data
      };
      return (
        <Link to={path} key={index}>
          <p className="time"><em>{moment(newsData[index].createTime).format('YYYY-MM-DD').substring(8, 10)}</em><br/>{moment(newsData[index].createTime).format('YYYY-MM-DD').substring(0, 7)}</p>
          <div className="txt"><i>{newsData[index].title}</i><p>{newsData[index].bewrite}</p></div>
        </Link>
      );
    });
    return (
      <div id="tab_news" className="content" >
        <Col span={12}>
          <div>
            <img src={this.state.topNews.imgUrl} alt="" />
          </div>
          <div>
            <h1>{this.state.topNews.title} <span>{moment(this.state.topNews.createTime).format('YYYY-MM-DD')}</span></h1>
            <p>{this.state.topNews.bewrite}</p>
            <p><a href={`/NewsCon/${this.state.topNews.bewrite}`}>查看详情></a></p>
          </div>
        </Col>
        <Col span={12}>
          <Tabs defaultActiveKey="0" onChange={this.callback}>
            <TabPane tab="公司新闻" key="0">
              {newsList}
            </TabPane>
            <TabPane tab="健康睡眠" key="1">
              {newsList}
            </TabPane>
          </Tabs>
        </Col>
        <Row className="fun_bar">
          {/* {rows} */}

        </Row>
      </div >
    );
  }
}
export default App;
