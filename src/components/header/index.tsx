import * as React from 'react';
import { Menu, Icon, Col } from 'antd';
import './header.less';

class Header extends React.Component {
    render() {
        return (
            <div id="header">
                <div className="top">
                    <div className="content">
                        <Col span={12}>
                            <a href="http://www.hong5.com.cn" rel="nofollow">
                                <img src={require('../../assets/headerLogo.png')} />
                            </a>
                        </Col>
                        <Col className="mobile" span={9} offset={3}><Icon type="phone" />4009-010-388</Col>
                    </div>
                </div>

                {/* <Row type="flex" justify="center"> */}
                <Menu className="menu content" theme="light" mode="horizontal" defaultSelectedKeys={['index']} >
                    <Menu.Item key="index">首页</Menu.Item>
                    <Menu.Item key="about">关于我们</Menu.Item>
                    <Menu.Item key="product">产品中心</Menu.Item>
                    <Menu.SubMenu key="news" title="新闻中心">
                        <Menu.Item>新闻类1</Menu.Item>
                        <Menu.Item>新闻类2</Menu.Item>
                    </Menu.SubMenu>
                    <Menu.Item key="contactUs">联系我们</Menu.Item>
                </Menu>
                {/* </Row> */}
            </div>
        );
    }
}

export default Header;
