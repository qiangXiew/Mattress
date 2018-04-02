import * as React from 'react';

import './App.less';
import { Carousel, Row, Col } from 'antd';
// const ads = Carousel

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
      <div id="tab_function" className="content" >
        <Col span={13}>
          <Carousel ref={(ref) => this.myRef = ref} className="tab-function" dots={false} infinite={true}  >
            <div><h3>1</h3></div>
            <div><h3>2</h3></div>
            <div><h3>3</h3></div>
            <div><h3>4</h3></div>
          </Carousel>
        </Col>
        <Col span={8}>
          <video controls={true} src="http://www.w3school.com.cn/i/movie.ogg" >your browser does not support the video tag</video>
        </Col>
        <Row className="fun_bar" >
          <Col span={6} className="da1" onMouseOver={this.isGoto.bind(this, 0)} >
            <p className="num" >01</p>
            <p className="desc" >product function</p>
            <p className="title" >磁源力</p>
          </Col>
          <Col span={6} className="da2" onMouseOver={this.isGoto.bind(this, 1)} >
            <p className="num" >02</p>
            <p className="desc" >product function</p>
            <p className="title" >远红外</p>
          </Col>
          <Col span={6} className="da3" onMouseOver={this.isGoto.bind(this, 2)} >
            <p className="num" >03</p>
            <p className="desc" >product function</p>
            <p className="title" >负离子</p>
          </Col>
          <Col span={6} className="da4" onMouseOver={this.isGoto.bind(this, 3)} >
            <p className="num" >04</p>
            <p className="desc" >product function</p>
            <p className="title" >超长波</p>
          </Col>
        </Row>
      </div >
    );
  }

}

export default App;
