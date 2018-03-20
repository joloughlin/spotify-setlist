import { branch, renderNothing } from 'recompose';

export const renderNothingIfPropFalsy = propName =>
  branch(props => !props[propName], renderNothing);
