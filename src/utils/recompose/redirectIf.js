import { branch } from 'recompose';
import renderRedirect from './renderRedirect';

export default (test, { pathname, search, state }) =>
  branch(test, renderRedirect({ pathname, search, state }));
