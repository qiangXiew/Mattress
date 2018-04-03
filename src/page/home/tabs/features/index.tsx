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
      <div id="tab-features">
        <Row className="content">
          <Col className="styl-1" span={16}>col-12</Col>
          <Col className="styl-2" span={8}>col-12</Col>
        </Row>
        <Row className="content">
          <Col className="styl-3" span={8}>col-8</Col>
          <Col className="styl-4" span={8}>col-8</Col>
          <Col className="styl-5" span={8}>col-8</Col>
        </Row>
        <Row className="row-styl-6">
          <Col className="styl-6" span={24}>col-6</Col>
        </Row>
      </div >
    );
  }
}
export default App;
