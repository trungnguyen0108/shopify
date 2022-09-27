import { combineReducers } from 'redux';
import productsReducer from "./products/productsSlice";


const store = combineReducers({
  products: productsReducer,
})

export default store