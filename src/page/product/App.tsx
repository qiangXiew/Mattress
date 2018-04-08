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
      current: 0
    };
    this.tab = this.tab.bind(this);
  }
  tab = (index: number) => {
    return this.state.current === index ? 'active' : '';
  }
  render() {
    return (
      <div className="product">
        <div className="pro-tab">
        {
          React.Children.map(this.props.children, (element, index) => {
            return (
              <p onClick={() => {this.setState({ current: index }); }} className={this.tab (index)}>{this.state.tabs[index].tabName}</p>
            );
          })
        }
        </div>
        <Products />
      </div>
    );
  }
}
class TabComponent extends React.Component <any, any> {
  constructor(props: any) {
      super(props);
  }
  render() {
    return (
      <ProductTab>
        <div/><div/>
      </ProductTab>
    );
  }
}
export default TabComponent;