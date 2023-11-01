import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useMemo,
  ReactNode,
} from "react";
import { useSelector } from "react-redux";

export default function Child({ children }) {
  console.log("Child");

  useLayoutEffect(() => {
    console.log("child useLayout");
  }, []);

  useEffect(() => {
    console.log("child useEffect");
  }, []);

  const state = useSelector((state) => {
    return state.counterTwo;
  });

  return (
    <div>
      <span>Child </span>
      <span>Counter Two - {state.count}</span>
    </div>
  );
}
