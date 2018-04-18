import * as React from 'react';
import '../news.less';
const banner = require('../../../assets/news/news-banner.jpg');

class NewsCon extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {};
  }
  render() {
    const con = this.props.match.params.con;
    console.log(con);
    return (
      <div className="aboutus">
        <div className="banner">
            <img src={banner} alt=""/>
          </div>
          <div className="aboutusTab">{con}</div>
      </div>
    );
  }
}
export default NewsCon;
