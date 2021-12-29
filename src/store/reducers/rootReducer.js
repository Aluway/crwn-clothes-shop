import { combineReducers } from "redux";

import clothesReducer from "./clothesReducer";
import cartReducer from "./cartReducer";

const rootReducer = combineReducers({
  clothes: clothesReducer,
  cart: cartReducer,
});

export default rootReducer;
