import * as React from 'react';
import Header from './components/header';
import Footer from './components/footer';
// 主页
import Home from './page/home/App';
// 联系我们
import ContactUs from './page/contactUs/App';
import { BrowserRouter as Router, Route } from 'react-router-dom';

const About = () => (
    <div>
        <h2>About</h2>
    </div>
);

const BasicExample = () => (
    <Router>
        <div>
            <Header/>
                <Route exact={true} path="/" component={Home} />
                <Route path="/about" component={About} />
                <Route path="/product" component={About} />
                <Route path="/news" component={About} />
                <Route path="/contactUs" component={ContactUs} />
                
            <Footer/>
        </div>
    </Router>
);

export default BasicExample;