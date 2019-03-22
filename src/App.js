import React, { Component } from "react";
import { hot } from "react-hot-loader/root";
import _ from "lodash";
import { DatePicker, Input, Select } from "antd";
const Option = Select.Option;
class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(_.join([1, 2, 3444, 4], "***"));
    return (
      <div>
        <Select defaultValue="lucy" style={{ width: 120 }}>
          <Option value="jack">Jack</Option>
          <Option value="lucy">Lucy</Option>
          <Option value="disabled" disabled>
            Disabled
          </Option>
          <Option value="Yiminghe">yiminghe</Option>
        </Select>
        <DatePicker />
        <Input />
        <input value="test HMR" />
        <button>按钮33</button>
      </div>
    );
  }
}

export default hot(App);
