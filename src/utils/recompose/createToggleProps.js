import { withStateHandlers } from 'recompose';

export default ({
  initialState = false,
  stateName,
  toggleName,
  toggleOffName,
  toggleOnName,
}) =>
  withStateHandlers(
    { [stateName]: initialState },
    {
      [toggleOnName]: () => () => ({ [stateName]: true }),
      [toggleOffName]: () => () => ({ [stateName]: false }),
      [toggleName]: props => () => ({ [stateName]: !props[stateName] }),
    },
  );
