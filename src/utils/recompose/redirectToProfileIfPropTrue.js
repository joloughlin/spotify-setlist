import { profilePath } from 'utils/paths';
import redirectIf from './redirectIf';

export default propName =>
  redirectIf(props => props[propName], {
    pathname: profilePath,
  });
