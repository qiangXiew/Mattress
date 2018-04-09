import * as React from 'react';
import './product.less';
import Products from '../../components/products';

class ProductTab extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = { 
      tabs: [
        {tabName: '亚磁热疗养生床垫', id: '1'},
        {tabName: '3D气压全位按摩椅', id: '2'}
      ],
      tabId: 0
    };
    this.tab = this.tab.bind(this);
  }
  tab = (index: number) => {
    return this.state.tabId === index ? 'active' : '';
  }
  render() {
    const tabs = this.state.tabs;
    let tab = tabs.map((el: any, index: number) => {
      return (
        <p key={index} onClick={() => {this.setState({ tabId: index }); }} className={this.tab (index)}>{tabs[index].tabName}</p>        
      );
    });
    return (
      <div className="product">
        <div className="pro-tab">
        {tab}
        </div>
        <Products id={this.state.tabId}/>
      </div>
    );
  }
}
export default ProductTab;