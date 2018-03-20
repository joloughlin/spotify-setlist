import 'normalize.css';
import React from 'react';
import ReactDOM from 'react-dom';
import './constants/colors.css';
import './constants/styles.css';
import Root from './components/Root';
import configureStore from './store/configureStore';
import { readLocalStorage } from './utils';

const container = document.getElementById('app');
const localStorageInitialState = readLocalStorage();
const store = configureStore({ localStorageInitialState });

ReactDOM.render(<Root store={store} />, container);

if (module.hot) {
  module.hot.accept();
  module.hot.dispose(() => {
    ReactDOM.unmountComponentAtNode(container);
  });
}
