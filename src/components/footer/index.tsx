import * as React from 'react';
import { Row, Col } from 'antd';
import './footer.less';

class Footer extends React.Component {
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
          <Col className="fMenu active" xs={24} sm={24} md={4}>
            <Row><h1>关于我们</h1><i>ABOUT US</i></Row>
            <Row>大事记</Row>
            <Row>企业文化</Row>
            <Row>产品代言</Row>
            <Row>唯一合作商</Row>
          </Col>
          <Col className="fMenu" xs={24} sm={24} md={4}>
            <Row><h1>产品中心</h1><i>Product Center</i></Row>
            <Row>亚磁热疗养生床垫</Row>
            <Row>3D气压全位按摩椅</Row>
          </Col>
          <Col className="fMenu" xs={24} sm={24} md={4}>
            <Row><h1>新闻中心</h1><i>Product Center</i></Row>
            <Row>公司新闻</Row>
            <Row>健康提醒</Row>
          </Col>
          <Col className="fMenu" xs={24} sm={24} md={4}>
            <Row><h1>联系我们</h1><i>Contact us</i></Row>
            <Row>联系方式</Row>
            <Row>合作店铺</Row>
            <Row>招聘信息</Row>
          </Col>

          {/* <Row className="footerDown">Copyright © 2016 红舞联盟 版权所有 京ICP备15050543-1</Row> */}
        </div>
      </div>
    );
  }
}
export default Footer;
