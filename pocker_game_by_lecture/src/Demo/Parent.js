import React, { Component } from "react";
import Children1 from "./Children1";
import Children2 from "./Children2";

class Parent extends Component {
  constructor(props) {
    super(props);
    console.log("constructor");
    this.state = {
      state1: 1,
      state2: 2
    };
  }
  componentWillMount() {
    console.log("componentWillMount");
  }
  
  render() {
    console.log("render");
    return (
      <>
        <button
          onClick={() => this.setState({ state1: this.state.state1 + 1 })}
        >
          Change state 1
        </button>
        <button
          onClick={() => {
            this.demo.name = "dung";
            this.setState({ state2: this.state.state2 + 1 });
          }}
        >
          Change state 2
        </button>

        <Children1 state1={this.state.state1} />
        <Children2 state2={this.state.state2} />
      </>
    );
  }
  componentDidMount() {}
}

export default Parent;
