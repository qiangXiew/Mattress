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
                            <Col span={15}>
                                <a href="http://www.hong5.com.cn" rel="nofollow">
                                    <img src={require('./../../assets/headerLogo.png')} />
                                </a>
                            </Col>
                            <Col className="mobile" span={6} offset={3}><Icon type="phone" />4000-361-855</Col>
                        </div>
                    </Row>
                </div>
                <Row type="flex" justify="center">
                    <Menu className="menu content" theme="light" mode="horizontal" defaultSelectedKeys={[window.location.pathname]} >
                        <Menu.Item key="/"><Link to="/">首页</Link></Menu.Item>
                        <Menu.SubMenu key="/about" title={<a href="/about/1">关于我们</a>}>
                            <Menu.Item><a href="/about/1">品牌简介</a></Menu.Item>
                            <Menu.Item><a href="/about/2">大事记</a></Menu.Item>
                            <Menu.Item><a href="/about/3">企业文化</a></Menu.Item>
                            <Menu.Item><a href="/about/4">产品代言</a></Menu.Item>
                            <Menu.Item><a href="/about/5">唯一合作商</a></Menu.Item>
                        </Menu.SubMenu>
                        <Menu.SubMenu key="/product" title={<a href="/Product/0/0/0">产品中心</a>}>
                            <Menu.Item><a href="/Product/0/0/0">亚磁热疗养生床垫</a></Menu.Item>
                            <Menu.Item><a href="/Product/1/0/0">3D气压全位按摩椅</a></Menu.Item>
                        </Menu.SubMenu>
                        <Menu.SubMenu key="/news" title={<a href="/news/0">新闻中心</a>}>
                            <Menu.Item><a href="/news/0">公司新闻</a></Menu.Item>
                            <Menu.Item><a href="/news/1">健康睡眠</a></Menu.Item>
                        </Menu.SubMenu>
                        <Menu.SubMenu key="/contactUs" title={<a href="/contactUs/1">联系我们</a>}>
                            <Menu.Item><a href="/contactUs/1">联系方式</a></Menu.Item>
                            <Menu.Item><a href="/contactUs/2">合作店铺</a></Menu.Item>
                            <Menu.Item><a href="/contactUs/3">招聘信息</a></Menu.Item>
                        </Menu.SubMenu>
                    </Menu>
                </Row>
            </div>
        );
    }
}

export default Header;
