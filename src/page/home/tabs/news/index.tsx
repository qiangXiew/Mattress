import * as React from 'react';

import './App.less';

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
          这是新闻中心 新闻中心 新闻中心！！！！
      </div >
    );
  }
}
export default App;
