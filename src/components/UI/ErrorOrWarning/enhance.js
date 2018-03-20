import { branch, compose, renderNothing } from 'recompose';
import { addProps } from 'utils/recompose';

export const message = ({ error, touched, warning }) => {
  const errorOrWarningMessage = error || warning;
  return touched && errorOrWarningMessage;
};

export default compose(
  addProps({ message }),
  branch(({ message }) => !message, renderNothing),
);
