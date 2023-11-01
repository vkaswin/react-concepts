import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useMemo,
  ReactNode,
} from "react";
import { useSelector } from "react-redux";

export default function Parent({ children }) {
  console.log("Parent");
  const state = useSelector((state) => {
    return state.counterOne;
  });

  useLayoutEffect(() => {
    console.log("parnet useLayout");
  }, []);

  useEffect(() => {
    console.log("parent useEffect");
  }, []);

  useEffect(() => {
    console.log("state changes in parent effect");
    const controller = new AbortController();

    fetch("https://hub.dummyapis.com/delay?seconds=1", {
      signal: controller.signal,
      cache: "no-cache",
    }).then(async (res) => {
      let data = await res.text();
      console.log(data);
    });

    return () => {
      controller.abort();
      console.log("state changes in parent cleanup");
    };
  }, [state]);

  return (
    <div>
      <span>Parent</span>
      <span>Counter One - {state.count}</span>
      {children}
    </div>
  );
}
