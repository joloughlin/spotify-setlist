import React from 'react';
import Root from '../../components/Root';
import configureStore from '../../store/configureStore';
import createHistory from 'history/createBrowserHistory';
import { readLocalStorage } from '../../utilities/localStorage';
import Page from 'react-page-object';

export default function createRootPage(initialPath = '/') {
  const history = createHistory();
  const preloadedState = readLocalStorage();
  const store = configureStore({ history, preloadedState });

  return new Page(<Root history={history} store={store} />, { initialPath });
}
