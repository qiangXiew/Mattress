import * as React from 'react';
import './App.less';
import { Col, Row } from 'antd';
import WebApi from '../../../../lib/webApi';
const tabNewsImg = require('../../../../assets/index/index-news.jpg');

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
          1
        </Col>
        <Row className="fun_bar">
          {/* {rows} */}

        </Row>
      </div >
    );
  }
}
export default App;
