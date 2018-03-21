import { withStateHandlers } from 'recompose';

export const createWithToggle = ({
  initialState = false,
  initialStateFromProp,
  stateName,
  toggleName,
  toggleOffName,
  toggleOnName,
}) => {
  const handlers = {};

  if (toggleName) {
    handlers[toggleName] = state => () => ({ [stateName]: !state[stateName] });
  }

  if (toggleOnName) {
    handlers[toggleOnName] = () => () => ({ [stateName]: true });
  }

  if (toggleOffName) {
    handlers[toggleOffName] = () => () => ({ [stateName]: false });
  }

  const initialStateConfiguration = initialStateFromProp
    ? props => ({ [stateName]: props[initialStateFromProp] })
    : { [stateName]: initialState };

  return withStateHandlers(initialStateConfiguration, handlers);
};
