import {combineReducers} from "redux";
import filterReducer from './filters';
import foodsReducer from './foods';
import categoriesReducer from './categories';
import cartReducer from './cart';

const RootReducer = combineReducers({
  filter: filterReducer,
  foods: foodsReducer,
  categories: categoriesReducer,
  cart: cartReducer
})

export default RootReducer