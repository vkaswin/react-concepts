export const increaseCount = (payload) => {
  return {
    type: "INCREASE",
    payload,
  };
};

const promise = () =>
  new Promise((res, rej) => {
    setTimeout(() => {
      res({
        type: "DECREASE",
      });
    }, 5000);
  });

export const decreaseCount = (payload) => {
  return async (dispatch) => {
    let data = await promise();

    data.payload = payload;
    dispatch(data);
  };
};
