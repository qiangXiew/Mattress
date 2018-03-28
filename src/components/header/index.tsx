import * as React from 'react';
import { Menu, Icon, Col, Row } from 'antd';
import './header.less';

class Header extends React.Component {
    render() {
        return (
            <div id="header">
                <div className="top">
                    <Row type="flex" justify="center">
                        <div className="content">
                            <Col span={12}>
                                <a href="http://www.hong5.com.cn" rel="nofollow">
                                    <img src={require('../../assets/headerLogo.png')} />
                                </a>
                            </Col>
                            <Col className="mobile" span={9} offset={3}><Icon type="phone" />4009-010-388</Col>
                        </div>
                    </Row>
                </div>
                <Row type="flex" justify="center">
                    <Menu className="menu content" theme="light" mode="horizontal" defaultSelectedKeys={['index']} >
                        <Menu.Item key="index"><a href="./">首页</a></Menu.Item>
                        <Menu.Item key="about"><a href="./about">关于我们</a></Menu.Item>
                        <Menu.Item key="product"><a href="./product">产品中心</a></Menu.Item>
                        <Menu.SubMenu key="news" title="新闻中心">
                            <Menu.Item><a href="./news">新闻类1</a></Menu.Item>
                            <Menu.Item><a href="./news">新闻类2</a></Menu.Item>
                        </Menu.SubMenu>
                        <Menu.Item key="contactUs"><a href="./contactUs">联系我们</a></Menu.Item>
                    </Menu>
                </Row>
            </div>
        );
    }
}

export default Header;
