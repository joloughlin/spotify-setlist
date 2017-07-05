import { Redirect } from 'react-router-dom';
import { renderComponent, mapProps } from 'recompose';

export const createPropsMapper = ({ pathname, search, state }) => props => {
  const to = {
    pathname: typeof pathname === 'function' ? pathname(props) : pathname,
    search: typeof search === 'function' ? search(props) : search,
    state: typeof state === 'function' ? state(props) : state,
  };
  return { to };
};

export default ({ pathname, search, state }) => {
  const propsMapper = createPropsMapper({ pathname, search, state });
  const enhance = mapProps(propsMapper);
  const EnhancedRedirect = enhance(Redirect);
  return renderComponent(EnhancedRedirect);
};
