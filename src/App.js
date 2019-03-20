import React, { Component } from "react";
import { hot } from "react-hot-loader/root";
import _ from "lodash";

class App extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <div>
        <input />
        <input value="test HMR" />
        <button>按钮</button>
      </div>
    );
  }
}

export default hot(App);
