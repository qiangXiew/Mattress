import * as React from 'react';
// import { Carousel } from 'antd';
import './aboutus.less';
import Header from '../../components/header';
import Footer from '../../components/footer';

class Aboutus extends React.Component {
  render() {
    return (
      <div className="app">
        <Header />
        {/* <div className="aboutus">
          <div className="banner">
            <img src="" alt=""/>
          </div>
        </div> */}
        <Footer />
      </div>
    );
  }
}
export default Aboutus;
