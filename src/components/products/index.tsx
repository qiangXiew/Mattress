import * as React from 'react';
import './product.less';
import { Carousel, Tabs } from 'antd';
const TabPane = Tabs.TabPane;
function callback(key: string) {
  console.log(key);
}

class Products extends React.Component <any, any> {
  public myRef: any = Carousel;
  constructor(props: any) {
    super(props);
    this.prev = this.prev.bind(this);
    this.next = this.next.bind(this);
    this.state = {
      tabs: [
        {tabName: '产品功能', id: 1},
        {tabName: '产品特点', id: 2}
      ],
      current: 0
    };
  }
  prev() {
    this.myRef.prev();
  }
  next() {
    this.myRef.next();
  }
  tabClick(index: number) {
    return this.state.current === index ? 'now' : '';
  }
  render() {
    return (
      <div>
        <div className="banner">
          <Carousel ref={(ref) => this.myRef = ref} dots={false} autoplay={true}>
            <div><h3>1</h3></div>
            <div><h3>2</h3></div>
            <div><h3>23</h3></div>
            <div><h3>24</h3></div>
          </Carousel>
          <i className="left-btn" onClick={this.prev} /><i className="right-btn" onClick={this.next} />
        </div>
        <div className="product-con">
          <div className="product-con-tab">
          {
            React.Children.map(this.props.children, (element, index) => {
              return (
                <button onClick={() => {this.setState({current: index}); }} className={this.tabClick(index)}>{this.state.tabs[index].tabName}</button>
              );
            })
          }
          </div>
          <Tabs defaultActiveKey="1" onChange={callback}>
              <TabPane tab="磁源力" key="1"><h2>磁源力</h2><p>磁源力</p></TabPane>
              <TabPane tab="远红外" key="2"><h2>远红外</h2><p>远红外</p></TabPane>
              <TabPane tab="负离子" key="3"><h2>负离子</h2><p>负离子</p></TabPane>
              <TabPane tab="超长波" key="4"><h2>磁源力</h2><p>磁源力</p></TabPane>
            </Tabs>
        </div>
      </div>
    );
  }
}
class ProductTab extends React.Component <any, any> {
  constructor (props: any) {
    super(props);
  }
  render() {
    return (
      <Products>
        <div/><div/>
      </Products>
    );
  }
}
export default ProductTab;
