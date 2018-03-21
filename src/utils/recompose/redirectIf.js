import { branch } from 'recompose';
import { renderRedirect } from './renderRedirect';

export const redirectIf = (test, { pathname, search, state }) =>
  branch(test, renderRedirect({ pathname, search, state }));
