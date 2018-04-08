import * as React from 'react';
import './news.less';
import { Tabs , Pagination } from 'antd';
import axios from 'axios';
import * as moment from 'moment';
const TabPane = Tabs.TabPane;

function callback(key: string) {
  console.log(key);
}

class News extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {newsdata: []};
  }
  componentWillMount () {
    axios.get('http://192.168.0.50:8081/H5Website/findNewsPage', {params: {
      token: '175413eab1288558',
      tabId: 1
    }}).then(res => {
      console.log(res.data);
      this.setState({
        newsdata: res.data
      });
    }).catch(

    );
  }
  render() {
    const con = this.state.newsdata;
    console.log(con);
    let newsList = con.map((el: any, index: number) => {
      return (
        <div className="news-list" key={index}>
          <div className="news-list-img"><img src={con[index].imgUrl} alt=""/></div>
          <div className="news-list-txt">
            <h3>{con[index].title}</h3>
            <p>{con[index].details}</p>
            <em>{moment(con[index].createTime).format('YYYY-MM-DD HH:mm:ss')}</em>
          </div>
        </div>
      );
    });
    return (
      <div className="aboutus">
        <div className="banner">
            <img src="" alt=""/>
          </div>
          <div className="aboutusTab">
            <Tabs defaultActiveKey="1" onChange={callback}>
              <TabPane tab="公司新闻" key="1">
                {newsList}
                <Pagination defaultCurrent={1} total={1} />
              </TabPane>
              {/* <TabPane tab="健康睡眠" key="2">
                <div className="news-list">
                  <div className="news-list-img"><img src="" alt=""/></div>
                  <div className="news-list-txt">
                    <h3>睡眠不足会变傻！如果你有这6个症状，赶紧躺下睡觉</h3>
                    <p>新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容。</p>
                    <em>2018-03-19</em>
                  </div>
                </div>
                <Pagination defaultCurrent={1} total={1} />
              </TabPane> */}
            </Tabs>
          </div>
      </div>
    );
  }
}
export default News;
