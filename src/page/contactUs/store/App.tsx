import * as React from 'react';
import './store.less';
class Store extends React.Component {
    constructor(props: any) {
        super(props);
        this.state = {

        };
    }
    render() {
        return (
            <div className="map">
                <div className="map-left">1</div>
                <div className="map-right">
                    <p className="store-img">1</p>
                    <ul>
                        <li>店名:红舞联盟健康生活馆（北京店）<br/>地址:北京店:北京市朝阳区驼房营南路新华科技大厦B做305室，红舞联盟健康生活馆。<br/>联系人:刘程竹13311397807</li>
                        <li>店名：红舞联盟健康生活馆（天津店）<br/>地址：天津市河北区万柳村大街1946创意园红舞联盟健康生活馆<br/>电话：王宇欣13311398167</li>
                        <li>店名:红舞联盟健康生活馆（太原店）<br/>地址:正大店:山西省太原市迎泽区双塔北路正大美家八楼，红舞联盟健康生活馆。<br/>联系人:陈默15536193444<br/></li>
                    </ul>
                </div>
            </div>
        );
    }
}
export default Store;