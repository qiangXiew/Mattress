import * as React from 'react';
import './App.less';
import { Col, Row, Tabs } from 'antd';
import * as moment from 'moment';
import WebApi from '../../../../lib/webApi';
const TabPane = Tabs.TabPane;
const tabNewsImg = require('../../../../assets/index/index-news.jpg');

class App extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      date: '我的标题',
      tabId: 1,
      newsdata: [],
      total: 0
    };
    this.callback = this.callback.bind(this);
  }

  componentDidMount() {
    this.newsRes();
  }

  callback(key: string) {
    console.log(this);
    this.setState({
      tabId: key,
      newsId: 0
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
  } 

  mouseover(index: number) {
    return this.state.newsId === index ? 'index-new-list active' : 'index-new-list';
  }

  render() {
    const newsData = this.state.newsdata.slice(0, 3);
    let newsList = newsData.map((el: any, index: number) => {
      return (
        <div className={this.mouseover(index)} key={index} onMouseOver={() => this.setState({newsId: index})}>
          <p className="time"><em>{moment(newsData[index].createTime).format('YYYY-MM-DD').substring(8, 10)}</em><br/>{moment(newsData[index].createTime).format('YYYY-MM-DD').substring(0, 7)}</p>
          <div className="txt"><i>{newsData[index].title}</i><p>{newsData[index].details}</p></div>
        </div>
      );
    });
    return (
      <div id="tab_news" className="content" >
        <Col span={12}>
          <div>
            <img src={tabNewsImg} alt="" />
          </div>
          <div>
            <h1>共赢未来 | 2017 威尔斯利普加盟商年中会议盛大开幕 <span>2017-08-22</span></h1>
            <p>8月17日，2017威尔斯利普加盟商年中会议在上海隆重开幕。希丁安集团凭借旗下斯林百兰、BICO瑞柯等品牌，三十余年来致力深耕中国</p>
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
