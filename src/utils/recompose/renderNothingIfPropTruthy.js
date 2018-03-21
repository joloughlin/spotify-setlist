import { branch, renderNothing } from 'recompose';

export const renderNothingIfPropTruthy = propName =>
  branch(props => props[propName], renderNothing);
