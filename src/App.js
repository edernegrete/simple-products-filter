import { Provider } from 'react-redux';
import React, { Fragment } from 'react';
import BaseStyles from './utils/base-styles';
import storeInit from './store';
import Home from './pages/home'

const store = storeInit();
function App() {
  return (
    <Fragment>
      <BaseStyles/>
      <Provider store={store}>
        <Home/>
      </Provider>
    </Fragment>
  );
}
export default App;
