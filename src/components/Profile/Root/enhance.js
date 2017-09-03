import { connect } from 'react-redux';
import { compose, flattenProp } from 'recompose';
import redirectToLoginIfPropFalse from 'utils/recompose/redirectToLoginIfPropFalse';
import addProps from 'utils/recompose/addProps';
import { currentUser } from 'reducers/authentication/selectors';

const mapStateToProps = state => ({
  currentUser: currentUser(state),
});

export const textEmail = ({ email }) => `Email: ${email}`;

export default compose(
  connect(mapStateToProps),
  redirectToLoginIfPropFalse('currentUser'),
  flattenProp('currentUser'),
  addProps({ textEmail }),
);
