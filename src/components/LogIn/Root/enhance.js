import { connect } from 'react-redux';
import { compose, withHandlers } from 'recompose';
import { reduxForm } from 'redux-form';
import * as authenticationActions from 'reducers/authentication/actions';
import { isAuthenticated } from 'reducers/authentication/selectors';
import redirectToProfileIfPropTrue from 'utils/recompose/redirectToProfileIfPropTrue';
import { profilePath } from 'utils/paths';

const mapStateToProps = state => ({
  isAuthenticated: isAuthenticated(state),
});

export const onSubmit = ({ history, location, logIn }) => async values => {
  await logIn(values);
  const { from } = location.state || { from: { pathname: profilePath } };
  history.push(from);
};

export default compose(
  connect(mapStateToProps, authenticationActions),
  redirectToProfileIfPropTrue('isAuthenticated'),
  withHandlers({ onSubmit }),
  reduxForm({ form: 'LogIn' }),
);
