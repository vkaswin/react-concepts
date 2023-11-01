import { useEffect, useState } from "react";

const useReducer = (reducer, initialState) => {
  const [state, setState] = useState(initialState);

  const dispatch = (action) => {
    let newState = reducer(state, action);
    setState(newState);
  };

  return [state, dispatch];
};

let initialState = {
  count: 0,
};

let reducer = (state, action) => {
  switch (action.type) {
    case "INCREASE":
      return { ...state, count: state.count + 1 };

    case "DECREASE":
      return { ...state, count: state.count - 1 };

    default:
      return state;
  }
};

const Reducer = () => {
  let [state, dispatch] = useReducer(reducer, initialState);

  console.log(state);

  const handleIncrement = () => {
    dispatch({ type: "INCREASE" });
  };

  const handleDecrement = () => {
    dispatch({ type: "DECREASE" });
  };

  return (
    <div>
      <span>{state.count}</span>
      <button onClick={handleIncrement}>+</button>
      <button onClick={handleDecrement}>-</button>
    </div>
  );
};

export default Reducer;
