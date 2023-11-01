import React, { Component } from "react";
import * as one from "../redux/actions/counterOne";
import { connect } from "react-redux";

class ClassComp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Hello",
    };
  }

  componentDidUpdate(prevProps, prevState) {
    console.log(prevProps, this.props, prevState, this.state);
  }

  componentDidMount() {}

  componentWillUnmount() {
    console.log("ClassComp unmount", this);
  }

  changeName = () => {
    this.setState({ ...this.state, name: "Hello World" });
  };

  render() {
    let { name } = this.state;
    console.log("ClassComp");
    return (
      <div>
        <span>{this.props.count}</span>
        <button onClick={this.props.increment}>+</button>
        <button onClick={this.props.decrement}>-</button>
        <button onClick={this.changeName}>{name}</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    count: state.counterOne.count,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    increment: () => dispatch(one.increaseCount(10)),
    decrement: () => dispatch(one.decreaseCount(10)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ClassComp);
