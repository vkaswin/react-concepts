import React from "react";
import { useStore } from "../Context";

export const ParentContext = ({ children }) => {
  const { countOne, setCountOne } = useStore();
  console.log("Parent Context");
  return (
    <div>
      <button onClick={() => setCountOne(countOne + 1)}>One</button>
      <span>Parent Context - {countOne}</span>
      {children}
    </div>
  );
};
