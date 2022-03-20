import { combineReducers } from "redux";
import { cartReducer } from "./cartReducer";
import { filterReducer } from "./filterReducer";
import { productsReducer } from "./productsReducer";

const rootReducer = combineReducers({
  products: productsReducer,
  cart: cartReducer,
  filters: filterReducer,
});

export default rootReducer;
