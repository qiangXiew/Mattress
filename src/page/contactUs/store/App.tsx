import * as React from 'react';
import './store.less';
import { Map, Marker } from 'react-amap';

class Store extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.toGo = this.toGo.bind(this);
        this.state = {
            address: [[116.502767, 39.963037], [117.213881, 39.158061], [112.5913, 37.852926]], // 1 北京， 2.天津 3.太原
            isLocation: [116.502767, 39.963037]
        };
    }

    componentWillMount() {
        document.title = '联系我们';
    }
    toGo(id: number) {
        this.setState({
            isLocation: this.state.address[id]
        });
    }
    render() {
        return (
            <div className="map">

                <div className="map-left">
                    <Map zoom={15} center={this.state.isLocation} amapkey={'e1db63f386ef7ccc2d99d27c4a47dd1d'}>
                        <Marker position={this.state.isLocation} />
                    </Map>
                </div>
                <div className="map-right">
                    <p className="store-img"><img src={require('./../../../assets/contactus/contactus-s.jpg')} alt=""/></p>
                    <ul>
                        <li onClick={this.toGo.bind(this, 0)}>店名:红舞联盟健康生活馆（北京店）<br />地址:北京店:北京市朝阳区驼房营南路新华科技大厦B做305室，红舞联盟健康生活馆。<br />联系人:王东东 17611629391</li>
                        <li onClick={this.toGo.bind(this, 1)}>店名：红舞联盟健康生活馆（天津店）<br />地址：天津市河北区万柳村大街1946创意园红舞联盟健康生活馆<br />电话：王宇欣13311398167</li>
                        <li onClick={this.toGo.bind(this, 2)}>店名:红舞联盟健康生活馆（太原店）<br />地址:正大店:山西省太原市迎泽区双塔北路正大美家八楼，红舞联盟健康生活馆。<br />联系人:陈默15536193444<br /></li>
                    </ul>
                </div>
            </div>
        );
    }
}
export default Store;