import { Fragment, useEffect, useState } from "react";

let throttle = (cb, delay) => {
  let timoutId;
  return (...args) => {
    if (timoutId) return;
    timoutId = setTimeout(() => {
      cb(...args);
      timoutId = undefined;
    }, delay);
  };
};

let debounce = (cb, delay) => {
  let timeoutId;
  return (...args) => {
    if (timeoutId) clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      cb(...args);
    }, delay);
  };
};

const RenderProp = ({ render, children }) => {
  let [position, setPosition] = useState({ x: 0, y: 0 });

  let [position2, setPosition2] = useState({ x: 0, y: 0 });

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMoveThrottle);
    window.addEventListener("mousemove", handleMouseMoveDebounce);
    return () => {
      window.removeEventListener("mousedown", handleMouseMoveThrottle);
      window.removeEventListener("mousedown", handleMouseMoveDebounce);
    };
  }, []);

  let handleMouseMoveDebounce = debounce(({ x, y }) => {
    setPosition2({ x, y });
  }, 500);

  const handleMouseMoveThrottle = throttle(({ x, y }) => {
    setPosition({ x, y });
  }, 50);

  return (
    <Fragment>
      {render(position)}
      {children(position2)}
    </Fragment>
  );
};

export default RenderProp;
