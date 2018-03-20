import { connect } from 'react-redux';
import { compose, flattenProp } from 'recompose';
import { addProps, redirectToLoginIfPropFalsy } from 'utils/recompose';
import { currentUser } from 'reducers/authentication/selectors';

const mapStateToProps = state => ({
  currentUser: currentUser(state),
});

export const textEmail = ({ email }) => `Email: ${email}`;

export default compose(
  connect(mapStateToProps),
  redirectToLoginIfPropFalsy('currentUser'),
  flattenProp('currentUser'),
  addProps({ textEmail }),
);
