import React, { forwardRef } from "react";

const FrowardRef = ({ value }, ref) => {
  return (
    <div>
      <input ref={ref} defaultValue={value} />
    </div>
  );
};

export default forwardRef(FrowardRef);
