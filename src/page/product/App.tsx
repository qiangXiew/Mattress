import * as React from 'react';
import './product.less';
import Products from '../../components/products';

class ProductTab extends React.Component {
  render() {
    return (
      <div className="product">
        <div className="pro-tab">
          <p>亚磁热疗养生床垫</p>
          <p>3D气压全位按摩椅</p>
        </div>
        <Products />
      </div>
    );
  }
}
export default ProductTab;
