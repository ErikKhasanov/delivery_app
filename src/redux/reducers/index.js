import {combineReducers} from "redux";
import filterReducer from './filters';
import foodsReducer from './foods';
import categoriesReducer from './categories';
import cartReducer from './cart';
import appReducer from './app'

const RootReducer = combineReducers({
  app: appReducer,
  filter: filterReducer,
  foods: foodsReducer,
  categories: categoriesReducer,
  cart: cartReducer
})

export default RootReducer