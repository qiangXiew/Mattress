import * as React from 'react';
import { Menu, Icon, Col, Row } from 'antd';
import { Link } from 'react-router-dom';
import './header.less';

class Header extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            defalutkeys: '/'
        };
    }
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
                    <Menu className="menu content" theme="light" mode="horizontal" defaultSelectedKeys={[window.location.pathname]} >
                        <Menu.Item key="/"><Link to="/">首页</Link></Menu.Item>
                        <Menu.Item key="/about"><Link to="/about/1">关于我们</Link></Menu.Item>
                        <Menu.Item key="/product"><Link to="/product/0">产品中心</Link></Menu.Item>
                        <Menu.SubMenu key="/news" title="新闻中心">
                            <Menu.Item><a href="/news/1">新闻类1</a></Menu.Item>
                            <Menu.Item><a href="/news/2">新闻类2</a></Menu.Item>
                        </Menu.SubMenu>
                        <Menu.Item key="/contactUs"><Link to="/contactUs">联系我们</Link></Menu.Item>
                    </Menu>
                </Row>
            </div>
        );
    }
}

export default Header;
