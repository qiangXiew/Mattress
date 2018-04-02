import * as React from 'react';
import { Col, Tabs } from 'antd';
import './App.less';
const TabPane = Tabs.TabPane;

function callback(key: string) {
  console.log(key);
}

class App extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      tabVal: 'a',
      add: '123'
    };
  }

  callBack = (value: any) => {
    const tabVal = value.target.value;
    this.setState({ tabVal });
    console.log(this.state.tabVal);
  }
  render() {
    return (
      <div id="contactUs">
        <Col span={24} >
          <div className="images" />
        </Col>
        <div className="content">
          <Col className="mix-pd" span={24} >
            <Tabs defaultActiveKey="1" onChange={callback}>
              <TabPane tab="联系方式" key="1"><h2>联系方式</h2><p>威尔斯利普养生床垫为您营造良好睡眠环境<br/><br/>古语有云：“药补不如食补，食补不如觉补。”睡觉可谓是一种非常重要的养生之法。睡眠是生命的补给站，高质量的睡眠可以帮助人们恢复体力和脑力，消除疲劳，完成自身修复，令人身心舒爽；而睡眠不足或低质量的睡眠会对身体机能造成诸多损害，比如思考能力减退、警觉性与判断力下降、免疫功能低下、内分泌紊乱等。<br/><br/>因此，人们必须意识到睡眠对于健康养生的重要意义。想要创造良好的睡眠环境，床垫可谓是至关重要的一环。一款好的床垫可以让人全身心的放松，缓解疲劳，释放压力，保证高质量的睡眠。<br/><br/>威尔斯利普养生床垫，开创了国内“静磁、远红、负离子、超长波”复合疗法技术的先河，通过使用“静磁物理疗法”，从而增强细胞生命力、改善血液循环，在人体产生微电流后，能够加强内分泌渗透，刺激末梢神经，再辅以玉石加热产生的“远红外线”，与“超长波”引发变焦磁场，形成共振与体内磁场相呼应，促进皮下组织深层部位温度升高，加速生物酶合成，活化生物分子，加速血液循环，清除血管囤积物及体内有害物质，强化免疫系统，增强机体免疫力及生物细胞组织再生能力。<br/><br/>同时，床垫加热产生的负离子能有有效消烟、除尘，改善空气结构（大小颗粒电子，大吸附空气灰尘），改善心、肺功能，增强肌体抗病能力。<br/><br/>正如清代医家李渔所说的，养身之道，应该把睡眠放在首位，因为睡觉可以帮助人们养精蓄锐、强健脾胃、健骨强筋。因此，在如今这个快节奏的生活中，我们更应注重睡眠的作用，让威尔斯利普养生床垫为我们打造出舒适、健康的睡眠环境。<br/><br/></p></TabPane>
              <TabPane tab="合作店铺" key="2"><h2>合作店铺</h2><p>22</p></TabPane>
              <TabPane tab="招聘信息" key="3"><h2>招聘信息</h2><p>33</p></TabPane>
            </Tabs>
          </Col>
        </div>
      </div>
    );
  }
}
export default App;
