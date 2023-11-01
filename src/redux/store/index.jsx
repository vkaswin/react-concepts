import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "../reducers";
import { Provider } from "react-redux";
import App from "../../App";
import thunk from "redux-thunk";

let store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});

const ProvideStore = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

export default ProvideStore;
