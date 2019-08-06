import { createStore, compose } from 'redux';
import immutable from 'immutable';
import createRootReducer from '../reducers/index'

const initialState = immutable.fromJS({});

function configureStore(preloadedState = initialState) {
  const enhancers = [];
  const composedEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
  const enhancerComposed = composedEnhancers(...enhancers);
  const store = createStore(createRootReducer(), preloadedState, enhancerComposed);

  return store;
}

export default configureStore;
