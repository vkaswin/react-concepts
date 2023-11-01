export const increaseCount = (payload) => {
  return {
    type: "INCREASE_COUNT",
    payload,
  };
};

export const decreaseCount = (payload) => {
  return {
    type: "DECREASE_COUNT",
    payload,
  };
};
