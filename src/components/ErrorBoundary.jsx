import React, { Component, Fragment } from "react";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
    };
  }

  static getDerivedStateFromError(error, info) {
    console.log(error, info);
    return {
      hasError: true,
    };
  }

  render() {
    return (
      <Fragment>
        {this.state.hasError ? <div>Error</div> : this.props.children}
      </Fragment>
    );
  }
}

export default ErrorBoundary;
