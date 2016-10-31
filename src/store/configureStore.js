import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import DevTools from 'containers/DevTools';
import rootReducer from 'reducers';

// eslint-disable-next-line no-undef
let composeFunctions = __DEVELOPMENT__ ?
  [applyMiddleware(thunkMiddleware), DevTools.instrument()]:
  [applyMiddleware(thunkMiddleware)];

let configureStore = preloadedState => {
  let store = createStore(
    rootReducer,
    preloadedState,
    compose(...composeFunctions)
  );

  return store;
};

export default configureStore;
