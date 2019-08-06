import {
  SEARCH_PRODUCTS,
  SET_PRODUCTS
} from '../actions/products';

const setProducts = payload => ({
  type: SET_PRODUCTS,
  payload
});

const searchProducts = payload => ({
  type: SEARCH_PRODUCTS,
  payload
});

export {
  setProducts,
  searchProducts
};
