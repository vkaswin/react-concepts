import React, { useState } from "react";

export const withCounter = (WrappedComponent) => {
  return (props) => {
    let [count, setCount] = useState(0);
    return <WrappedComponent count={count} setCount={setCount} {...props} />;
  };
};
