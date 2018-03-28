import * as React from 'react';
import './style.less';

class Portals extends React.Component<any, any> {
  render() {
    const { title, desc, content } = this.props;
    return (
      <div id="portals">
        <div className="cont">
          <h1>{title}</h1>
          <span>{desc}</span>
        </div>
        {content}
      </div>
    );
  }
}
export default Portals;
