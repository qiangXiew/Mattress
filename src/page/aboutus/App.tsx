import * as React from 'react';
import './aboutus.less';
import { Tabs } from 'antd';
const TabPane = Tabs.TabPane;
const banner = require('../../assets/aboutUs/aboutus-banner.jpg');

function callback(key: string) {
  console.log(key);
}

class Aboutus extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      defaultActiveKey: '1'
    };
  }
  componentWillMount() {
    document.title = '关于我们';
    console.log(this.props.match.params.id);
    const id = this.props.match.params.id;
    console.log(id);
    if (id) {
      this.setState({
        defaultActiveKey: id
      });
    }
    console.log(this.state.defaultActiveKey);
  }
  render() {
    return (
      <div className="aboutus">
        <div className="banner">
          <img src={banner} alt=""/>
        </div>
        <div className="aboutusTab">
          <Tabs defaultActiveKey={this.state.defaultActiveKey} onChange={callback}>
            <TabPane tab="品牌简介" key="1"><h2>品牌简介</h2><p>人最宝贵的是生命生命中最宝贵的是健康<br/>健康，改变生活<br/>健康<br/>是我们幸福生活的源泉<br/>是我们生命中最宝贵的财富<br/>没有健康一切为零<br/>威尔斯利普，给您科学的健康睡眠<br/>威尔斯利普，健康生活方式领航者<br/><br/>威尔斯利普专注于对中老年人身体健康的永恒需求，以前沿的科学技术为核心，以中老年人的身体需求为导向，致力于解决困扰中老年多种亚健康所引起的慢性疾病以及睡眠中的失眠等多种问题。作为健康领域的功能性寝具研发生产商、磁元素、远红外技术民用化转变等应用科技创领者，威尔斯利普秉承对社会群体健康睡眠的关怀，提供了健康广泛领域的解决方案。以前瞻的思想、创新的技术、深刻的商业理念和诚信的服务积极地支持中国健康产业的发展。威尔斯利普，关爱你我他、健康送到家的服务理念，致力于让科技造福生命。 <br/><br/>威尔斯利普热疗亚磁生态养生床垫的诞生是为了解决中老年人年轻时过度透支的身体所引发的一系列亚健康问题而精心研发的一款由健康绿色材质构成，能够改善人体健康睡眠的产品。产品精选优质原料，将中国传统的中医养生、人体力学与现代磁学科技的应用相结合，细致入微地对待每一个细节，将远红外磁疗功能性寝具产品的特色展现的淋漓尽致，升华人体睡眠质量，彻底改善失眠等症状，致力于提供给您上乘的健康睡眠保障。</p></TabPane>
            <TabPane tab="大事记" key="2"><h2>大事记</h2><p><img src={require('../../assets/aboutUs/dsj.jpg')} alt=""/></p></TabPane>
            <TabPane tab="企业文化" key="3"><h2>威尔斯利普企业文化</h2><p>品牌定位：<br/>中国亚磁热疗养生床垫第一品牌<br/>企业使命：<br/>推动健康事业持续增长、帮助中老年群体健康长寿、为中国的健康事业而努力奋斗！<br/>核心价值观：<br/>以科技为向导、以远红外磁疗为核心、做良心产品、做负责任企业！<br/>经营理念：<br/>幸福你我他、健康送到家！</p></TabPane>
            <TabPane tab="产品代言" key="4"><h2>产品代言</h2><p>我使用我的选择我放心——所以我代言！<br/><br/><img src={require('../../assets/aboutUs/dy-1.png')} alt=""/><br/><br/>威尔斯利普热疗亚磁生态养生床垫是为了解决中老年人年轻时过度透支的身体所引发的一系列亚健康问题而精心研发的一款健康绿色材质，改善人体健康的产品。这是目前市面上唯一一款针对中老年人定向研发的产品，在使用过以后确实对我长期拍戏的身体有了很好的康复疗效，所以我愿意为威尔斯利普品牌做代言。<br/><br/><img src={require('../../assets/aboutUs/dy-2.png')} alt=""/><br/><br/>威尔斯利普品牌所制作的产品是精选优质原材料，将中国传统的中医养生与现代科技相结合，细致入微地对待每一个细节，将功能性家居产品的特色展现的淋漓尽致，升华人体睡眠质量，给您上乘的健康保障。<br/><br/>威尔斯利普热疗亚磁生态养生床垫由5层结构组成，每一层都是精心设计，只为给您一个健康好睡眠！<br/><br/>一、天然玉石层功效<br/><br/><img src={require('../../assets/aboutUs/dy-3.png')} alt=""/><br/><br/>采用产自“中国玉乡”的玉石原片，精选其中细腻、圆润的珍品作为玉石层原材料。玉石层发出的远红外光线与人体细胞发生共鸣吸收，使得人体的微血管扩张，促进酵素的产生，活化身体里的组织细胞。由岫玉原石切片而成，其排列分布可有效对应人体穴位，起到按摩作用。长期按摩可使得各肌理能够能够获得平衡，以达到一个镇静安神、百脉调和、潜阳纳气的作用。<br/><br/>二、裥棉层（亚麻、环保加密棉）功效<br/><br/><img src={require('../../assets/aboutUs/dy-4.png')} alt=""/><br/><br/>采用高含量亚麻针织面料。中国传统医学认为：亚麻是植物的皮层纤维，近似人的皮肤，有保护肌体，调节温度等天然性能。该层采用的针织亚麻，以其特有的斜面孔，调节人体皮肤表层的生态温度环境，能保持皮肤的水分，调血行气，活化细胞，能够有效减轻在静电环境中产生的焦躁不安、呼吸困难。<br/><br/>中层采用拉力强、气孔匀、密度高的环保加密棉，回弹性强，经久耐用；不含PDI化学物质，还保有杀虫抑菌的作用。<br/><br/>三、进口碳纤维远红外模块功效<br/><br/><img src={require('../../assets/aboutUs/dy-5.png')} alt=""/><br/><br/>碳纤维层采用国外先进技术，恒温发热，促进床体表面玉石层释放大量远红外线，确保深入人体内部升温，可达到深层排毒的效果。<br/><br/>四、高密可塑力学支撑体功效<br/><br/><img src={require('../../assets/aboutUs/dy-6.png')} alt=""/><br/><br/>高密可塑力学支撑体为环保产品，采用创新的工艺手法，恰到好处的通透性、减压性、支撑度、服帖性，带来均衡的睡眠温度和睡眠湿度，并减少因伴侣辗转反侧而产生的震动，延长顶级睡眠感受。<br/><br/>五、地球磁力发生模块功效<br/><br/><img src={require('../../assets/aboutUs/dy-7.png')} alt=""/><br/><br/>地磁发生器模拟人体所需的磁场空间，有助于生物抗氧化作用，抑制自由基的产生，有效防止衰老，美容养颜。<br/><br/><img src={require('../../assets/aboutUs/dy-8.png')} alt=""/><br/><br/>威尔斯利普亚磁热疗养生床垫通过磁场发生模块技术，产生一个强度适中的仿地球生物磁场，作用给身体补磁，给细胞充电，活化细胞，促进细胞新陈代谢，促进人体自我康复，是中老年人的最佳选择，在睡眠中养生，在养生中睡眠！</p></TabPane>
            <TabPane tab="唯一合作商" key="5"><h2>唯一合作商</h2><p><img src={require('../../assets/aboutUs/hzs.png')} alt=""/><br/><br/>2017年12月25日，北京红舞联盟与威尔斯利普公司签署战略合作协议，拟打造中国中老年磁疗生活圈，推动全国中老年健康服务提及形成。北京红舞联盟成为威尔斯利普在全国唯一的“战略合作伙伴”。</p></TabPane>
          </Tabs>
        </div>
      </div>
    );
  }
}
export default Aboutus;
