import * as React from 'react';
import { Carousel } from 'antd';
import './App.less';
// 功能模块
import Portals from '../../components/Portals';
// 业务板块
import ProFun from './tabs/function';
import ProFeat from './tabs/features';
import ProRecommend from './tabs/recommendation';
import BandInt from './tabs/bandInt';
import News from './tabs/news';

class App extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      date: '我的标题'
    };
  }
  render() {
    return (
      <div className="App">
        <Carousel effect="fade" autoplay={true} >
          <div><h3><img src={require('../../assets/index/index-banner-1.png')} alt=""/></h3></div>
          <div><h3><img src={require('../../assets/index/index-banner-2.png')} alt=""/></h3></div>
          <div><h3><img src={require('../../assets/index/index-banner-3.png')} alt=""/></h3></div>
          <div><h3><img src={require('../../assets/index/index-banner-4.png')} alt=""/></h3></div>
          <div><h3><img src={require('../../assets/index/index-banner-5.png')} alt=""/></h3></div>
        </Carousel>
        
        <Portals title="产品功能" desc="PRODUCT FUNCTION" content={<ProFun/>} />
        <Portals title="产品特点" desc="PRODUCT FEATURES" content={<ProFeat/>} />
        <Portals title="产品推荐" desc="PRODUCT RECOMMENDATION" content={<ProRecommend/>} />
        <Portals title="品牌介绍" desc="BAND INTPROUCTION" content={<BandInt/>} />
        <Portals title="新闻中心" desc="NEWS CENTER" content={<News/>} />
      </div >
    );
  }
}
export default App;
