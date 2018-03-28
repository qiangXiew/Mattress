import * as React from 'react';
import { Carousel } from 'antd';
import './App.less';

class App extends React.Component {
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

          <Carousel >
            <div><h3>9</h3></div>
            <div><h3>8</h3></div>
            <div><h3>7</h3></div>
            <div><h3>6</h3></div>
            <div><h3>5</h3></div>
          </Carousel>
      </div>
    );
  }
}
export default App;
