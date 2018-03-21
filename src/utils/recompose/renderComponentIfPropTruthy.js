import { branch, renderComponent } from 'recompose';

export const renderComponentIfPropTruthy = (propName, Component) =>
  branch(props => props[propName], renderComponent(Component));
