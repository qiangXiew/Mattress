import * as React from 'react';
import { Col, Tabs } from 'antd';
import './App.less';
// import City from './city/App';
import Store from './store/App';
const TabPane = Tabs.TabPane;
const banner = require('../../assets/contactus/contact-banner.jpg');

class App extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      tabId: 1
    };
    this.callback = this.callback.bind(this);
  }

  componentWillMount() {
    const id = this.props.match.params.id;
    if (id) {
      this.setState({
        tabId: id
      });
    }
  }

  callback(key: any) {
    console.log(key);
    this.setState({
      tabId: key
    });
  }

  render() {
    // let city = (Number(this.state.tabId) === 2) ? <City/> : '';
    return (
      <div id="contactUs">
        <Col span={24} >
          <div className="images">
            <img src={banner} alt=""/>
            {/* {city} */}
          </div>
        </Col>
        <div className="content">
          <Col className="mix-pd" span={24} >
            <Tabs defaultActiveKey={this.state.tabId} onChange={this.callback}>
              <TabPane tab="联系方式" key="1"><h2>联系方式</h2><p>联系电话：4000-361-855<br/><br/>企业邮箱：weiersilipu@sina.com</p></TabPane>
              <TabPane tab="合作店铺" key="2"><h2>合作店铺</h2><Store/></TabPane>
              <TabPane tab="招聘信息" key="3"><h2>招聘信息</h2><p>裥棉工：<br/>
人数：2人<br/>
工作描述:进行单针、多针裥棉机的操作及相关工作操作补花机,对跳线部位进行补花<br/>
配合下道工序进行相关辅助性操作<br/>
招聘要求:1、两年以上相关操作经验(设备名称:高速单针裥棉机、恒业高速多针裥棉机)<br/>
2、懂设备原理、能对设备进行维护、修理<br/>
3、男、女不限,体质优良<br/>
4、女18-45岁、男18-50岁,能力突出者可放宽年龄上限,能住厂者优先<br/>
5、有一定的承压能力<br/>
6、能服从领导的工作调度,有团队配合意识<br/><br/>
裁剪工:<br/>
人数:2人<br/>
工作描述:对半成品及原材料进行裁剪下料<br/>
配合上下道工序进行相关辅助性操作<br/>
招聘要求:1、三年以上相关操作经验,沙发厂、软床厂、床垫厂同等工作经验优先<br/>
2、男、女不限,体质优良<br/>
3、女18-45岁、男18-50岁,能力突出者可放宽年龄上限,能住厂者优先<br/>
4、有一定的承压能力<br/>
5、能服从领导的工作调度,有团队配合意识。<br/><br/>
缝纫工：<br/>
人数:4人<br/>
工作描述:对裁剪完成的半成品面料进行缝纫拼接；<br/>
配合上下道工序进行相关辅助性操作。<br/>
招聘要求:1、三年以上相关操作经验(设备种类:平车、五线码边机、多头刺绣机、长臂补花机)沙发厂、软床厂、床垫厂同等工作经验优先<br/>
2、懂设备原理、能对设备进行维护、修理<br/>
3、男、女不限,体质优良<br/>
4、女18-45岁、男18-50岁,能力突出者可放宽年龄上限,能住厂者优先:<br/>
5、有一定的承压能力<br/>
6、能服从领导的工作调度,有团队配合意识。<br/><br/>
预处理工:(打底工、扣布工)<br/>
人数:4人<br/>
工作描述:操作热熔胶电喷机将缝合完成面套固定在基底上；<br/>
操作热熔胶电喷机对床垫零部件的贴合进行预处理。<br/>
配合上下道工序进行相关辅助性操作。<br/>
招聘要求:1、两年以上相关操作经验,沙发厂、软床厂、床垫厂同等工作经验优先<br/>
2、男、女不限,体质优良<br/>
3、女18-40岁、男18-45岁,能力突出者可放宽年龄上限,能住厂者优先;<br/>
4、有一定的承压能力<br/>
5、能服从领导的工作调度,有团队配合意识。<br/><br/>
床垫围边工<br/>
人数：2人<br/>
工作描述：操作围边机对床垫进行围边操作（设备名称Ⅰ手动型围边机，Ⅲ型半自动围边机）<br/>
配合上下道工序进行相关辅助性操作<br/>
招聘要求：1、五年以上相关操作经验，能力突出者可放宽工龄上限<br/>
         2、懂设备原理、能对设备进行维护、修理<br/>
         3、男、女不限，体质优良<br/>
         4、女18-40岁，男18-45岁，能力突出者可放宽年龄上限，能住厂者优先<br/>
         5、有一定的承压能力<br/>
         6、能服从领导的工作调度，有团队配合意识<br/><br/>
包装处理工<br/>
人数：4人<br/>
工作描述：对成品床垫进行套袋、热合封口<br/>
对热合封口后的预包装产品装箱、送入热封机二次封装<br/>
将成品搬运至成品库房<br/>
配合上道工序进行相关辅助性操作<br/>
招聘要求：1、两年以上相关操作经验，沙发厂、软床厂、床垫厂同等工作经验优先<br/>
         2、男、女不限，体质优良<br/>
         3、女18-40岁，男18-45岁，能力突出者可放宽年龄上限，能住厂者优先<br/>
         4、有一定的承压能力<br/>
         5、能服从领导的工作调度，有团队配合意识
</p></TabPane>
            </Tabs>
          </Col>
        </div>
      </div>
    );
  }
}
export default App;
