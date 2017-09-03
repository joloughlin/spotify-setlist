import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { DevTools } from 'components/Layout/DevTools';
import rootReducer from 'reducers';
import localStorageMiddleware from './middlewares/localStorageMiddleware';
import { isDevelopment } from 'constants/values';

let composeFunctions = [
  applyMiddleware(thunkMiddleware, localStorageMiddleware),
];

if (isDevelopment) {
  composeFunctions = [...composeFunctions, DevTools.instrument()];
}

const configureStore = ({ localStorageInitialState }) =>
  createStore(
    rootReducer,
    localStorageInitialState,
    compose(...composeFunctions),
  );

export default configureStore;
