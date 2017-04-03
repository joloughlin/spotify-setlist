import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import DevTools from 'containers/DevTools';
import rootReducer from 'reducers';
import localStorageMiddleware from 'middlewares/localStorageMiddleware';
import { routerMiddleware } from 'react-router-redux';
import { isDevelopment } from 'constants/values';

const configureStore = ({ history, preloadedState }) => {
  const developmentComposeFunctions = isDevelopment
    ? [DevTools.instrument()]
    : [];
  const composeFunctions = [
    applyMiddleware(
      thunkMiddleware,
      routerMiddleware(history),
      localStorageMiddleware,
    ),
    ...developmentComposeFunctions,
  ];

  const store = createStore(
    rootReducer,
    preloadedState,
    compose(...composeFunctions),
  );

  return store;
};

export default configureStore;
