import * as React from 'react';
import { Carousel } from 'antd';
import './App.less';

import Portals from '../../components/Portals';

class App extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      date: '我的标题'
    };
  }
  render() {
    return (
      <div className="App">
        <Carousel effect="fade" autoplay={true} >
          <div><h3>1</h3></div>
          <div><h3>2</h3></div>
          <div><h3>3</h3></div>
          <div><h3>4</h3></div>
          <div><h3>5</h3></div>
        </Carousel>

        <Portals title="产品功能" desc="PRODUCT FUNCTION" content={<Carousel effect="fade" autoplay={true} ><div><h3>1</h3></div><div><h3>2</h3></div></Carousel>} />
        <Portals title="产品特点" desc="PRODUCT FEATURES" content={2} />
        <Portals title="产品推荐" desc="PRODUCT RECOMMENDATION" content={3} />
        <Portals title="新闻中心" desc="NEWS CENTER" content={4} />
      </div >
    );
  }
}
export default App;
