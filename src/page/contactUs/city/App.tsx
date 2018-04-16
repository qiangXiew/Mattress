import * as React from 'react';
import { Select } from 'antd';
import './city.less';
const Option = Select.Option;

const provinceData = ['北京', '天津', '山西'];
const cityData = {
  北京: ['北京'],
  天津: ['天津'],
  山西: ['太原']
};

class City extends React.Component {
  state = {
    cities: cityData[provinceData[0]],
    secondCity: cityData[provinceData[0]][0],
  };
  handleProvinceChange = (value: any) => {
    this.setState({
      cities: cityData[value],
      secondCity: cityData[value][0],
    });
  }
  onSecondCityChange = (value: any) => {
    this.setState({
      secondCity: value,
    });
  }
  render() {
    const provinceOptions = provinceData.map(province => <Option key={province}>{province}</Option>);
    const cityOptions = this.state.cities.map((city: any) => <Option key={city}>{city}</Option>);
    return (
      <div className="city">
        <Select defaultValue={provinceData[0]} onChange={this.handleProvinceChange}>
          {provinceOptions}
        </Select>
        <Select value={this.state.secondCity} onChange={this.onSecondCityChange}>
          {cityOptions}
        </Select>
      </div>
    );
  }
}

export default City;