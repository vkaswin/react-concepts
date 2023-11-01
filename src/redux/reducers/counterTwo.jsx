const initialState = {
  count: 0,
};

const counterTwoReducer = (state = initialState, action) => {
  switch (action.type) {
    case "INCREASE_COUNT":
      return { ...state, count: state.count + action.payload };

    case "DECREASE_COUNT":
      return { ...state, count: state.count - action.payload };

    default:
      return state;
  }
};

export default counterTwoReducer;
