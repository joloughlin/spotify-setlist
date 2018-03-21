import { branch, renderComponent } from 'recompose';

export const renderComponentIfPropFalsy = (propName, Component) =>
  branch(props => !props[propName], renderComponent(Component));
