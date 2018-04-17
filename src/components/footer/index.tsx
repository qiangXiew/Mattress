import * as React from 'react';
import { Row, Col } from 'antd';
import './footer.less';

class Footer extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      tabId: null
    },
    this.mouseleave = this.mouseleave.bind(this);
  }
  mouseover(index: any) {
    return this.state.tabId === index ? 'fMenu active' : 'fMenu';
  }
  mouseleave() {
    this.setState({
      tabId: null
    });
  }
  render() {
    return (
      <div id="footer">
        <div className="content">
          <Col md={8}>
            <Col span={5}><img className="foodPadding" src={require('../../assets/logo.png')} /></Col>
            <Col className="left txt" span={24}> 北京市朝阳区驼房营新华科技大厦14层 400-0361855</Col>
            <div>
              <Col span={6}><img src={require('../../assets/DC.png')} alt="" /></Col>
              <Col className="left wx_gz" span={8} offset={1}>
                <p>接入微信公众号</p>
                <p>随时关注最新消息</p>
              </Col>
            </div>
          </Col>
          <Col className={this.mouseover(0)} xs={24} sm={24} md={4} onMouseOver={() => {this.setState({tabId: 0}); }} onMouseLeave={this.mouseleave}>
            <Row><h1>关于我们</h1><i>ABOUT US</i></Row>
            <Row><a href="/about/1">品牌简介</a></Row>
            <Row><a href="/about/2">大事记</a></Row>
            <Row><a href="/about/3">企业文化</a></Row>
            <Row><a href="/about/4">产品代言</a></Row>
            <Row><a href="/about/5">唯一合作商</a></Row>
          </Col>
          <Col className={this.mouseover(1)} xs={24} sm={24} md={4} onMouseOver={() => {this.setState({tabId: 1}); }} onMouseLeave={this.mouseleave}>
            <Row><h1>产品中心</h1><i>Product Center</i></Row>
            <Row><a href="/Product/0/0/0">亚磁热疗养生床垫</a></Row>
            <Row><a href="/Product/1/0/0">3D气压全位按摩椅</a></Row>
          </Col>
          <Col className={this.mouseover(2)} xs={24} sm={24} md={4} onMouseOver={() => {this.setState({tabId: 2}); }} onMouseLeave={this.mouseleave}>
            <Row><h1>新闻中心</h1><i>Product Center</i></Row>
            <Row><a href="/news/1">公司新闻</a></Row>
            <Row><a href="/news/2">健康提醒</a></Row>
          </Col>
          <Col className={this.mouseover(3)} xs={24} sm={24} md={4} onMouseOver={() => {this.setState({tabId: 3}); }} onMouseLeave={this.mouseleave}>
            <Row><h1>联系我们</h1><i>Contact us</i></Row>
            <Row><a href="/contactUs/1">联系方式</a></Row>
            <Row><a href="/contactUs/2">合作店铺</a></Row>
            <Row><a href="/contactUs/3">招聘信息</a></Row>
          </Col>
        </div>
        <Col md={24} className="copyright">Copyright © 2016 红舞联盟 版权所有 京ICP备15050543-1</Col>
      </div>
    );
  }
}
export default Footer;
