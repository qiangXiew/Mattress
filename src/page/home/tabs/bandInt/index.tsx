import * as React from 'react';
import { Row, Col } from 'antd';
import './App.less';

class App extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      date: '我的标题'
    };
  }
  render() {
    return (
      <div id="tab-bandint">
        <Row className="row-styl-6">
          <Col className="styl-6" span={24}>
            <h2>品牌介绍</h2>
            <p className="txt">威尔斯利普，它创造了一种健康睡眠生态系统的生活方式，它代表着一种多功能寝具的养生理念，它更代表着一种积极主动的保健态度，同时也有效保障6小时睡眠的舒适与健康，360°的呵护，打造健康睡眠系统的传奇!</p>
            <p className="button"><a href="/about/1">查看更多</a></p>
          </Col>
        </Row>
      </div >
    );
  }
}
export default App;
