import Parent from "./components/Parent";
import Child from "./components/Child";
import * as one from "./redux/actions/counterOne";
import * as two from "./redux/actions/counterTwo";
import { useDispatch } from "react-redux";
import ClassComp from "./components/ClassComp";
import { AuthProvider } from "./Context";
import { ParentContext } from "./components/ParentContext";
import { ChildContext } from "./components/ChildContext";
import { withCounter } from "./components/withCounter";
import {
  Suspense,
  createElement,
  lazy,
  useEffect,
  useRef,
  useState,
} from "react";
import Reducer from "./components/Reducer";
import RenderProp from "./components/RenderProp";
import ErrorBoundary from "./components/ErrorBoundary";
import ForwardRef from "./components/ForwardRef";
import Scoreboard from "./components/Hello";
const LazyComp = lazy(() => import("./components/LazyComp"));

const Demo = ({ count, setCount }) => {
  // console.log(val);
  return (
    <div>
      <span>Demo - {count}</span>
      <button onClick={() => setCount(count + 1)}>Click</button>
    </div>
  );
};

const HOC = withCounter(Demo);

function App() {
  const dispatch = useDispatch();

  let [data, setData] = useState();

  let [status, setStatus] = useState();

  let [show, setShow] = useState(true);

  let [showClassComp, setShowClassComp] = useState(true);

  let [showLazyComp, setShowLazyComp] = useState(false);

  let inputRef = useRef();

  useEffect(() => {
    fetchData();
    inputRef.current.focus();
  }, []);

  useEffect(() => {
    console.log("useEffect", data, status);
  }, [data, status]);

  let promise = () => {
    return new Promise((res) => {
      setTimeout(() => {
        res({ data: "hello world", status: "success" });
      }, 5000);
    });
  };

  const fetchData = async () => {
    try {
      let res = await promise();
      console.log(res);
      // react will queue the state updates and it will trigger a rerender once all the lines in the function executes it is known as batching
      setData(res.data);
      setStatus(res.status);
    } catch (err) {
      console.log(err);
    }
  };

  const handleAddFunction = async () => {
    let res = await import("./utils/addFunction");
    console.log(res);
    console.log(res.add(1, 3));
    console.log(res.default(4, 2));
  };

  const toggleLazyComp = () => {
    setShowLazyComp(!showLazyComp);
  };

  console.log("App");

  return (
    <div>
      <div>
        <div style={{ display: "flex", gap: "15px" }}>
          Counter One
          <button
            style={{ width: "50px" }}
            onClick={() => dispatch(one.increaseCount(10))}
          >
            +
          </button>
          <button
            style={{ width: "50px" }}
            onClick={() => dispatch(one.decreaseCount(10))}
          >
            -
          </button>
          <br />
          Counter Two
          <button
            style={{ width: "50px" }}
            onClick={() => dispatch(two.increaseCount(10))}
          >
            +
          </button>
          <button
            style={{ width: "50px" }}
            onClick={() => dispatch(two.decreaseCount(10))}
          >
            -
          </button>
        </div>
        <AuthProvider>
          <ParentContext>
            <ChildContext />
          </ParentContext>
        </AuthProvider>
        <Parent>
          <Child />
        </Parent>
        {showClassComp && <ClassComp />}
        <button onClick={() => setShowClassComp(!showClassComp)}>
          Toggle Class Comp
        </button>
        <ErrorBoundary>
          <HOC name="Kumar" />
        </ErrorBoundary>
        <ErrorBoundary>
          <HOC name="Aswin" />
        </ErrorBoundary>
        {show && <Reducer />}
        <button onClick={() => setShow(!show)}>Toggle</button>
        <RenderProp
          render={({ x, y }) => {
            return (
              <div>
                Throttle : x = {x}, y = {y}
              </div>
            );
          }}
        >
          {({ x, y }) => {
            return (
              <div>
                <span>
                  Debounce : x = {x}, y = {y}
                </span>
              </div>
            );
          }}
        </RenderProp>
      </div>
      <button onClick={handleAddFunction}>Add Function</button>
      <div>
        <button onClick={toggleLazyComp}>Toggle Lazy Comp</button>
        <Suspense fallback={<div>Loading...</div>}>
          {showLazyComp && <LazyComp />}
        </Suspense>
      </div>
      {createElement(
        "h1",
        {
          className: "greeting",
        },
        "Hello",
        createElement(
          "span",
          null,
          createElement(
            "a",
            {
              onClick: function () {
                console.log("hello");
              },
            },
            "World"
          )
        ),
        "Danger"
      )}
      <ForwardRef ref={inputRef} value="Loreum Ispum" />
      <Scoreboard />
    </div>
  );
}

export default App;

// Print a 2d array in spiral form.
// Eg: [
//          [1, 2,  3,  4],
//          [5,  6,  7, 8],
//          [9, 10,  11, 12],
//          [13, 14, 15, 16]
//       ] -> should print – 1, 2, 3, 4 ,8, 12, 16, 15, 14, 13, 9, 5, 6, 7, 11, 10

let arr = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16],
];

var spiral = function (matrix) {
  if (!matrix.length) return [];

  let A = [];

  let rowStart = 0,
    rowEnd = matrix.length - 1,
    colStart = 0,
    colEnd = matrix[0].length - 1;

  while (colStart <= colEnd && rowStart <= rowEnd) {
    for (let i = colStart; i <= colEnd; i++) {
      A.push(matrix[rowStart][i]);
    }
    rowStart++;

    for (let i = rowStart; i <= rowEnd; i++) {
      A.push(matrix[i][colEnd]);
    }
    colEnd--;
    if (rowStart <= rowEnd) {
      for (let i = colEnd; i >= colStart; i--) {
        A.push(matrix[rowEnd][i]);
      }
    }
    rowEnd--;

    if (colStart <= colEnd) {
      for (let i = rowEnd; i >= rowStart; i--) {
        A.push(matrix[i][colStart]);
      }
    }
    colStart++;
  }

  return A;
};

spiral(arr);
