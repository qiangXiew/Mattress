import * as React from 'react';
import { BackTop, Icon } from 'antd';
import Header from './components/header';
import Footer from './components/footer';
import './index.less';
// 主页
import Home from './page/home/App';
// 关于我们
import About from './page/aboutus/App';
// 产品中心
import Product from './page/product/App';
// 新闻中心
import News from './page/news/App';
// 联系我们
import ContactUs from './page/contactUs/App';
import { BrowserRouter as Router, Route } from 'react-router-dom';

const BasicExample = () => (
    <Router>
        <div>
            <Header />
            <Route exact={true} path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/product" component={Product} />
            <Route path="/news" component={News} />
            <Route path="/contactUs" component={ContactUs} />

            <Footer />
            <div id="backTop">
                <span><Icon type="phone" /></span>
                <span><Icon type="wechat" /></span>
                <span><Icon type="qq" /></span>
                <span><Icon type="weibo" /></span>
                <span><Icon type="message" /></span>
                <BackTop />
            </div>
        </div>
    </Router>
);

export default BasicExample;