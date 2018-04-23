import * as React from 'react';
import '../news.less';
const banner = require('../../../assets/news/news-banner.jpg');

class NewsCon extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {};
  }
  render() {
    const con = this.props.location.state;
    return (
      <div className="aboutus">
        <div className="banner">
            <img src={banner} alt=""/>
          </div>
          <h4 dangerouslySetInnerHTML={{__html: con.title}}/>
          <div className="aboutusTab" dangerouslySetInnerHTML={{__html: con.details}}/>
      </div>
    );
  }
}
export default NewsCon;
