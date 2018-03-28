import * as React from 'react';
import { Tabs } from 'antd';
import './App.less';
const { TabPane } = Tabs;

function callBack(key: string) {
  console.log(key);
}

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Tabs defaultActiveKey="1" onChange={callBack}>
          <TabPane tab="联系方式" key="1" >联系方式  威尔斯利普养生床垫为您营造良好睡眠环境  古语有云：“药补不如食补，食补不如觉补。”睡觉可谓是一种非常重要的养生之</TabPane>
          <TabPane tab="合作店铺" key="2" >合作店铺  威尔斯利普养生床垫为您营造良好睡眠环境  古语有云：“药补不如食补，食补不如觉补。”睡觉可谓是一种非常重要的养生之</TabPane>
          <TabPane tab="招聘信息" key="3" >招聘信息  威尔斯利普养生床垫为您营造良好睡眠环境  古语有云：“药补不如食补，食补不如觉补。”睡觉可谓是一种非常重要的养生之</TabPane>
        </Tabs>
      </div>
    );
  }
}
export default App;
