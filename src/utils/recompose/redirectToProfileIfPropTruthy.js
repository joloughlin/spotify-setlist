import { profilePath } from 'utils';
import { redirectIf } from './redirectIf';

export const redirectToProfileIfPropTruthy = propName =>
  redirectIf(props => props[propName], {
    pathname: profilePath,
  });
