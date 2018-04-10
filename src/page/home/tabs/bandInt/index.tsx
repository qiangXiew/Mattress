import * as React from 'react';
import { Row, Col } from 'antd';
import './App.less';
const tabBandintImgUrl = require('../../../../assets/index/index-bp-bg.jpg');

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
          <Col className="styl-6" span={24}><img src={tabBandintImgUrl} alt=""/></Col>
        </Row>
      </div >
    );
  }
}
export default App;
