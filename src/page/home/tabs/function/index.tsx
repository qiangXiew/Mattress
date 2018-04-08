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
    console.log(index, e.currentTarget, e.bubbles);
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
            <div><h3>1</h3></div>
            <div><h3>2</h3></div>
            <div><h3>3</h3></div>
            <div><h3>4</h3></div>
          </Carousel>
        </Col>
        <Col span={11}>
          <video controls={true} src="http://www.w3school.com.cn/i/movie.ogg" >your browser does not support the video tag</video>
        </Col>
        <Row className="fun_bar">
          {rows}
        </Row>
      </div >
    );
  }

}

export default App;
