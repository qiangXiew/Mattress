import * as React from 'react';
import './aboutus.less';
import { Tabs } from 'antd';
const TabPane = Tabs.TabPane;
// const bannerUrl = require('../../assets/headerLogo.png');

function callback(key: string) {
  console.log(key);
}

class Aboutus extends React.Component {
  render() {
    return (
      <div className="aboutus">
          <div className="banner">
            <img src="" alt=""/>
          </div>
          <div className="aboutusTab">
            <Tabs defaultActiveKey="1" onChange={callback}>
              <TabPane tab="品牌简介" key="1"><h2>品牌简介</h2><p>11</p></TabPane>
              <TabPane tab="大事记" key="2"><h2>大事记</h2><p>22</p></TabPane>
              <TabPane tab="企业文化" key="3"><h2>企业文化</h2><p>33</p></TabPane>
              <TabPane tab="产品代言" key="4"><h2>产品代言</h2><p>44</p></TabPane>
              <TabPane tab="唯一合作商" key="5"><h2>唯一合作商</h2><p>55</p></TabPane>
            </Tabs>
          </div>
        </div>
    );
  }
}
export default Aboutus;
