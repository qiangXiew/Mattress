import * as React from 'react';
import './App.less';
import { Col, Row, Tabs } from 'antd';
import * as moment from 'moment';
import WebApi from '../../../../lib/webApi';
const TabPane = Tabs.TabPane;

class App extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      date: '我的标题',
      tabId: 1,
      newsdata: [],
      total: 0,
      topNews: {}
    };
    this.callback = this.callback.bind(this);
    this.mouseleave = this.mouseleave.bind(this);
  }

  componentDidMount() {
    this.newsRes();
  }

  callback(key: string) {
    console.log(this);
    this.setState({
      tabId: key,
      newsId: null
    });
  }

  async newsRes() {
    let parth = {
      tabId: this.state.tabId
    };
    let res = await WebApi.enroll.news(parth);
    this.setState({
      newsdata: res.data.data,
      total: res.data.data.length
    });
    console.log(this.state);
    // 置顶新闻
    this.state.newsdata.map((el: any, index: number) => {
      if (this.state.newsdata[index].topTime) {
        this.setState({
          topNews: this.state.newsdata[index]
        });
      }
    });
  } 

  mouseover(index: number) {
    return this.state.newsId === index ? 'index-new-list active' : 'index-new-list';
  }
  mouseleave() {
    this.setState({
      newsId: null
    });
  }

  render() {
    const newsData = this.state.newsdata.slice(0, 3);
    let newsList = newsData.map((el: any, index: number) => {
      return (
        <div className={this.mouseover(index)} key={index} onMouseOver={() => this.setState({newsId: index})} onMouseLeave={this.mouseleave}>
          <p className="time"><em>{moment(newsData[index].createTime).format('YYYY-MM-DD').substring(8, 10)}</em><br/>{moment(newsData[index].createTime).format('YYYY-MM-DD').substring(0, 7)}</p>
          <div className="txt"><i>{newsData[index].title}</i><p>{newsData[index].details}</p></div>
        </div>
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
            <p>{this.state.topNews.details}</p>
            <p><a href="#">查看详情></a></p>
          </div>
        </Col>
        <Col span={12}>
          <Tabs defaultActiveKey="1" onChange={this.callback}>
            <TabPane tab="公司新闻" key="1">
              {newsList}
            </TabPane>
            <TabPane tab="健康睡眠" key="2">
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
