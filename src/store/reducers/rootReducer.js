import { combineReducers } from "redux";

import clothesReducer from "./clothesReducer";
import cartReducer from "./cartReducer";
import signinReducer from "./signinReducer";

const rootReducer = combineReducers({
  clothes: clothesReducer,
  cart: cartReducer,
  signin: signinReducer,
});

export default rootReducer;
