import { loginPath } from 'utils';
import { redirectIf } from './redirectIf';

const state = ({ location }) => location && { from: location };

export const redirectToLoginIfPropFalsy = propName =>
  redirectIf(props => !props[propName], {
    pathname: loginPath,
    state,
  });
