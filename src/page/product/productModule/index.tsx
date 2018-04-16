import * as React from 'react';
import './productModule.less';
import { Carousel } from 'antd';
import FunModule from '../funModule/App';
// import webApi from '../../../lib/webApi';

class Products extends React.Component <any, any> {
  public myRef: any = Carousel;
  constructor(props: any) {
    super(props);
    this.prev = this.prev.bind(this);
    this.next = this.next.bind(this);
    this.state = {
      bannerImgs: {
        banner1: [
          {imgUrl: require('../../../assets/product/pro-cd-banner-1.jpg')}
        ],
        banner2: [
          {imgUrl: require('../../../assets/product/pro-amy-banner-1.jpg')}
        ]
      },
      tabs: [
        {tabName: '产品功能', id: 1},
        {tabName: '产品特点', id: 2}
      ],
      current: 0,
      tabId: 0
    };
  }
  // componentDidMount() {
  //   this.publicRes();
  // }
  // async publicRes() {
  //   let publicCon = await webApi.enroll.product();
  //   this.setState({
  //     bannerImgs: publicCon.data.data.bannerImgs
  //   });
  // }
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
    console.log(this.state.current);
    let banner = (tabId === 0 ? this.state.bannerImgs.banner1 : this.state.bannerImgs.banner2); // banner数组赋值
    // banner遍历
    let bannerList = banner ? banner.map((el: any, index: number) => {
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
          <FunModule id={this.state.current} tabId={tabId}/>
        </div>
      </div>
    );
  }
}
export default Products;
