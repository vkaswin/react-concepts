import React from "react";
import { useStore } from "../Context";

export const ChildContext = () => {
  const { countTwo, setCountTwo } = useStore();
  console.log("Child Context");
  return (
    <div>
      <button onClick={() => setCountTwo(countTwo + 1)}>Two</button>
      <span>Child Context - {countTwo}</span>
    </div>
  );
};
