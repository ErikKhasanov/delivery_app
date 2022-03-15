import {combineReducers} from "redux";
import filterReducer from './filters';
import foodsReducer from './foods';
import categoriesReducer from './categories';

const RootReducer = combineReducers({
  filter: filterReducer,
  foods: foodsReducer,
  categories: categoriesReducer
})

export default RootReducer