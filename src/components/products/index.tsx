import * as React from 'react';
import './product.less';
import { Carousel, Tabs } from 'antd';
import webApi from '../../lib/webApi';
const TabPane = Tabs.TabPane;
function callback(key: any) {
  console.log(key);
}

class Products extends React.Component <any, any> {
  public myRef: any = Carousel;
  constructor(props: any) {
    super(props);
    this.prev = this.prev.bind(this);
    this.next = this.next.bind(this);
    this.state = {
      bannerImgs: {},
      tabs: [
        {tabName: '产品功能', id: 1},
        {tabName: '产品特点', id: 2}
      ],
      current: 0,
      tabId: 0
    };
  }
  componentDidMount() {
    this.publicRes();
  }
  async publicRes() {
    let publicCon = await webApi.enroll.product();
    this.setState({
      bannerImgs: publicCon.data.data.bannerImgs
    });
  }
  // banner前一张
  prev() {
    this.myRef.prev();
  }
  // banner下一张
  next() {
    this.myRef.next();
  }
  // 产品tab切换
  tabClick(index: number) {
    return this.state.current === index ? 'now' : '';
  }
  render() {
    const tabId = this.props.id; // 顶部tabId
    let banner = (tabId === 0 ? this.state.bannerImgs.banner1 : this.state.bannerImgs.banner2); // banner数组赋值
    // banner遍历
    let bannerList = banner ? banner.map((el: any, index: number) => {
      console.log(banner[index].imgUrl);
      return (
        <div key={index}><img src={banner[index].imgUrl} alt=""/></div>
      );
    }) : null;
    let tab = this.state.tabs; // 产品tab
    // 产品tab遍历
    let tabBar = tab.map((el: any, index: number) => {
      return (
        <button key={index} onClick={() => {this.setState({current: index}); }} className={this.tabClick(index)}>{tab[index].tabName}</button>
      );
    });
    return (
      <div>
        <div className="banner">
         {/* autoplay={true} */}
          <Carousel ref={(ref) => this.myRef = ref} dots={false}> 
          {bannerList}
          </Carousel>
          <i className="left-btn" onClick={this.prev} /><i className="right-btn" onClick={this.next} />
        </div>
        <div className="product-con">
          <div className="product-con-tab">
          {tabBar}
          </div>
          <Tabs defaultActiveKey="1" onChange={callback}>
            <TabPane tab="磁源力" key="1"><h2>磁源力</h2><p>磁源力</p></TabPane>
            <TabPane tab="远红外" key="2"><h2>远红外</h2><p>远红外</p></TabPane>
            <TabPane tab="负离子" key="3"><h2>负离子</h2><p>负离子</p></TabPane>
            <TabPane tab="超长波" key="4"><h2>超长波</h2><p>超长波</p></TabPane>
          </Tabs>
        </div>
      </div>
    );
  }
}
export default Products;
