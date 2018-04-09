import * as React from 'react';
import './App.less';
import { Col, Row } from 'antd';
import WebApi from '../../../../lib/webApi';

class App extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      date: '我的标题'
    };
  }

  componentDidMount() {
    this.getres();
  }
  async getres() {
    let params = {
      tabId: '0',
    };
    let resas = await WebApi.enroll.news(params);

    console.log(resas);
  }
  render() {
    return (
      <div id="tab_news" className="content" >
        <Col span={12}>
          <div>
            <img src="data:image/jpeg;base64,/9j/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAAAeAAD/4QMfaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjYtYzE0MCA3OS4xNjA0NTEsIDIwMTcvMDUvMDYtMDE6MDg6MjEgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjc0RDU4QTg1Mjg5MzExRThCQzA1RDFFQUVCNEFBODhEIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjc0RDU4QTg0Mjg5MzExRThCQzA1RDFFQUVCNEFBODhEIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE4IE1hY2ludG9zaCI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJFMDhENDkyMDUyNTBGREY5REM3NThCMzlFMEQ5NTIxMyIgc3RSZWY6ZG9jdW1lbnRJRD0iRTA4RDQ5MjA1MjUwRkRGOURDNzU4QjM5RTBEOTUyMTMiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7/7gAOQWRvYmUAZMAAAAAB/9sAhAAQCwsLDAsQDAwQFw8NDxcbFBAQFBsfFxcXFxcfHhcaGhoaFx4eIyUnJSMeLy8zMy8vQEBAQEBAQEBAQEBAQEBAAREPDxETERUSEhUUERQRFBoUFhYUGiYaGhwaGiYwIx4eHh4jMCsuJycnLis1NTAwNTVAQD9AQEBAQEBAQEBAQED/wAARCAABAAEDASIAAhEBAxEB/8QATAABAQAAAAAAAAAAAAAAAAAAAAUBAQEAAAAAAAAAAAAAAAAAAAMFEAEAAAAAAAAAAAAAAAAAAAAAEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwC2AJUf/9k=" alt="" />
          </div>
          <div>
            <h1>共赢未来 | 2017 威尔斯利普加盟商年中会议盛大开幕 <span>2017-08-22</span></h1>
            <p>8月17日，2017威尔斯利普加盟商年中会议在上海隆重开幕。希丁安集团凭借旗下斯林百兰、BICO瑞柯等品牌，三十余年来致力深耕中国</p>
            <p><a href="#">查看详情></a></p>
          </div>
        </Col>
        <Col span={12}>
          1
        </Col>
        <Row className="fun_bar">
          {/* {rows} */}

        </Row>
      </div >
    );
  }
}
export default App;
