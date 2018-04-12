import * as React from 'react';
import './App.less';
import { Col, Row, Tabs } from 'antd';
import WebApi from '../../../../lib/webApi';
const TabPane = Tabs.TabPane;
const tabNewsImg = require('../../../../assets/index/index-news.jpg');

function callback(key: string) {
  console.log(key);
}

class App extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      date: '我的标题'
    };
  }

  componentDidMount() {
    this.getres();
  }
  async getres() {
    let params = {
      tabId: '0',
    };
    let resas = await WebApi.enroll.news(params);

    console.log(resas);
  }
  render() {
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
          <Tabs defaultActiveKey="1" onChange={callback}>
            <TabPane tab="公司新闻" key="1">
              <div className="index-new-list">
                <p className="time"><em>22</em><br/>2018-3</p>
                <div className="txt"><i>共赢未来丨2017 威尔斯利普加盟商年中会议盛大开幕盟商年中会议盛大开幕</i><p>8月17日，2017威尔斯利普加盟商年中会议在上海隆重开幕。希丁安集团凭借旗下斯林百兰、BICO瑞柯等品牌，三十余年来致力深耕中国8月17日，2017威尔斯利普加盟商年中会议在上海隆重开幕。希丁安集团凭借旗下斯林百兰、BICO瑞柯等品牌，三十余年来致力深耕中国</p></div>
              </div>
            </TabPane>
            <TabPane tab="健康睡眠" key="2">
              <div className="index-new-list">
                <p className="time"><em>22</em><br/>2018-3</p>
                <div className="txt"><i>共赢未来丨2017 威尔斯利普加盟商年中会议盛大开幕盟商年中会议盛大开幕</i><p>8月17日，2017威尔斯利普加盟商年中会议在上海隆重开幕。希丁安集团凭借旗下斯林百兰、BICO瑞柯等品牌，三十余年来致力深耕中国8月17日，2017威尔斯利普加盟商年中会议在上海隆重开幕。希丁安集团凭借旗下斯林百兰、BICO瑞柯等品牌，三十余年来致力深耕中国</p></div>
              </div>
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
