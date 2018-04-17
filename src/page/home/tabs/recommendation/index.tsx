import * as React from 'react';

import './App.less';
import { Carousel, Row, Col } from 'antd';
const tabRecommendImgs = {
  'img1' : require('../../../../assets/index/index-pro-rec-1.jpg'),
  'img2' : require('../../../../assets/index/index-pro-rec-2.jpg')
};

class App extends React.Component<any, any> {
  public myRef: any = Carousel;

  constructor(props: any) {
    super(props);
    this.state = {
      date: '我的标题',
    };
  }
  isGoto(index: any) {
    console.log('index=', index);
    this.myRef.goTo(index);
  }
  componentDidMount() {
    require('antd').Carousel.defaultProps.dots = false;
  }

  render() {

    return (
      <div id="tab_recommend" className="content" >
        <Col span={6} className="fun_bar" >
          <Row className="da1" onMouseOver={this.isGoto.bind(this, 0)} >
            <p className="title" >亚磁热疗养生床垫</p>
          </Row>
          <Row className="da2" onMouseOver={this.isGoto.bind(this, 1)} >
            <p className="title" >3D气压全位按摩椅</p>
          </Row>
        </Col>
        <Col span={18}>
          <Carousel ref={(ref) => this.myRef = ref} className="tab-function" dots={false} infinite={true} vertical={true} >
            <a href="Product/0"><img src={tabRecommendImgs.img1} alt=""/></a>
            <a href="Product/1"><img src={tabRecommendImgs.img2} alt=""/></a>
          </Carousel>
        </Col>
      </div >
    );
  }

}

export default App;
