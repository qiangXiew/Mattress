import * as React from 'react';
import { Row, Col } from 'antd';
import './App.less';
// const tabFeatures = {
//   // tabFeatures 特点1
//   'styl-1': require('../../../../assets/index/index-pro-point-def-1.jpg'),
//   // tabFeatures 特点2
//   'styl-2': require('../../../../assets/index/index-pro-point-def-2.jpg'),
//   // tabFeatures 特点3
//   'styl-3': require('../../../../assets/index/index-pro-point-def-3.jpg'),
//   // tabFeatures 特点4
//   'styl-4': require('../../../../assets/index/index-pro-point-def-4.jpg'),
//   // tabFeatures 特点5
//   'styl-5': require('../../../../assets/index/index-pro-point-def-5.jpg'),
//   // tabFeatures 背景图
//   'styl-6': require('../../../../assets/index/index-pro-point-bg.jpg')
// };

class App extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      date: '我的标题',
      tabFeatures: require('../../../../assets/index/index-pro-point-bg.jpg'), // 产品特点背景图
      tabFeaturesIndex: 0,
      tabFeaturesStatus: false
    };
    this.handleMouseOver = this.handleMouseOver.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
  }
  handleMouseOver(index: number) {
    if (this.state.tabFeaturesStatus === true && this.state.tabFeaturesIndex === index) {
      return require('../../../../assets/index/index-pro-point-mo-' + (index + 1) + '.jpg');
    }
    return require('../../../../assets/index/index-pro-point-def-' + (index + 1) + '.jpg');
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
          <Col className="styl-1" span={16}><img src={this.handleMouseOver(0)} alt="" onMouseOver={() => this.setState({tabFeaturesStatus: true, tabFeaturesIndex: 0})} onMouseLeave={this.handleMouseLeave}/></Col>
          <Col className="styl-2" span={8}><img src={this.handleMouseOver(1)} alt="" onMouseOver={() => this.setState({tabFeaturesStatus: true, tabFeaturesIndex: 1})} onMouseLeave={this.handleMouseLeave}/></Col>
        </Row>
        <Row className="content">
          <Col className="styl-3" span={8}><img src={this.handleMouseOver(2)} alt="" onMouseOver={() => this.setState({tabFeaturesStatus: true, tabFeaturesIndex: 2})} onMouseLeave={this.handleMouseLeave}/></Col>
          <Col className="styl-4" span={8}><img src={this.handleMouseOver(3)} alt="" onMouseOver={() => this.setState({tabFeaturesStatus: true, tabFeaturesIndex: 3})} onMouseLeave={this.handleMouseLeave}/></Col>
          <Col className="styl-5" span={8}><img src={this.handleMouseOver(4)} alt="" onMouseOver={() => this.setState({tabFeaturesStatus: true, tabFeaturesIndex: 4})} onMouseLeave={this.handleMouseLeave}/></Col>
        </Row>
        <Row className="row-styl-6">
          <Col className="styl-6" span={24}><img src={this.state.tabFeatures} alt=""/></Col>
        </Row>
      </div >
    );
  }
}
export default App;
