import React, { Component } from "react";
import { hot } from "react-hot-loader/root";
import _ from "lodash";

class App extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    console.log(_.join([1,2,3444,4],'***'))
    return (
      <div>
        <input />
        <input value="test HMR33" />
        <button>按钮</button>
      </div>
    );
  }
}

export default hot(App);
