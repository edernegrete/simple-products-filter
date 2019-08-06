import { combineReducers } from 'redux-immutable';
import products from './products';
const createRootReducer = () => combineReducers({
  products
});

export default createRootReducer;
