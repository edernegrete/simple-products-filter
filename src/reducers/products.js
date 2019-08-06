import { fromJS } from 'immutable';
import {
  SET_PRODUCTS,
  SEARCH_PRODUCTS,
} from '../actions/products';

const initialState = fromJS({
  data: [],
  results: []
});
const products = (state = initialState, action) => {
  switch (action.type) {
    case SET_PRODUCTS:
      return state.set('data', fromJS(action.payload));
    case SEARCH_PRODUCTS:
      const filterData = state.get('data').filter(item => {
        const search = `${item.get('description').toLowerCase()}${item.get('code').toLowerCase()}`
        return search.includes(action.payload.toLowerCase())
      })
      return state.set('results', fromJS(filterData));
    default: return state;
  }
};

export default products;
