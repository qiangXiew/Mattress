import * as React from 'react';
import './product.less';
import Products from '../../components/products';

class ProductTab extends React.Component {
  constructor(props: any) {
    super(props);
    this.state = {background: '', color: ''};
    this.tab = this.tab.bind(this);
  }
  tab() {
    console.log(this.state);
    this.setState({
      background: '#C30D23', color: '#fff'
    });
  }
  render() {
    const style = this.state;
    return (
      <div className="product">
        <div className="pro-tab">
          <p onClick={this.tab} style={style}>亚磁热疗养生床垫</p>
          <p>3D气压全位按摩椅</p>
        </div>
        <Products />
      </div>
    );
  }
}
export default ProductTab;
