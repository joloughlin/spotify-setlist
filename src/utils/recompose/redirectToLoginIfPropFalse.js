import { loginPath } from 'utils/paths';
import redirectIf from './redirectIf';

export const state = ({ location }) => location && { from: location };

export default propName =>
  redirectIf(props => !props[propName], {
    pathname: loginPath,
    state,
  });
