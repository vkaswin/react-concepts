import { combineReducers } from "@reduxjs/toolkit";
import counterOneReducer from "./counterOne";
import counterTwoReducer from "./counterTwo";

const rootReducer = combineReducers({
  counterOne: counterOneReducer,
  counterTwo: counterTwoReducer,
});

export default rootReducer;
