import { connect } from 'react-redux';
import { compose, withHandlers } from 'recompose';
import { reduxForm } from 'redux-form';
import { isAuthenticated, logIn, logOut } from 'reducers/authentication';
import { profilePath } from 'utils';

const mapStateToProps = state => ({
  isAuthenticated: isAuthenticated(state),
});

const mapDispatchtoProps = {
  logIn,
  logOut,
};

export const onSubmit = ({ history, location, logIn }) => async values => {
  await logIn(values);
  const { from } = location.state || { from: { pathname: profilePath } };
  history.push(from);
};

export default compose(
  connect(mapStateToProps, mapDispatchtoProps),
  withHandlers({ onSubmit }),
  reduxForm({ form: 'LogIn' }),
);
