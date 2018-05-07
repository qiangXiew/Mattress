import * as React from 'react';

import './App.less';
import { Carousel, Row, Col } from 'antd';
const tabFunctionImgs = {
  'img1' : require('./../../../../assets/index/index-pro-fun-1.png'),
  'img2' : require('./../../../../assets/index/index-pro-fun-2.png'),
  'img3' : require('./../../../../assets/index/index-pro-fun-3.png'),
  'img4' : require('./../../../../assets/index/index-pro-fun-4.png')
};

class App extends React.Component<any, any> {
  public myRef: any = Carousel;

  constructor(props: any) {
    super(props);
    this.state = {
      date: '我的标题',
      col_className: {
        col: 1,
        after: 0
      },
      // 滑块内容
      fun_bar: [
        { num: '01', desc: 'product function', title: '磁源力' },
        { num: '02', desc: 'product function', title: '远红外' },
        { num: '03', desc: 'product function', title: '负离子' },
        { num: '04', desc: 'product function', title: '超长波' }]
    };
  }
  isGoto(index: any, e: any) {
    // e.bubbles;
    // e.stopPropagation();
    e.nativeEvent.stopImmediatePropagation();
    // e.style.color = 'red';
    this.myRef.goTo(index);
  }

  componentDidMount() {
    require('antd').Carousel.defaultProps.dots = false;
  }

  render() {
    let rows: any = [];
    this.state.fun_bar.forEach((i: any, index: number) => {
      rows.push(
        <Col span={6} className="col" onMouseOver={this.isGoto.bind(this, index)} key={index}>
          <p className="num" >{i.num}</p>
          <p className="desc" >{i.desc}</p>
          <p className="title" >{i.title}</p>
        </Col>
      );
    });

    return (
      <div id="tab_function" className="content" >
        <Col span={13}>
          <Carousel ref={(ref) => this.myRef = ref} className="tab-function" dots={false} infinite={true}  >
            <a href="/Product/0/0/0"><img src={tabFunctionImgs.img1} alt=""/></a>
            <a href="/Product/0/0/1"><img src={tabFunctionImgs.img2} alt=""/></a>
            <a href="/Product/0/0/2"><img src={tabFunctionImgs.img3} alt=""/></a>
            <a href="/Product/0/0/3"><img src={tabFunctionImgs.img4} alt=""/></a>
          </Carousel>
        </Col>
        <Col span={11}>
          <video controls={true} src="https://qiniu.hong5.com.cn/pc/video/wrslp01.mp4" >your browser does not support the video tag</video>
        </Col>
        <Row className="fun_bar">
          {rows}
        </Row>
      </div >
    );
  }

}

export default App;
