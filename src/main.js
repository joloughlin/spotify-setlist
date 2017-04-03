import React from 'react';
import ReactDOM from 'react-dom';
import Root from 'components/Root';
import configureStore from 'store/configureStore';
import createHistory from 'history/createBrowserHistory';
import { readLocalStorage } from 'utilities/localStorage';

const history = createHistory();
const preloadedState = readLocalStorage();
const store = configureStore({ history, preloadedState });

ReactDOM.render(
  <Root history={history} store={store} />,
  document.getElementById('app'),
);
