import * as React from 'react';
import { Row, Col } from 'antd';
import './App.less';

class App extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      date: '我的标题',
      tabFeatures: require('./../../../../assets/index/index-pro-point-bg.jpg'), // 产品特点背景图
      tabFeaturesIndex: 0,
      tabFeaturesStatus: false
    };
    this.handleMouseOver = this.handleMouseOver.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
  }
  handleMouseOver(index: number) {
    if (this.state.tabFeaturesStatus === true && this.state.tabFeaturesIndex === index) {
      return require('./../../../../assets/index/index-pro-point-mo-' + (index + 1) + '.jpg');
    }
    return require('./../../../../assets/index/index-pro-point-def-' + (index + 1) + '.jpg');
  }
  handleMouseLeave() {
    this.setState({
      tabFeaturesStatus: false,
      tabFeaturesIndex: 0
    });
  }
  render() {
    return (
      <div id="tab-features">
        <Row className="content">
          <Col className="styl-1" span={16}><a href="/Product/0/1/0"><img src={this.handleMouseOver(0)} alt="" onMouseOver={() => this.setState({tabFeaturesStatus: true, tabFeaturesIndex: 0})} onMouseLeave={this.handleMouseLeave}/></a></Col>
          <Col className="styl-2" span={8}><a href="/Product/0/1/1"><img src={this.handleMouseOver(1)} alt="" onMouseOver={() => this.setState({tabFeaturesStatus: true, tabFeaturesIndex: 1})} onMouseLeave={this.handleMouseLeave}/></a></Col>
        </Row>
        <Row className="content">
          <Col className="styl-3" span={8}><a href="/Product/0/1/2"><img src={this.handleMouseOver(2)} alt="" onMouseOver={() => this.setState({tabFeaturesStatus: true, tabFeaturesIndex: 2})} onMouseLeave={this.handleMouseLeave}/></a></Col>
          <Col className="styl-4" span={8}><a href="/Product/0/1/3"><img src={this.handleMouseOver(3)} alt="" onMouseOver={() => this.setState({tabFeaturesStatus: true, tabFeaturesIndex: 3})} onMouseLeave={this.handleMouseLeave}/></a></Col>
          <Col className="styl-5" span={8}><a href="/Product/0/1/4"><img src={this.handleMouseOver(4)} alt="" onMouseOver={() => this.setState({tabFeaturesStatus: true, tabFeaturesIndex: 4})} onMouseLeave={this.handleMouseLeave}/></a></Col>
        </Row>
        <Row className="row-styl-6">
          <Col className="styl-6" span={24}><img src={this.state.tabFeatures} alt=""/></Col>
        </Row>
      </div >
    );
  }
}
export default App;
